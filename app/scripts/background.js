'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

/* Development notes (delete before release)
 Data to store:
 1. URL   - config: treat http and https versions of the site as the same site
 overall time
 today's date
 time today
 3. blocklist
 4. settings

 Workflow:
 hook: On Tab create/window create/navigation finish:
    Run extension code
    Add site to list of sites
    If settimeout handle empty create one now

 */