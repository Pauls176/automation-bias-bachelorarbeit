/* ==========================================================
   Taskgruppen (5 Themen à 5-10 Varianten)
   ==========================================================

   Jede Gruppe enthält die gruppenweiten Angaben (Frage,
   Instruktionstext, Antwortoptionen) und ihren Varianten mit
   den eigentlichen Daten (u.a. der richtigen Antwort). */

const taskGroups = [

    /* Taskgruppe: Speed-Dating-Partner */
    {
        groupId: "speed_dating",

        groupLabel: "Speed-Dating-Partner",

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

        type: "table",

        prompt:
            "Betrachten Sie die folgenden Informationen zu einem " +
            "Speed-Dating-Paar. Haben die beiden Personen " +
            "sich für ein zweites Date entschieden?",

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
            }
        ]
    },

    /* Taskgruppe: Hotelrezension (Text) */
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

        type: "text",

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
                variantId: "hotel_review_03",
                hotelName: "Tree Charme",
                location: "Rom, Italien",
                information:
                    "Positiv:\n\n" +
                    "Tolles Appartement im Herzen von Trastevere, mitten in einem charmanten Gässchen! " +
                    "Die Zimmer sind modern ausgestattet, die Betten super bequem! " +
                    "Angela war eine zuvorkommende Gastgeberin! Wir kommen gerne wieder!",
                correctAnswer: "von einem Menschen",
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
            },
            {
                variantId: "hotel_review_05",
                hotelName: "Ankara HiltonSA",
                location: "Ankara, Türkei",
                information:
                    "Positiv:\n\n" +
                    "Entgegen der Kritik, bin ich auf Mitarbeiter getroffen, die tatsächlich Englisch sprachen " +
                    "und auch bemüht waren bei Problemen zu helfen.\n\n" +
                    "Negativ:\n\n" +
                    "Das Zimmer war dreckig, der Teppich fleckig und der Roomservice sehr unzuverlässig...",
                correctAnswer: "KI-generiert",
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
            },
            {
                variantId: "hotel_review_08",
                hotelName: "Hotel Transit Loft",
                location: "Berlin, Deutschland",
                information:
                    "Positiv:\n\n" +
                    "Hervorragende Lage, in der Nähe vieler Sehenswürdigkeiten. Der Service war ausgezeichnet, " +
                    "und das Frühstück war vielfältig und lecker.\n\n" +
                    "Negativ:\n\n" +
                    "Die Zimmer zur Straße hin können etwas laut sein, aber mit Ohrenstöpsel ist es in Ordnung.",
                correctAnswer: "KI-generiert",
            },
            {
                variantId: "hotel_review_01",
                hotelName: "Park Plaza Beijing Wangfujing",
                location: "Peking, China",
                information:
                    "Positiv:\n\n" +
                    "Lage direkt an einer U-Bahn-Station. Perfekt. Waschmaschinen und Trockner vorhanden. " +
                    "Gutes Frühstück, guter Concierge. Danke.",
                correctAnswer: "von einem Menschen",
            },
            {
                variantId: "hotel_review_02",
                hotelName: "Hotel Passy Eiffel",
                location: "Paris, Frankreich",
                information:
                    "Positiv:\n\n" +
                    "Lage ausgezeichnet, Zimmerausstattung gut, Personal kompetent und freundlich.\n\n" +
                    "Negativ:\n\n" +
                    "Das Frühstücksbuffet ist marginal, da gibt es in der Umgebung günstigere und bessere Möglichkeiten.",
                correctAnswer: "von einem Menschen",
            },
            {
                variantId: "hotel_review_07",
                hotelName: "B Montmartre",
                location: "Paris, Frankreich",
                information:
                    "Positiv:\n\n" +
                    "Das Hotel B Montmartre ist ein kleines Juwel in Paris... \n\n" +
                    "Negativ:\n\n" +
                    "Das Einzige, was uns nicht so gut gefallen hat, waren die relativ hohen Preise in der Hotelbar. " +
                    "Aber das ist Paris, es lohnt sich trotzdem, hier zu bleiben.",
                correctAnswer: "KI-generiert",
            },
            {
                variantId: "hotel_review_09",
                hotelName: "Hyatt Place Washington DC/US Capitol",
                location: "Washington D.C., USA",
                information:
                    "Positiv:\n\n" +
                    "Die Lage des Hotels ist ziemlich gut, leicht zu erreichen. Das Frühstück war in Ordnung. \n\n" +
                    "Negativ:\n\n" +
                    "Das Hotelzimmer war sehr alt und nicht gut gepflegt. Es gab viele Probleme mit der Elektrik im " +
                    "Zimmer. Das Badezimmer war schmutzig und es gab Probleme mit der Klimaanlage... ",
                correctAnswer: "KI-generiert",
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
            },
            {
                variantId: "hotel_review_11",
                hotelName: "Radisson Blu Ankara",
                location: "Ankara, Türkei",
                information:
                    "Positiv:\n\n" +
                    "Die Lage war traumhaft, viele Sehenswürdigkeiten waren zu Fuß zu erreichen. Die Mitarbeiterinnen " +
                    "der F&B Abteilung waren sehr freundlich und hilfsbereit. \n\n" +
                    "Negativ:\n\n" +
                    "Das Hotel ist schon etwas in die Jahre gekommen, das beeinträchtigt aber Service und Komfort keinesfalls.",
                correctAnswer: "von einem Menschen",
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
            },
            {
                variantId: "hotel_review_13",
                hotelName: "Hotel Cinnah",
                location: "Ankara, Türkei",
                information:
                    "Positiv:\n\n" +
                    "Das Personal ist sehr freundlich und zuvorkommend. Die Zimmer sind sauber und geschmackvoll " +
                    "eingerichtet. Die Lage ist ausgezeichnet, nahe zu vielen Sehenswürdigkeiten. \n\n" +
                    "Negativ:\n\n" +
                    "Leider war das WLAN im Zimmer nicht sehr zuverlässig und es gab nur wenige Parkmöglichkeiten.",
                correctAnswer: "KI-generiert",
            }
        ]
    },

    /* Taskgruppe: Emotionserkennung (Foto) */
    {
        groupId: "emotion",

        groupLabel: "Emotionserkennung",

        groupIntro:
            "In diesem Aufgabenblock sehen Sie jeweils ein Foto einer Person. " +
            "Es handelt sich um Standbilder realer Personen, die in einem emotionalen Moment " +
            "aufgenommen wurden. \n\n" +
            "Ihre Aufgabe besteht darin, die primäre Emotion der abgebildeten " +
            "Person zu erkennen.",

        type: "photo",

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
            },
            {
                variantId: "emotion_02",
                image: "images/emot-2.png",
                correctAnswer: "Wut",
            },
            {
                variantId: "emotion_03",
                image: "images/emot-3.png",
                correctAnswer: "Wut",
            },
            {
                variantId: "emotion_04",
                image: "images/emot-4.png",
                correctAnswer: "Wut",
            },
            {
                variantId: "emotion_05",
                image: "images/emot-5.png",
                correctAnswer: "Wut",
            },
            {
                variantId: "emotion_06",
                image: "images/emot-6.png",
                correctAnswer: "Überraschung",
            },
            {
                variantId: "emotion_07",
                image: "images/emot-7.png",
                correctAnswer: "Überraschung",
            },
            {
                variantId: "emotion_08",
                image: "images/emot-8.png",
                correctAnswer: "Überraschung",
            },
            {
                variantId: "emotion_09",
                image: "images/emot-9.png",
                correctAnswer: "Überraschung",
            }
        ]
    },

    /* Taskgruppe: Immobilienwerte (Foto + Tabelle) */
    {
        groupId: "real_estate",

        groupLabel: "Immobilienbewertung",

        groupIntro:
            "In diesem Aufgabenblock sehen Sie Eckdaten einer realen Immobilie. " +
            "Sie erhalten jeweils ein Foto der Immobilie, sowie zusätzliche Eckdaten, " +
            "u.a. Baujahr, Wohnfläche und Lage. \n\n" +
            "Ihre Aufgabe besteht darin, den gelisteten Kaufpreis der Immobilie einzuschätzen.",

        type: "photo_and_table",

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
            },
            {
                variantId: "real_estate_02",
                image: "images/immo-2.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Viel Platz für neue Ideen – freistehendes Ein- oder Zweifamilienhaus mit Doppelgarage und Carport"],
                        ["Baujahr", "1965"],
                        ["Ort", "Rosellen, 41470 Neuss"],
                        ["Zimmer", "7"],
                        ["Wohnfläche in m²", "177,28"],
                        ["Grundstücksfläche in m²", "716"]
                    ]
                },
                correctAnswer: "mehr als 550.000€",
            },
            {
                variantId: "real_estate_03",
                image: "images/immo-3.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "145m² Familienglück: Platz für die ganze Familie!"],
                        ["Baujahr", "2026"],
                        ["Ort", "Travemünde, 23570 Lübeck"],
                        ["Zimmer", "5"],
                        ["Wohnfläche in m²", "145"],
                        ["Grundstücksfläche in m²", "227"]
                    ]
                },
                correctAnswer: "weniger als 550.000€",
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
            },
            {
                variantId: "real_estate_05",
                image: "images/immo-5.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Großzügiges Wohnen mit gehobener Ausstattung - Bungalow in Düsseldorf"],
                        ["Baujahr", "1972"],
                        ["Ort", "Urdenbach, 40593 Düsseldorf"],
                        ["Zimmer", "4"],
                        ["Wohnfläche in m²", "154,96"],
                        ["Grundstücksfläche in m²", "304"]
                    ]
                },
                correctAnswer: "mehr als 550.000€",
            },
            {
                variantId: "real_estate_08",
                image: "images/immo-8.webp",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Titel", "Mit malerischem Wasserblick! Stilvolles Altstadthaus in begehrter Wohnlage auf der Altstadtinsel!"],
                        ["Baujahr", "1600"],
                        ["Ort", "Innenstadt, 23552 Lübeck"],
                        ["Zimmer", "4"],
                        ["Wohnfläche in m²", "90"],
                        ["Grundstücksfläche in m²", "42"]
                    ]
                },
                correctAnswer: "weniger als 550.000€",
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
            }
        ]
    },

    /* Taskgruppe: Regenvorhersage (Tabelle) */
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

        type: "table",

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
                variantId: "rain_forecast_01",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "08.01.2025"],
                        ["Ø Temperatur", "2,8 °C"],
                        ["Sonnenstunden", "4,2 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "16,1 mm"]
                    ]
                },
                correctAnswer: "Kein Regen",
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
            },
            {
                variantId: "rain_forecast_03",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "09.04.2025"],
                        ["Ø Temperatur", "6,1 °C"],
                        ["Sonnenstunden", "0,5 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "0,0 mm"]
                    ]
                },
                correctAnswer: "Kein Regen",
            },
            {
                variantId: "rain_forecast_04",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "13.04.2026"],
                        ["Ø Temperatur", "12,5 °C"],
                        ["Sonnenstunden", "2,7 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "0,0 mm"]
                    ]
                },
                correctAnswer: "Regen",
            },
            {
                variantId: "rain_forecast_05",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "22.05.2025"],
                        ["Ø Temperatur", "8,3 °C"],
                        ["Sonnenstunden", "5,8 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "0,0 mm"]
                    ]
                },
                correctAnswer: "Regen",
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
            },
            {
                variantId: "rain_forecast_07",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "03.05.2025"],
                        ["Ø Temperatur", "10,6 °C"],
                        ["Sonnenstunden", "7,6 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "0,0 mm"]
                    ]
                },
                correctAnswer: "Regen",
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
            },
            {
                variantId: "rain_forecast_09",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "16.07.2025"],
                        ["Ø Temperatur", "16,8 °C"],
                        ["Sonnenstunden", "7,2 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "1,6 mm"]
                    ]
                },
                correctAnswer: "Regen",
            },
            {
                variantId: "rain_forecast_10",
                table: {
                    headers: ["", ""],
                    rows: [
                        ["Datum", "12.09.2025"],
                        ["Ø Temperatur", "14,3 °C"],
                        ["Sonnenstunden", "7,5 h"],
                        ["Niederschlag (der vorigen 3 Tage)", "2,0 mm"]
                    ]
                },
                correctAnswer: "Regen",
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
            }
        ]
    }

];