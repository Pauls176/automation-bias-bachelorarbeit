/* SupaBase Einbindung */

const SUPABASE_URL =
    "https://gemtcvzzaaetckdivivu.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_GLlEsjJQZhdM5csHPeQvVg_78L0jkxk";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* LimeSurvey: Weiterleitung nach Ende des Experimental-Teils */

const EXIT_SURVEY_URL =
    "https://studentische-umfragen.uni-hamburg.de/index.php/534182";

const EXIT_REDIRECT_DELAY_MS =
    2000;