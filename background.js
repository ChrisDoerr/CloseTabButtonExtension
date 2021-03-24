/**
 * @author    Chris Doerr <doerr@meomundo.com>
 * @copyright Chris Doerr 2017
 * @license 	MIT License
 *
 * This very simple extension provies an icon
 * that is being shown in the top bar of the browser.
 * Clicking it will close a currently open tab.
 * 
 * Of course, you can already achieve this by clicking the
 * x-icon of the tab itself, or via "Ctrl + W".
 * But it might be handy of you have multiple tabs open,
 * that at one point might change in width and therefore the
 * x-icon position.
 * The extension's icon will stay in one place - and that's that.
 *
 * And to be perfectly honest, it was just a first testrun on
 * how to develop a browser extension and publish it :)
 */

/**
 * Firefox/Extension namespace for Meomundo.com developments.
 */
if( "undefined" === typeof Meomundo ) {
  
  var Meomundo = {};
  
}
if( "undefined" === typeof Meomundo.Firefox ) {
  
  Meomundo.Firefox = {};

}
if( "undefined" === typeof Meomundo.Firefox.Extension ) {
  
  Meomundo.Firefox.Extension = {};
  
}

/**
 * Remove a tab by clicking the extension icon.
 */
Meomundo.Firefox.Extension.closeCurrentTab = function() {
  
  "use strict";
  
  browser.tabs.query(
    {
      active    : true,
      windowId  : browser.windows.WINDOW_ID_CURRENT
    }
  ).then(
    function( tabs ) {
      browser.tabs.remove( tabs[0].id );
    }
  );

}

browser.browserAction.onClicked.addListener( Meomundo.Firefox.Extension.closeCurrentTab );
