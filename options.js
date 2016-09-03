var DEFAULT = false;
const soundSetting = document.getElementById("soundSetting");

function saveSetting(event) {
  var value = event.target.checked;
  chrome.storage.sync.set({'sound_notification': value}, function() {
    console.log("Settings saved!");
  });
}

function update() {
  
  chrome.storage.sync.get(["sound_notification"], function(items) {

    if (items.sound_notification !== undefined) {
      soundSetting.checked = items.sound_notification;
    } else {
      soundSetting.checked = DEFAULT;
      chrome.storage.sync.set({'sound_notification': soundSetting.checked});
    }
 
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  update();
  document.getElementById("soundSetting").onchange = saveSetting;
});