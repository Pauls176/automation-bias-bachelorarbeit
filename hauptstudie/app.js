
/* Teilnehmer-ID: im Echtbetrieb kommt sie per ?id=... von LimeSurvey.
   Testmodus erzeugt eine zufällige Test-ID. */

const urlParams =
    new URLSearchParams(window.location.search);

const idFromUrl =
    urlParams.get("id");

const isTestMode =
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1" ||
    location.protocol === "file:" ||
    urlParams.get("test") === "1";

const hasValidSession =
    isTestMode ||
    Boolean(idFromUrl);

const participantId =
    isTestMode ?
        ("TEST-" + crypto.randomUUID()) :
        idFromUrl;

console.log(
    "Participant ID:",
    participantId,
    isTestMode ? "(Testmodus, keine echte Studiensitzung)" : ""
);


/* Fisher-Yates Shuffle (mischt eine Kopie des Arrays) */

function shuffle(array) {

    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
            [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

/* Session-Aufgabenliste aufbauen:
   - Reihenfolge der Taskgruppen wird randomisiert
   - Reihenfolge der Task Varianten je Gruppe wird randomisiert
   - groupOrder hält fest, an welcher Stelle eine Gruppe in
     der randomisierten Reihenfolge durchlaufen wurde
   - isFirstInGroup markiert die erste Aufgabe einer Gruppe,
     vor der der Gruppen-Einleitungsbildschirm gezeigt wird
   - isLastInGroup markiert die letzte Aufgabe einer Gruppe,
     nach der die Objektivitäts-/Subjektivitäts-Frage kommt */

function buildSessionTasks(groups) {

    const sessionTasks = [];

    shuffle(groups).forEach((group, groupIndex) => {

        const groupOrder = groupIndex + 1;

        shuffle(group.variants).forEach((variant, index) => {

            // falsche Antwort ermitteln

            let wrongAnswer = null;

           for (const option of group.options) {

                if (option !== variant.correctAnswer) { 

                    wrongAnswer = option;
                    break;
                }
            }   

            const groupPosition = index + 1;

            // KI-Empfehlung (richtig oder falsch)

            const aiRecommendsCorrectly = groupPosition <= 3;
            let aiRecommendation;
            let aiExplanation;

            if (aiRecommendsCorrectly) {

                aiRecommendation =
                    variant.correctAnswer;

                aiExplanation = variant.explanationIfCorrect;
            } else {

                aiRecommendation =
                    wrongAnswer;

                aiExplanation = variant.explanationIfWrong;
            }

            sessionTasks.push({

                id: variant.variantId,
                groupId: group.groupId,
                groupLabel: group.groupLabel,
                groupOrder: groupOrder,
                groupPosition: groupPosition,
                isFirstInGroup:
                    groupPosition === 1,
                isLastInGroup:
                    groupPosition === group.variants.length,

                groupIntro: group.groupIntro,

                type: group.type,
                prompt: group.prompt,
                instruction: group.instruction,
                options: group.options,

                image: variant.image,
                table: variant.table,
                table1: variant.table1,
                table2: variant.table2,
                information: variant.information,
                hotelName: variant.hotelName,
                location: variant.location,

                correctAnswer: variant.correctAnswer,
                aiRecommendation: aiRecommendation,
                aiExplanation: aiExplanation
            });
        });
    });

    return sessionTasks;
}

/* Fortschritt pro Teilnehmer-ID im localStorage sichern, damit ein
   einfacher Refresh keine Daten verliert.
   Strg+Shift+R und der Testmodus starten immer von vorne. */

const progressStorageKey =
    (!isTestMode && idFromUrl) ?
        ("abp_progress_" + idFromUrl) :
        null;

/* Erkennt einen Hard-Refresh anhand der Navigation-/Resource-Timing-Daten:
   Bei einem normalen Reload beantwortet der Server das HTML meist aus dem
   Cache oder per 304 (kleines transferSize). Ein Hard-Refresh erzwingt das
   Umgehen des Caches, wodurch die Seite vollständig neu übertragen wird. */

function isHardReload() {

    try {

        const [navigationEntry] =
            performance.getEntriesByType("navigation");

        if (!navigationEntry || navigationEntry.type !== "reload") {

            return false;
        }

        return (
            navigationEntry.transferSize > 0 &&
            navigationEntry.transferSize >= navigationEntry.encodedBodySize
        );

    } catch (error) {

        return false;
    }
}

function loadStoredProgress() {

    if (!progressStorageKey || isHardReload()) {

        return null;
    }

    try {

        const raw =
            localStorage.getItem(progressStorageKey);

        return raw ? JSON.parse(raw) : null;

    } catch (error) {

        console.warn(
            "Gespeicherter Fortschritt konnte nicht gelesen werden:",
            error
        );

        return null;
    }
}

function saveProgress() {

    if (!progressStorageKey) {

        return;
    }

    try {

        localStorage.setItem(
            progressStorageKey,
            JSON.stringify({
                tasks: tasks,
                currentTask: currentTask,
                awaitingRating: awaitingRating
            })
        );

    } catch (error) {

        console.warn(
            "Fortschritt konnte nicht gespeichert werden:",
            error
        );
    }
}

/* Experiment-Zustand */

let tasks;

let currentTask = 0;

let awaitingRating = false;

let pendingRatingTask = null;

let taskShownAt = null;

const storedProgress =
    loadStoredProgress();

const isFreshSession =
    !(
        storedProgress &&
        Array.isArray(storedProgress.tasks) &&
        storedProgress.tasks.length > 0
    );

if (!isFreshSession) {

    tasks = storedProgress.tasks;

    currentTask = storedProgress.currentTask || 0;

    awaitingRating = Boolean(storedProgress.awaitingRating);

} else {

    tasks = buildSessionTasks(taskGroups);

    currentTask = 0;

    awaitingRating = false;

    saveProgress();
}

/* Aktuelle Aufgabe anzeigen: ggf. zuerst Gruppen-Einleitung */

function goToCurrentTask() {

    const task =
        tasks[currentTask];

    if (task.isFirstInGroup) {

        showGroupIntro(
            task
        );

    } else {

        renderTask();
    }
}

/* Einleitungsbildschirm für den gesamten Aufgabenteil anzeigen */

function showStudyIntro() {

    document.getElementById(
        "task-section"
    ).hidden =
        true;

    document.getElementById(
        "rating-section"
    ).hidden =
        true;

    document.getElementById(
        "group-intro-section"
    ).hidden =
        true;

    document.getElementById(
        "study-intro-section"
    ).hidden =
        false;
}

/* Gruppen-Einleitungsbildschirm anzeigen */

function showGroupIntro(task) {

    document.getElementById(
        "task-counter"
    ).textContent =
        `Block ${task.groupOrder} von ${taskGroups.length}`;

    document.getElementById(
        "group-intro-title"
    ).textContent =
        task.groupLabel;

    document.getElementById(
        "group-intro-text"
    ).textContent =
        task.groupIntro || "";

    document.getElementById(
        "study-intro-section"
    ).hidden =
        true;

    document.getElementById(
        "task-section"
    ).hidden =
        true;

    document.getElementById(
        "rating-section"
    ).hidden =
        true;

    document.getElementById(
        "group-intro-section"
    ).hidden =
        false;
}

/* Erzeugt ein <table>-Element aus Kopf- und Datenzeilen.
   Enthält eine Zeile weniger Zellen als Kopfspalten vorhanden sind
   (z.B. Interessenähnlichkeit), spannt die letzte Zelle über die
   verbleibenden Spalten. */
function buildDataTable(tableData, className) {

    const table =
        document.createElement("table");

    table.className =
        className;


    // Tabellenkopf

    const thead =
        document.createElement("thead");

    const headerRow =
        document.createElement("tr");

    tableData.headers.forEach(
        header => {

            const th =
                document.createElement("th");

            th.textContent =
                header;

            headerRow.appendChild(
                th
            );
        }
    );

    thead.appendChild(
        headerRow
    );

    table.appendChild(
        thead
    );


    // Tabellenkörper

    const tbody =
        document.createElement("tbody");

    tableData.rows.forEach(
        row => {

            const tr =
                document.createElement("tr");

            row.forEach(
                (cell, index) => {

                    const td =
                        document.createElement("td");

                    td.textContent =
                        cell;

                    const isLastCell =
                        index === row.length - 1;

                    const missingCells =
                        tableData.headers.length - row.length;

                    if (isLastCell && missingCells > 0) {

                        td.colSpan =
                            missingCells + 1;
                    }

                    tr.appendChild(
                        td
                    );
                }
            );

            tbody.appendChild(
                tr
            );
        }
    );

    table.appendChild(
        tbody
    );

    return table;
}

/* Aufgabe laden */

function renderTask() {

    const task =
        tasks[currentTask];

    taskShownAt =
        Date.now();

    /* Aufgabenansicht zeigen, andere Ansichten ausblenden */

    document.getElementById(
        "study-intro-section"
    ).hidden =
        true;

    document.getElementById(
        "group-intro-section"
    ).hidden =
        true;

    document.getElementById(
        "task-section"
    ).hidden =
        false;

    document.getElementById(
        "rating-section"
    ).hidden =
        true;

    /* Fortschrittsanzeige */

    document.getElementById(
        "task-counter"
    ).textContent =
        `Block ${task.groupOrder} von ${taskGroups.length}`;


    /* Titel */

    document.getElementById(
        "task-title"
    ).textContent =
        `Aufgabe ${task.groupPosition}`;

    /* Aufgabenbereich */

     const taskDescription =
        document.getElementById(
            "task-description"
        );

    // Inhalt zunächst leeren

    taskDescription.innerHTML = "";


    /* Aufgabentext */

    const prompt =
        document.createElement("p");

    prompt.textContent =
        task.prompt;

    taskDescription.appendChild(
        prompt
    );

    /* Foto (kann zusätzlich zu einer Tabelle auftreten, z.B. Immobilien) */

    if (task.image) {

        const image =
            document.createElement("img");

        image.src =
            task.image;

        image.alt =
            "Foto derzeit nicht verfügbar";

        image.className =
            "task-image";

        taskDescription.appendChild(
            image
        );
    }

    /* Tabelle(n) */

    if (task.groupId === "speed_dating") {

        // Tabelle 1: Stammdaten & Interessenähnlichkeit

        taskDescription.appendChild(
            buildDataTable(
                task.table1,
                "task-table task-table--speed-dating"
            )
        );

        // Hinweis zwischen den beiden Tabellen

        const tableNote =
            document.createElement("p");

        tableNote.className =
            "table-note";

        tableNote.textContent =
            "Die folgenden Werte zeigen, wie diese Person ihr Gegenüber eingeschätzt hat " +
            "(nicht, wie sie selbst von ihrem Gegenüber eingeschätzt wurde).";

        taskDescription.appendChild(
            tableNote
        );

        // Tabelle 2: Bewertungen

        taskDescription.appendChild(
            buildDataTable(
                task.table2,
                "task-table task-table--speed-dating"
            )
        );

    } else if (task.table) {

        taskDescription.appendChild(
            buildDataTable(
                task.table,
                "task-table"
            )
        );
    }

    /* Text */

     if (task.information) {

        if (task.hotelName && task.location) {

            const hotelHeading =
                document.createElement("p");

            hotelHeading.className =
                "hotel-heading";

            hotelHeading.textContent =
                `Bewertung von ${task.hotelName} in ${task.location}`;

            taskDescription.appendChild(
                hotelHeading
            );
        }

        const informationBox =
            document.createElement("div");

        informationBox.className =
            "information-box";

        informationBox.textContent =
            task.information;

        taskDescription.appendChild(
            informationBox
        );
    }

    /* Instruktionstext (ehemals Chat-Einleitung) */

    document.getElementById(
        "task-instruction"
    ).textContent =
        task.instruction ||
        "Bitte geben Sie Ihre Antwort auf die Aufgabe ein.";

    /* Antwortbuttons erzeugen */

     createAnswerButtons(
        task.options
    );
}

/* Antwortbuttons erzeugen */
function createAnswerButtons(
    options
) {

    const answerArea =
        document.getElementById(
            "answer-options"
        );

    answerArea.innerHTML = "";


    options.forEach(
        option => {

            const button =
                document.createElement("button");

            button.className =
                "answer-button";

            button.textContent =
                option;

            button.dataset.answer =
                option;

            button.onclick =
                () => handleAnswer(option);

            answerArea.appendChild(
                button
            );
        }
    );
}

/* Nutzerantwort verarbeiten */

async function handleAnswer(
    answer
) {

    disableAnswerButtons();

    const task =
        tasks[currentTask];

    try {

        await saveTrial(
            task,
            answer
        );

        document.getElementById(
            "status-message"
        ).textContent = "";

        if (task.isLastInGroup) {

            awaitingRating = true;

            saveProgress();

            showRatingScreen(
                task
            );

        } else {

            advanceToNextTask();
        }

        window.scrollTo(
            0,
            0
        );

    } catch (error) {

        console.error(
            error
        );

        document
            .getElementById(
                "status-message"
            )
            .textContent =
            "Beim Speichern ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.";

        enableAnswerButtons();
    }
}

/* Daten an Supabase senden */

async function saveTrial(task, answer) {

    const answerCorrect =
        answer === task.correctAnswer;

    const responseTimeSeconds =
        taskShownAt !== null ?
            Math.round(
                (Date.now() - taskShownAt) / 100
            ) / 10 :
            null;

    const {
        error
    } = await supabaseClient
        .from("trials")
        .insert({

            participant_id:
                participantId,

            task_number:
                currentTask + 1,

            task_id:
                task.id,

            task_type:
                task.type,

            group_id:
                task.groupId,

            group_position:
                task.groupPosition,

            first_answer:
                answer,

            correct_answer:
                task.correctAnswer,

            first_answer_correct:
                answerCorrect,

            response_time_seconds:
                responseTimeSeconds
        });


    if (error) {

        console.error(
            "Supabase error:",
            error
        );

        throw error;
    }


    console.log(
        "Task gespeichert:",
        task.id
    );
}

/* Objektivitäts-/Subjektivitäts-Rating anzeigen */

function showRatingScreen(task) {

    pendingRatingTask =
        task;

    document.getElementById(
        "rating-group-name"
    ).textContent =
        task.groupLabel;

    document
        .querySelectorAll(
            'input[name="objectivity-rating"]'
        )
        .forEach(
            radio => {
                radio.checked = false;
            }
        );

    document.getElementById(
        "rating-error"
    ).hidden =
        true;

    document.getElementById(
        "rating-submit"
    ).disabled =
        false;

    document.getElementById(
        "task-section"
    ).hidden =
        true;

    document.getElementById(
        "rating-section"
    ).hidden =
        false;
}

/* Rating an Supabase senden */

async function saveGroupRating(task, rating) {

    const {
        error
    } = await supabaseClient
        .from("group_ratings")
        .insert({

            participant_id:
                participantId,

            group_id:
                task.groupId,

            group_order:
                task.groupOrder,

            rating:
                rating
        });


    if (error) {

        console.error(
            "Supabase error:",
            error
        );

        throw error;
    }
}

/* Rating-Interaktion */

document.getElementById(
    "rating-options"
).addEventListener(
    "change",
    () => {

        document.getElementById(
            "rating-error"
        ).hidden =
            true;
    }
);

document.getElementById(
    "rating-submit"
).addEventListener(
    "click",
    async () => {

        const selected =
            document.querySelector(
                'input[name="objectivity-rating"]:checked'
            );

        if (!selected) {

            document.getElementById(
                "rating-error"
            ).hidden =
                false;

            return;
        }

        const submitButton =
            document.getElementById(
                "rating-submit"
            );

        submitButton.disabled =
            true;

        try {

            await saveGroupRating(
                pendingRatingTask,
                Number(selected.value)
            );

            document.getElementById(
                "status-message"
            ).textContent = "";

            advanceToNextTask();

        } catch (error) {

            console.error(
                error
            );

            document
                .getElementById(
                    "status-message"
                )
                .textContent =
                "Beim Speichern ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.";

            submitButton.disabled =
                false;
        }
    }
);


/* Antwortbuttons aktivieren/deaktivieren */

function enableAnswerButtons() {

    document
        .querySelectorAll(
            "#answer-options .answer-button"
        )
        .forEach(
            button => {

                button.disabled =
                    false;
            }
        );
}

function disableAnswerButtons() {

    document
        .querySelectorAll(
            "#answer-options .answer-button"
        )
        .forEach(
            button => {

                button.disabled =
                    true;
            }
        );
}


/* Nächste Aufgabe */

function advanceToNextTask() {

    currentTask++;

    awaitingRating = false;

    saveProgress();


    if (
        currentTask >=
        tasks.length
    ) {

        showCompletion();

        return;
    }


    goToCurrentTask();
}


/* Abschluss */

function showCompletion() {

    document.getElementById(
        "group-intro-section"
    ).hidden =
        true;

    document.getElementById(
        "rating-section"
    ).hidden =
        true;

    document.getElementById(
        "task-section"
    ).hidden =
        false;

    document.getElementById(
        "task-counter"
    ).textContent =
        "Studie abgeschlossen";


    document.getElementById(
        "task-title"
    ).textContent =
        "Vielen Dank!";


    document.getElementById(
        "task-description"
    ).innerHTML = `

        <p>
            Sie haben alle ${tasks.length} Aufgaben
            erfolgreich bearbeitet.
        </p>

    `;


    document.getElementById(
        "task-instruction"
    ).textContent =
        isTestMode ?
            "Vielen Dank für Ihre Teilnahme. (Testmodus – keine Weiterleitung.)" :
            "Sie werden gleich zur Umfrage zurückgeleitet …";


    document.querySelector(
        ".answer-area"
    ).style.display =
        "none";


    if (!isTestMode) {

        setTimeout(
            () => {

                window.location.href =
                    EXIT_SURVEY_URL +
                    "?id=" +
                    encodeURIComponent(
                        participantId
                    );
            },
            EXIT_REDIRECT_DELAY_MS
        );
    }
}


/* Fehlerfall: Seite wurde ohne gültige Teilnehmer-ID aufgerufen
   (z. B. direkter Aufruf statt über den Studienlink) */

function showMissingIdError() {

    document.getElementById(
        "group-intro-section"
    ).hidden =
        true;

    document.getElementById(
        "rating-section"
    ).hidden =
        true;

    document.getElementById(
        "task-section"
    ).hidden =
        false;

    document.getElementById(
        "task-counter"
    ).textContent =
        "Fehler";

    document.getElementById(
        "task-title"
    ).textContent =
        "Diese Seite kann nicht direkt aufgerufen werden";

    document.getElementById(
        "task-description"
    ).innerHTML = `

        <p>
            Für die Studie fehlt eine gültige Teilnehmer-Kennung.
            Bitte starten Sie die Studie über den Ihnen zugesandten
            Umfrage-Link.
        </p>

    `;

    document.getElementById(
        "task-instruction"
    ).textContent =
        "";

    document.querySelector(
        ".answer-area"
    ).style.display =
        "none";
}


/* Studien-Einleitung: Weiter-Button */

document.getElementById(
    "study-intro-continue"
).addEventListener(
    "click",
    () => {

        goToCurrentTask();
    }
);


/* Gruppen-Einleitung: Weiter-Button */

document.getElementById(
    "group-intro-continue"
).addEventListener(
    "click",
    () => {

        renderTask();
    }
);


/* START */

if (hasValidSession) {

    if (isFreshSession) {

        showStudyIntro();

    } else if (currentTask >= tasks.length) {

        showCompletion();

    } else if (awaitingRating) {

        showRatingScreen(
            tasks[currentTask]
        );

    } else {

        goToCurrentTask();
    }

} else {

    showMissingIdError();
}
