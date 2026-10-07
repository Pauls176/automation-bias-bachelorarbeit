Bachelorarbeit: Effekt von AI Literacy auf Automation Bias bei verschiedenen Aufgabentypen
von: Pauline v. Petersdorff

Dieses Repository beinhaltet eine Studienumgebung (als Online-Studie im Browser aufrufbar) zur Untersuchung von Automation Bias beim Bearbeiten verschiedener Aufgabentypen. Es gibt 5 Aufgabenblöcke (Speed-Dating, Immobilienpreise, Hotelrezensionen, Emotionserkennung, Wettervorhersage) mit binären Antwortoptionen.

Aufbau:
- pilot/ beinhaltet die komplette Pilotstudie mit einer größeren Anzahl tasks, aber ohne KI-Interaktion
- hauptstudie/ beinhaltet die finale Version für die Bachelor-Studie mit 5x5 tasks, inklusive KI-Interaktion
- images/ beinhaltet (in beiden Projektordnern) die Bilder für die Aufgaben
- index.html ist die Seitenstruktur mit allen Sections die dynamisch ein- und ausgeblendet werden
- app.js beinhaltet die Session-Logik (Bau der randomisierten Aufgabenblöcke, Session-Speicherung, Durchlauf der Screens, Befüllen der html-Elemente, Verarbeiten der Nutzerantworten)
- tasks.js beinhaltet die Task-Inhalte (konkrete Daten jeder Aufgabe, Antwortoptionen, KI-Empfehlungen)
- config.js beinhaltet die Anbindungen an SupaBase (Datenbank zur Speicherung der Nutzerantworten) und Limesurvey (Weiterleitung an Fragebogen)
- style.css beinhaltet die Darstellung der html-Seite

Ablauf:
- Einstieg über LimeSurvey-Fragebogen-URL (beinhaltet als URL-Paramter eine Teilnehmer-ID, die zwingend notwendig ist)
- Beginn mit Intro-Screen (Erklärung des Experimental-Teils), dann 5 Aufgabenblöcke (mit jeweils 5 Aufgaben). Hier geben Nutzer:innen eine erste Einschätzung ab, dann folgt eine KI-Empfehlung und eine zweite (ggf. geänderte) Nutzerantwort. Danach folgt ein Rating-Block, in dem die Problemlösungsfähigkeiten von Mensch und KI für jeden Aufgabentyp geschätzt werden. Zum Schluss erfolgt die Weiterleitung an einen weiteren LimeSurvey-Fragebogen, in dem weitere Maße erhoben werden.
- Durch Session-Speicherung bleibt Fortschritt bei einfachen Refresh der Browser-Seite erhalten (außer im Testmodus).

Datenerhebung:
- in SupaBase Speicherung von je einer Zeile pro task (id, task, Reihenfolge, Nutzerantworten 1 und 2, KI-Empfehlung, response_time, Korrektheit der Antworten)
- in SupaBase Speicherung von je einer Zeile pro group-rating (id, timestamp, human_rating, ai_rating)
- Datenschutz: SupaBase Zugriff über Row Level Security abgesichert
- Datenschutz: im Repository liegen keine Teilnehmerdaten

Ausführung:
- Testmodus: index.html im Browser öffnen (über localhost, 127.0.0.1 oder mit URL-Parameter ?test=1) - dies beinhaltet keine Session-Speicherung, keine Weiterleitung zu LimeSurvey, schreibt aber dennoch Einträge in die SupaBase-Datenbank (Testdaten sind an der id=test in SupaBase erkennbar und wurden von der Auswertung ausgeschlossen)
- Hosting: GitHub Pages

Abhängigkeiten:
- supabase JS v2, eingebunden per CDN (in index.html)
