const colorPicker = document.getElementById("colorPicker");

chrome.storage.sync.get("backgroundColor", ({ backgroundColor }) => {
  colorPicker.value = backgroundColor;
});

colorPicker.addEventListener("change", () => {
  const backgroundColor = colorPicker.value;
  chrome.storage.sync.set({ backgroundColor });
});
