'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.runtime.onStartup.addListener(function() {
    Timeaware.init();
})
// We should decide whether to stop/start tracking time for a website if:
// The user switches tabs,
// The user closes a tab,
// The user navigates to a different URL,
// The user moves a tab to another window,
// The user moves to a different window (Chrome loses focus),
// The user returns to the browser (Chrome gains focus),
// The user closes a browser

// Tab switch
chrome.tabs.onActivated.addListener(Timeaware.tabChange);

// Tab closed

chrome.tabs.onRemoved.addListener(Timeaware.tabRemove);

// User navigates away
chrome.tabs.onUpdated.addListener(Timeaware.tabNavigate);

// Browser loses/gains focus
chrome.windows.onFocusChanged.addListener(Timeaware.windowFocus);

// Browser closed
chrome.windows.onRemoved.addListener(Timeaware.windowClose);

// Housekeeping: In order to support window-related functions above, we also
// Need to keep track of whenever a tab is moved between windows
chrome.tabs.onAttached.addListener(Timeaware.dragTab)


// Stop tracking time if the screensaver activates or the user locks screen or
// hibernates.
chrome.idle.onStateChanged.addListener(Timeaware.systemIdle)