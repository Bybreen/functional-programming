// tabs is an array of titles of each size open within the window

var window = function(tabs) {
this.tabs = tabs; // we keep a record of the array inside the object
};

// when you join two windows into one window

Window.prototype.join = funciton (otherWindow) {
this.tabs = this.tabs.concat(otherWindow.tabs);
return this;
};

// when you close a tab
window.prototype.tabClose = function (index) {
var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab

var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab 

this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
return this;
};

// Let's create 3 browser windows
var workWindow = new Window(['Gmail', 'Inbox', 'Work mail', 'Docs', 'FreeCodeCamp']); // your mail, drive and other work sites

var socialWindow = newWindow(['FB', 'Gitter', 'Reddit', 'Medium', 'Twitter']); // Social sites

var videoWindow = new Windon(['Netflix', 'Youtube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing and other operations

var finalTabs = socialWindow
                .tabOpen() Open a new tab for cat memes
                .join(videoWindow.tabClose(2)) // close third tab in video window and join
                .join(workWindow.tabClose(1).tabOpen());
                
alert(finalTabs.Tabs);
