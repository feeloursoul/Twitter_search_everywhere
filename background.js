chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "searchTwitter",
    title: "Search on Twitter",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "searchTwitter") {
    const url = "https://x.com/search?q=" + encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url });
  }
});