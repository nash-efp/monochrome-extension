chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'twitter.com' }
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'youtube.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
  