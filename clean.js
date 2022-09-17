chrome.storage.sync.get("backgroundColor", ({ backgroundColor }) => {
  document.body.style.backgroundColor = backgroundColor;
});

chrome.storage.onChanged.addListener(({ backgroundColor }) => {
  document.body.style.backgroundColor = backgroundColor.newValue;
});
