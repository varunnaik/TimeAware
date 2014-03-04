/**
 * Created by varun on 28/2/14.
 * This file contains the main application logic of the Timeaware extension
 */
if (typeof Timeaware === 'undefined') Timeaware = {};

/* Global conf objects */
//watchedTabs: Array of tab objects, one for each tab we're watching.
//{tabId: 0, windowId: 0, URL: "", domain: "", start: 0, end: 0, activeTime: 0}
Timeaware.watchedTabs = [];

//watchedURLs: Array of specific URLs (not domains) we are watching
Timeaware.watchedURLs = [];

//watchedDomains: Array of domains we are watching
Timeaware.watchedDomains = [];

/* End global conf objects */


Timeaware.init = function() {

}


/* Timeaware.getTab: Given a tabId, return the index of the tab
                    in the Timeaware.watchedTabs array.
   @parameters:
                tabId: Integer, required. id of the tab we are searching for.
   @return:
                Integer: index into watchedTabs array, null if not found.
 */
Timeaware.getTab = function(tabId) {
    for (var i = 0; i < Timeaware.watchedTabs.length; i++) {
        if (Timeaware.watchedTabs[i].tabId === tabId) {
            return i;
        }
    }
    return null;
}

/*
 Timeaware.getTabs: Given a windowId, return an array of integers,
                     each integer representing an index into
                     Timeaware.watchedTabs.
 @parameters:
                windowId: Integer, id of the window for which we want tabs.
 @return:
                Array of integers, each integer is an index into watchedTabs.
 */
Timeaware.getTabs = function(windowId) {
    var foundTabs = [];

    for (var i = 0; i < Timeaware.watchedTabs.length; i++) {
        if (Timeaware.watchedTabs[i].windowId === windowId) {
            foundTabs.push(i);
        }
    }
    return foundTabs;
}

Timeaware.windowFocus = function(windowId) {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        console.log("ALL windows lost focus.")
    }
    console.log("Window " + windowId + " got focus.")
}
Timeaware.windowClose = function(windowId) {
    console.log("Window closed! " + windowId);
    Timeaware.onWindowChange(windowId, true, null, null);
}
Timeaware.tabChange = function(tabId, windowId) {
    console.log("Tab changed! ", tabId)
}
Timeaware.tabRemove = function(tabId, windowId) {
    console.log("Tab changed! " + tabId)
}
Timeaware.tabNavigate = function(tabId, tabObj) {
    if (tabObj.status !== 'complete') return;
    console.log("Tab navigated! ", tabObj)
}
Timeaware.systemIdle = function(eventType) {
    if (eventType === 'active') {

    } else if (eventType === 'idle') {

    }
}

Timeaware.dragTab = function(tabId, tabDesc) {
    // When a tab is dragged between windows, update its windowId
    var tab = Timeaware.getTab(tabId);
    if (tab === null) return;

    Timeaware.watchedTabs[tab].windowId = tabDesc.windowId;
}

/*
    Timeaware.onTabChange: Handle tab changes, including
    tab closed, tab opened, user navigation
    @parameters:
        tabId: Integer, id of the tab that fired the event
        windowId: Integer, id of the window the tab belongs to
        lostFocus: Boolean, true if focus lost, false if gained
        currentUrl: URL currently in the tab
 */
Timeaware.onTabChange = function(tabId, windowId, lostFocus, currentUrl) {

}

/*
    Timeaware.onWindowChange: Handle window changes, including
    Window losing focus, Window closing, Window gaining focus.
    In this case, stop tracking time for all tabs (if gaining
    focus then decide if we should track time for the active tab)
    @parameters:
        windowId: Integer, id of window firing the event
        lostFocus: boolean, if set and false, window has lost focus.
                    If not set or true, window has gained focus.
        activeTabId: Integer, id of active tab (required if focus regained)
        activeTabUrl: URL of the active tab (required if focus regained)
 */
Timeaware.onWindowChange = function(windowId, lostFocus, activeTabId, activeTabUrl) {
    console.log("LOST FOCUS,", windowId);
}

Timeaware.tick = function() {
    // Get the focussed window(s)
    // Get the active tab for each window
    // If it is in our list of domains/urls then:
    // increment its counter.
    // Update display
}

Timeaware.updateDisplay = function(windowId, tabId, watchedTabIndex) {
    // Given a windowId, tabId, watchedTabIndex,
    // Update the display in that tab
}