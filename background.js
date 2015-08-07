
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (!(/youtube\.com\/watch/.test(tab.url.toLowerCase()))) return;
    if (changeInfo.status != 'complete') return;
    
    setTimeout(function() {
      var code = "(function() { \n" +
                  "document.getElementsByClassName('ytp-settings-button')[0].click();\n" +
                  "var m = document.getElementById('ytp-main-menu-id');\n" + 
                 "m.children[m.childElementCount-1].click();\n" +
				 "setTimeout(function() {\n document.getElementsByClassName('ytp-quality-menu')[0].children[0].click(); \n}, 100);" +
				 "})();";
      chrome.tabs.executeScript(tab.id, {code: code});
    }, 100);
  });
  