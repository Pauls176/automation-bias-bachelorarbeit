/* 5 Taskgruppen (mit je 5 Varianten)
   
   Jede Gruppe hat eine feste Frage, Instruktion und Antwortoptionen.
   Die Varianten einer Gruppe haben unterschiedliche konkrete Daten
   und jeweils eine richtige Antwort. */

const taskGroups = [

    /* Taskgruppe: Speed-Dating-Partner */
    {
        groupId: "speed_dating",

        // wird als Aufgabentitel angezeigt
        groupLabel: "Speed-Dating-Partner",

        // wird im Einleitungs-Screen des Blocks angezeigt
        groupIntro:
            "In diesem Aufgabenblock sehen Sie jeweils zwei Teilnehmer eines " +
            "Speed-Dating-Events. Es handelt sich um heterosexuelle Paarungen. Sie erhalten eine Tabelle " +
            "mit den Angaben beider Dating-Partner. Die Teilnehmer wurden unter anderem darum gebeten, " +
            "ihr Gegenüber auf einer Skala von 1-10 zu bewerten, hinsichtlich Attraktivität, Intelligenz " +
            "und weiteren Dimensionen. Aus dem Abgleich ihrer persönlichen Interessen wurde für diese Paarung " +
            "zudem eine prozentuale Interessenähnlichkeit berechnet. \n\n" +
            "Ihre Aufgabe besteht darin, anhand dieser Informationen einzuschätzen, " +
            "ob die beiden auf ein zweites Date gehen werden. Ein zweites Date " +
            "kommt nur zustande, wenn beide Partner sich dafür entschieden haben.",

        prompt:
            "Betrachten Sie die folgenden Informationen zu einem " +
            "Speed-Dating-Paar. Haben die beiden Personen " +
            "sich für ein zweites Date entschieden?",

        // erste Chatnachricht
        instruction:
            "Was glauben Sie? Wird dieses Paar ein zweites Date haben?",

        options: [
            "Ja, zum zweiten Date",
            "Nein, kein zweites Date"
        ],

        variants: [
            {
                variantId: "speed_dating_01",
                table1: {
                    headers: ["Merkmal", "Person A", "Person B"],
                    rows: [
                        ["Geschlecht", "Frau", "Mann"],
                        ["Alter", "25", "28"],
                        ["Studium", "Internationale Beziehungen/ Betriebswirtschaftslehre", "Biomedizin"],
                        ["Freizeitaktivitäten", "zweimal/Woche", "einmal/Woche"],
                        ["Interessenähnlichkeit", "66%"]
                    ]
                },
                table2: {
                    headers: ["Bewertung", "Person A über Person B", "Person B über Person A"],
                    rows: [
                        ["Attraktivität", "8", "7"],
                        ["Aufrichtigkeit", "8", "10"],
                        ["Intelligenz", "6", "8"],
                        ["Unterhaltsamkeit", "6", "9"],
                        ["Ambition", "6", "—"]
                    ]
                },
                correctAnswer: "Ja, zum zweiten Date",
                explanationIfCorrect: "Beide bewerten sich hoch, etwa bei Attraktivität (8 und 7) und Aufrichtigkeit (8 und 10). Das spricht klar für ein zweites Date.",
                explanationIfWrong: "Die Frau bewertet Intelligenz und Unterhaltsamkeit des Mannes nur mit 6 Punkten, er ihre dagegen mit 8 und 9. Das spricht klar gegen ein zweites Date."
            },
            {
                variantId: "speed_dating_02",
                table1: {
                    headers: ["Merkmal", "Person A", "Person B"],
                    rows: [
                        ["Geschlecht", "Frau", "Mann"],
                        ["Alter", "22", "27"],
                        ["Studium", "Kommunikationswissenschaften", "Chemie"],
                        ["Freizeitaktivitäten", "mehrmals/Woche", "einmal/Woche"],
                        ["Interessenähnlichkeit", "57%"]
                    ]
                },
                table2: {
                    headers: ["Bewertung", "Person A über Person B", "Person B über Person A"],
                    rows: [
                        ["Attraktivität", "7", "9"],
                        ["Aufrichtigkeit", "7", "8"],
                        ["Intelligenz", "7", "7"],
                        ["Unterhaltsamkeit", "8", "8"],
                        ["Ambition", "7", "5"]
                    ]
                },
                correctAnswer: "Ja, zum zweiten Date",
                explanationIfCorrect: "Beide bewerten sich fast durchweg mit 7 bis 9 Punkten, der Mann die Attraktivität der Frau sogar mit 9. Das spricht klar für ein zweites Date.",
                explanationIfWrong: "Die Frau ist mit 22 Jahren fünf Jahre jünger als der Mann, und beide teilen nur 57 % ihrer Interessen. Das spricht klar gegen ein zweites Date."
            },
            {
                variantId: "speed_dating_03",
                table1: {
                    headers: ["Merkmal", "Person A", "Person B"],
                    rows: [
                        ["Geschlecht", "Frau", "Mann"],
                        ["Alter", "25", "27"],
                        ["Studium", "Bildung/ Wissenschaft", "Wirtschaft/ Finanzen"],
                        ["Freizeitaktivitäten", "mehrmals/Woche", "zweimal/Woche"],
                        ["Interessenähnlichkeit", "63%"]
                    ]
                },
                table2: {
                    headers: ["Bewertung", "Person A über Person B", "Person B über Person A"],
                    rows: [
                        ["Attraktivität", "7", "6"],
                        ["Aufrichtigkeit", "7", "10"],
                        ["Intelligenz", "7", "9"],
                        ["Unterhaltsamkeit", "9", "9"],
                        ["Ambition", "—", "4"]
                    ]
                },
                correctAnswer: "Ja, zum zweiten Date",
                explanationIfCorrect: "Die Frau bewertet den Mann durchgehend mit 7 bis 9 Punkten, er sie mehrfach sogar mit 9 bis 10. Das spricht klar für ein zweites Date.",
                explanationIfWrong: "Der Mann bewertet die Attraktivität der Frau nur mit 6 und ihre Ambition sogar nur mit 4 Punkten. Das spricht klar gegen ein zweites Date."
            },
            {
                variantId: "speed_dating_06",
                table1: {
                    headers: ["Merkmal", "Person A", "Person B"],
                    rows: [
                        ["Geschlecht", "Frau", "Mann"],
                        ["Alter", "28", "32"],
                        ["Studium", "Internationale Beziehungen/ Betriebswirtschaftslehre", "Psychologie"],
                        ["Freizeitaktivitäten", "zweimal/Woche", "zweimal/Monat"],
                        ["Interessenähnlichkeit", "58%"]
                    ]
                },
                table2: {
                    headers: ["Bewertung", "Person A über Person B", "Person B über Person A"],
                    rows: [
                        ["Attraktivität", "5", "7"],
                        ["Aufrichtigkeit", "8", "7"],
                        ["Intelligenz", "6", "10"],
                        ["Unterhaltsamkeit", "7", "—"],
                        ["Ambition", "7", "8"]
                    ]
                },
                correctAnswer: "Nein, kein zweites Date",
                explanationIfCorrect: "Die Frau bewertet die Attraktivität des Mannes nur mit 5 Punkten, und ihre Freizeitgewohnheiten gehen weit auseinander. Das spricht klar gegen ein zweites Date.",
                explanationIfWrong: "Der Mann gibt der Frau für Intelligenz die Höchstwertung 10, und beide bewerten Aufrichtigkeit und Ambition mit 7 bis 8. Das spricht klar für ein zweites Date."
            },
            {
                variantId: "speed_dating_09",
                table1: {
                    headers: ["Merkmal", "Person A", "Person B"],
                    rows: [
                        ["Geschlecht", "Frau", "Mann"],
                        ["Alter", "25", "24"],
                        ["Studium", "Soziale Arbeit", "Biomedizin/ Technik"],
                        ["Freizeitaktivitäten", "einmal/Woche", "einmal/Woche"],
                        ["Interessenähnlichkeit", "59.5%"]
                    ]
                },
                table2: {
                    headers: ["Bewertung", "Person A über Person B", "Person B über Person A"],
                    rows: [
                        ["Attraktivität", "8", "4"],
                        ["Aufrichtigkeit", "6", "8"],
                        ["Intelligenz", "7", "7"],
                        ["Unterhaltsamkeit", "7", "6"],
                        ["Ambition", "6", "6"]
                    ]
                },
                correctAnswer: "Nein, kein zweites Date",
                explanationIfCorrect: "Der Mann bewertet die Attraktivität der Frau nur mit 4 Punkten, dem niedrigsten Wert der Tabelle. Das spricht klar gegen ein zweites Date.",
                explanationIfWrong: "Die Frau findet den Mann mit 8 Punkten attraktiv, er schätzt ihre Aufrichtigkeit mit 8, und beide sind fast gleich alt. Das spricht klar für ein zweites Date."
            }
        ]
    },

    /* Taskgruppe: Hotelrezension */
    {
        groupId: "hotel_review",

        groupLabel: "Hotelrezension",

        groupIntro:
            "In diesem Aufgabenblock lesen Sie Hotelrezensionen. " +
            "Jede Rezension ist in zwei Teile gegliedert: einen positiven " +
            "und einen negativen Teil, die die Bewertung des Hotelgastes widerspiegeln. " +
            "Eine Rezension muss nicht beide Teile enthalten, kann also auch ausschließlich positiv " +
            "oder ausschließlich negativ sein. \n\n" +
            "Ihre Aufgabe besteht darin, zu beurteilen, ob die Rezension von einem Menschen " +
            "verfasst wurde oder KI-generiert ist.",

        prompt:
            "Lesen Sie den folgenden Text. " +
            "Wurde diese Hotelrezension von einem Menschen verfasst oder ist sie KI-generiert?",

        instruction:
            "Wurde diese Rezension von einem Menschen " +
            "verfasst oder ist sie KI-generiert?",

        options: [
            "von einem Menschen",
            "KI-generiert"
        ],

        variants: [
            {
                variantId: "hotel_review_01",
                hotelName: "Park Plaza Beijing Wangfujing",
                location: "Peking, China",
                information:
                    "Positiv:\n\n" +
                    "Lage direkt an einer U-Bahn-Station. Perfekt. Waschmaschinen und Trockner vorhanden. " +
                    "Gutes Frühstück, guter Concierge. Danke.",
                correctAnswer: "von einem Menschen",
                explanationIfCorrect: "Der Text besteht aus knappen Fragmenten wie „Perfekt.“ und endet mit einem persönlichen „Danke.“. Das ist typisch für einen menschlichen Verfasser.",
                explanationIfWrong: "Der Text hakt Lage, Ausstattung, Frühstück und Concierge der Reihe nach ab, ohne ein Erlebnis zu schildern. Das ist typisch für KI-generierte Texte."
            },
            {
                variantId: "hotel_review_04",
                hotelName: "Holiday Inn Washington-Central/White House",
                location: "Washington D.C., USA",
                information:
                    "Positiv:\n\n" +
                    "Große Zimmer modern eingerichtet. 10-15min zu Fuß beim Weißen Haus. " +
                    "Supermarkt nur 1 Straße weiter entfernt.",
                correctAnswer: "von einem Menschen",
                explanationIfCorrect: "Der Text enthält kleine Unebenheiten wie „zu Fuß beim Weißen Haus“ und praktische Alltagsdetails. Das ist typisch für einen menschlichen Verfasser.",
                explanationIfWrong: "Der Text handelt in drei gleich gebauten Kurzsätzen Zimmer, Lage und Umgebung ab, ganz ohne persönliche Wertung. Das ist typisch für KI-generierte Texte."
            },
            {
                variantId: "hotel_review_06",
                hotelName: "Hotel Passy Eiffel",
                location: "Paris, Frankreich",
                information:
                    "Positiv:\n\n" +
                    "Die Lage des Hotel Passy Eiffel in Paris ist hervorragend, nur wenige Gehminuten vom " +
                    "Eiffelturm entfernt. Das Personal ist höflich und die Zimmer sind sauber.\n\n" +
                    "Negativ:\n\n" +
                    "Leider war das Zimmer, in dem wir untergebracht waren, sehr klein und das Bad war veraltet. " +
                    "Außerdem war das Frühstück einfach und der Service war oft unterdurchschnittlich.",
                correctAnswer: "KI-generiert",
                explanationIfCorrect: "Der Text nennt den vollen Hotelnamen und formuliert Lob und Kritik auffallend gleichmäßig und glatt. Das ist typisch für KI-generierte Texte.",
                explanationIfWrong: "Der Text schildert mit „das Zimmer, in dem wir untergebracht waren“ einen persönlichen Aufenthalt samt veraltetem Bad. Das ist typisch für einen menschlichen Verfasser."
            },
            {
                variantId: "hotel_review_10",
                hotelName: "New Park Hotel",
                location: "Ankara, Türkei",
                information:
                    "Positiv:\n\n" +
                    "Überaus freundliches Personal und sehr sauberes, geräumiges Zimmer in zentraler Lage. \n\n" +
                    "Negativ:\n\n" +
                    "Die Wände sind ein wenig dünn. Man hört das Nachbarzimmer.",
                correctAnswer: "von einem Menschen",
                explanationIfCorrect: "Die Kritik ist kurz und alltagsnah formuliert: „Man hört das Nachbarzimmer.“ Das ist typisch für einen menschlichen Verfasser.",
                explanationIfWrong: "Der Text reiht Standardlob wie „überaus freundliches Personal“ und „sauberes, geräumiges Zimmer“ aneinander. Das ist typisch für KI-generierte Texte."
            },
            {
                variantId: "hotel_review_12",
                hotelName: "Hotel Cinnah",
                location: "Ankara, Türkei",
                information:
                    "Positiv:\n\n" +
                    "Das Personal war sehr zuvorkommend, das Zimmer war sauber und modern eingerichtet " +
                    "und das Frühstück war reichlich. \n\n" +
                    "Negativ:\n\n" +
                    "Die Außenlärmbelastung war manchmal störend, insbesondere während der Stoßzeiten.",
                correctAnswer: "KI-generiert",
                explanationIfCorrect: "Der Text handelt Personal, Zimmer und Frühstück in einem gleichmäßigen Satz ab und formuliert die Kritik auffallend sachlich. Das ist typisch für KI-generierte Texte.",
                explanationIfWrong: "Die Kritik am Außenlärm während der Stoßzeiten beschreibt ein konkretes Ärgernis vor Ort. Das ist typisch für einen menschlichen Verfasser."
            }
        ]
    },

    /* Taskgruppe: Emotionserkennung */
    {
        groupId: "emotion",

        groupLabel: "Emotionserkennung",

        groupIntro:
            "In diesem Aufgabenblock sehen Sie jeweils ein Foto einer Person. " +
            "Es handelt sich um Standbilder realer Personen, die in einem emotionalen Moment " +
            "aufgenommen wurden. \n\n" +
            "Ihre Aufgabe besteht darin, die primäre Emotion der abgebildeten " +
            "Person zu erkennen.",

        prompt:
            "Betrachten Sie das folgende Foto. " +
            "Welche Emotion drückt das Gesicht der Person primär aus?",

        instruction:
            "Bitte geben Sie Ihre Einschätzung " +
            "zu der abgebildeten Emotion ein.",

        options: [
            "Überraschung",
            "Wut"
        ],

        variants: [
            {
                variantId: "emotion_01",
                image: "images/emot-1.png",
                correctAnswer: "Wut",
                explanationIfCorrect: "Die Augenbrauen sind leicht zusammengezogen, der Blick ist direkt auf das Gegenüber gerichtet und der Mund ist angespannt geöffnet. Diese Kombination ist typisch für Wut.",
                explanationIfWrong: "Der Mund ist geöffnet und der Blick ist aufmerksam nach vorn gerichtet, als hätte die Person gerade etwas Unerwartetes gehört. Diese Kombination ist typisch für Überraschung."
            },
            {
                variantId: "emotion_03",
                image: "images/emot-3.png",
                correctAnswer: "Wut",
                explanationIfCorrect: "Der Mund ist weit geöffnet, die Zähne sind deutlich sichtbar und der Blick ist starr und intensiv nach vorn gerichtet. Diese Kombination ist typisch für Wut.",
                explanationIfWrong: "Die Augen sind weit aufgerissen und der Mund steht weit offen, als hätte die Person gerade etwas Unerwartetes gesehen. Diese Kombination ist typisch für Überraschung."
            },
            {
                variantId: "emotion_04",
                image: "images/emot-4.png",
                correctAnswer: "Wut",
                explanationIfCorrect: "Die Oberlippe ist angespannt hochgezogen, die Zähne sind sichtbar und der Blick ist intensiv auf das Gegenüber gerichtet. Diese Kombination ist typisch für Wut.",
                explanationIfWrong: "Die Augen sind weit aufgerissen, die Augenbrauen sind angehoben und der Mund steht offen. Diese Kombination ist typisch für Überraschung."
            },
            {
                variantId: "emotion_08",
                image: "images/emot-8.png",
                correctAnswer: "Überraschung",
                explanationIfCorrect: "Der Mund ist leicht rund geöffnet, während Stirn und Augenbrauen entspannt bleiben. Diese Kombination ist typisch für Überraschung.",
                explanationIfWrong: "Die Augen sind leicht verengt und der Blick ist ernst und fixierend, während der Mund zum Sprechen geöffnet ist. Diese Kombination ist typisch für Wut."
            },
            {
                variantId: "emotion_09",
                image: "images/emot-9.png",
                correctAnswer: "Überraschung",
                explanationIfCorrect: "Der Mund ist geöffnet, die Augenbrauen sind angehoben und der Blick wendet sich plötzlich zur Seite. Diese Kombination ist typisch für Überraschung.",
                explanationIfWrong: "Die Oberlippe ist angespannt, die Zähne sind sichtbar und der Blick ist scharf zur Seite gerichtet. Diese Kombination ist typisch für Wut."
            }
        ]
    },

    /* Taskgruppe: Immobilienwerte */
    {
        groupId: "real_estate",

        groupLabel: "Immobilienbewertung",

        groupIntro:
            "In diesem Aufgabenblock sehen Sie Eckdaten einer realen Immobilie. " +
            "Sie erhalten jeweils ein Foto der Immobilie, sowie zusätzliche Eckdaten, " +
            "u.a. Baujahr, Wohnfläche und Lage. \n\n" +
            "Ihre Aufgabe besteht darin, den gelisteten Kaufpreis der Immobilie einzuschätzen.",

        prompt:
            "Betrachten Sie die folgenden Informationen. " +
            "Wie viel ist diese Immobilie wert?",

        instruction:
            "Bitte geben Sie Ihre Schätzung " +
            "zum Immobilienwert ein.",

        options: [
            "weniger als 550.000€",
            "mehr als 550.000€"
        ],

        variants: [
            {
                variantId: "real_estate_01",
                image: "images/immo-1.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Wohnen mit Gartenidylle – Gepflegtes Ein-/Zweifamilienhaus in begehrter Lage von Hamburg-Stellingen!"],
                        ["Baujahr", "1957"],
                        ["Ort", "Stellingen, 22525 Hamburg"],
                        ["Zimmer", "4"],
                        ["Wohnfläche in m²", "123,38"],
                        ["Grundstücksfläche in m²", "513"]
                    ]
                },
                correctAnswer: "mehr als 550.000€",
                explanationIfCorrect: "Das Haus bietet über 120 m² Wohnfläche auf 513 m² Grundstück in begehrter Hamburger Lage. Daher liegt der Preis über 550.000 €.",
                explanationIfWrong: "Das Haus stammt aus dem Jahr 1957, sodass trotz Pflege Modernisierungen anstehen, die den Preis drücken. Daher liegt der Preis unter 550.000 €."
            },
            {
                variantId: "real_estate_04",
                image: "images/immo-4.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Kleines Reihenmittelhaus nebst Garage in einer Seitenstraße"],
                        ["Baujahr", "1957"],
                        ["Ort", "Benrath, 40593 Düsseldorf"],
                        ["Zimmer", "4"],
                        ["Wohnfläche in m²", "84,01"],
                        ["Grundstücksfläche in m²", "290.04"]
                    ]
                },
                correctAnswer: "weniger als 550.000€",
                explanationIfCorrect: "Laut Titel ist es ein kleines Reihenmittelhaus mit nur 84 m² Wohnfläche aus dem Jahr 1957. Daher liegt der Preis unter 550.000 €.",
                explanationIfWrong: "Das Haus liegt in der Großstadt Düsseldorf und bietet 4 Zimmer, eine eigene Garage und rund 290 m² Grundstück. Daher liegt der Preis über 550.000 €."
            },
            {
                variantId: "real_estate_06",
                image: "images/immo-6.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Exklusiv saniertes Wohnhaus mit Indoor-Pool, Wellnessbereich und hochwertiger Ausstattung"],
                        ["Baujahr", "1972"],
                        ["Ort", "Urdenbach, 40593 Düsseldorf"],
                        ["Zimmer", "5"],
                        ["Wohnfläche in m²", "276"],
                        ["Grundstücksfläche in m²", "321"]
                    ]
                },
                correctAnswer: "mehr als 550.000€",
                explanationIfCorrect: "Das Haus ist exklusiv saniert, hat Indoor-Pool, Wellnessbereich und 276 m² Wohnfläche. Daher liegt der Preis über 550.000 €.",
                explanationIfWrong: "Das Haus stammt von 1972, und Indoor-Pool und Wellnessbereich bringen hohe laufende Kosten mit sich, die Käufer abschrecken. Daher liegt der Preis unter 550.000 €."
            },
            {
                variantId: "real_estate_07",
                image: "images/immo-7.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Traumhaftes Altstadthaus mit dem ganz besonderen Flair in der Lübecker Altstadt"],
                        ["Baujahr", "1600"],
                        ["Ort", "Innenstadt, 23552 Lübeck"],
                        ["Zimmer", "4"],
                        ["Wohnfläche in m²", "93"],
                        ["Grundstücksfläche in m²", "36"]
                    ]
                },
                correctAnswer: "weniger als 550.000€",
                explanationIfCorrect: "Das Haus hat nur 93 m² Wohnfläche, ein winziges Grundstück von 36 m² und stammt von 1600. Daher liegt der Preis unter 550.000 €.",
                explanationIfWrong: "Das Haus ist ein historisches Unikat von 1600 mitten in der Lübecker Altstadt, laut Titel mit ganz besonderem Flair. Daher liegt der Preis über 550.000 €."
            },
            {
                variantId: "real_estate_09",
                image: "images/immo-9.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Bestes, ruhiges München Obermenzing S2, nh. Grandlschule, DHH, 3 Zi , Bad, Wc, Balk, Terr, Garten"],
                        ["Baujahr", "1982"],
                        ["Ort", "Obermenzing, 81247 München"],
                        ["Zimmer", "3"],
                        ["Wohnfläche in m²", "77"],
                        ["Grundstücksfläche in m²", "196"]
                    ]
                },
                correctAnswer: "mehr als 550.000€",
                explanationIfCorrect: "Das Haus liegt laut Titel in bester, ruhiger Lage in München und bietet Garten, Balkon und Terrasse. Daher liegt der Preis über 550.000 €.",
                explanationIfWrong: "Das Haus bietet nur 3 Zimmer auf 77 m² Wohnfläche und ein Grundstück von 196 m². Daher liegt der Preis unter 550.000 €."
            }
        ]
    },

    /* Taskgruppe: Regenvorhersage */
    {
        groupId: "rain_forecast",

        groupLabel: "Regenvorhersage",

        groupIntro:
            "In diesem Aufgabenblock sehen Sie jeweils Wetterdaten für " +
            "einen Tag in Hamburg (Fuhlsbüttel). Die Daten sind einer lokalen Wetterstation " +
            "entnommen und beinhalten u.a. Durchschnittstemperatur, Sonnenstunden und Niederschläge " +
            "der vorigen drei Tage. \n\n" +
            "Ihre Aufgabe besteht darin, eine Prognose abzugeben, ob es an diesem Tag " +
            "regnen wird oder nicht.",
            
        prompt:
            "Betrachten Sie die folgenden Wetterdaten aus Hamburg (Fuhlsbüttel), Deutschland. " +
            "Hat es an diesem Tag dort geregnet?",

        instruction:
            "Bitte geben Sie eine Prognose " +
            "zur Regenwahrscheinlichkeit ein.",

        options: [
            "Kein Regen",
            "Regen"
        ],

        variants: [
            {
                variantId: "rain_forecast_12",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "10.01.2025"],
                        ["Ø Temperatur", "1,2 °C"],
                        ["Sonnenstunden", "1,0 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "3,1 mm"]
                    ]
                },
                correctAnswer: "Regen",
                explanationIfCorrect: "Mit nur 1 Sonnenstunde war es fast ganztägig bedeckt, und in den drei Vortagen fielen bereits 3,1 mm Niederschlag. Daher hat es geregnet.",
                explanationIfWrong: "In den drei Vortagen fielen nur 3,1 mm Niederschlag, die Wetterlage war also überwiegend trocken. Daher hat es nicht geregnet."
            },
            {
                variantId: "rain_forecast_02",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "05.02.2025"],
                        ["Ø Temperatur", "0,4 °C"],
                        ["Sonnenstunden", "0,0 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "8,5 mm"]
                    ]
                },
                correctAnswer: "Regen",
                explanationIfCorrect: "Es gab keine einzige Sonnenstunde, und in den drei Vortagen fielen bereits 8,5 mm Niederschlag. Daher hat es geregnet.",
                explanationIfWrong: "Bei 0,4 °C lag die Temperatur nahe am Gefrierpunkt, sodass Niederschlag als Schnee statt als Regen fällt. Daher hat es nicht geregnet."
            },
            {
                variantId: "rain_forecast_06",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "11.06.2025"],
                        ["Ø Temperatur", "13,8 °C"],
                        ["Sonnenstunden", "13,6 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "14,2 mm"]
                    ]
                },
                correctAnswer: "Kein Regen",
                explanationIfCorrect: "Mit 13,6 Sonnenstunden war es fast durchgehend sonnig, trotz Niederschlag in den Vortagen. Daher hat es nicht geregnet.",
                explanationIfWrong: "In den drei Vortagen fielen bereits 14,2 mm Niederschlag, und mit 13,8 °C blieb es für Juni kühl und unbeständig. Daher hat es geregnet."
            },
            {
                variantId: "rain_forecast_08",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "29.06.2025"],
                        ["Ø Temperatur", "19,5 °C"],
                        ["Sonnenstunden", "10,7 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "10,1 mm"]
                    ]
                },
                correctAnswer: "Kein Regen",
                explanationIfCorrect: "Mit 10,7 Sonnenstunden und 19,5 °C war es ein überwiegend sonniger, warmer Sommertag. Daher hat es nicht geregnet.",
                explanationIfWrong: "In den drei Vortagen fielen bereits 10,1 mm Niederschlag, die Wetterlage war also feucht und wechselhaft. Daher hat es geregnet."
            },
            {
                variantId: "rain_forecast_11",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "27.09.2025"],
                        ["Ø Temperatur", "14,5 °C"],
                        ["Sonnenstunden", "1,3 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "0,0 mm"]
                    ]
                },
                correctAnswer: "Kein Regen",
                explanationIfCorrect: "In den drei Vortagen fiel kein Niederschlag, die Wetterlage war also stabil und trocken. Daher hat es nicht geregnet.",
                explanationIfWrong: "Mit nur 1,3 Sonnenstunden war der Himmel fast den ganzen Tag dicht bedeckt, bei kühlen 14,5 °C. Daher hat es geregnet."
            }
        ]
    }

];