
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (!(/youtube\.com\/watch/.test(tab.url.toLowerCase()))) return;
    if (changeInfo.status != 'complete') return;
    
    setTimeout(function() {
      var code = "var els = document.getElementsByClassName('ytp-drop-down-menu-button');" + 
                 "for(var k in els) {" + 
                 "  var el = els[k];" + 
                 "  if (el.getAttribute('aria-labelledby') == 'ytp-menu-quality') {" + 
                 "    el.click();" +
                 "    break;" +
                 "  }" +
                 "}";
      chrome.tabs.executeScript(tab.id, {code: code});
    }, 1000);
  });
  