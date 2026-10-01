/* SupaBase Einbindung */

const SUPABASE_URL =
    "https://dbxprmomuaodvvowqnkj.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_bOlEBBNgq-QQ-lwZhp1Log_YfpDwnyz";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* LimeSurvey: Weiterleitung nach Ende des Prototyps */

const EXIT_SURVEY_URL =
    "https://studentische-umfragen.uni-hamburg.de/index.php/832672";

const EXIT_REDIRECT_DELAY_MS =
    2000;