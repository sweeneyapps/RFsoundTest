let enableSound = false;
const NOTIFICATION_SOUND_URL = "notification_sound.mp3";

chrome.storage.onChanged.addListener((changes, areaName) => {
  if (changes["sound_notification"] !== undefined) {
    enableSound = changes["sound_notification"].newValue;
  }
});

const playSoundNotificiation = (enable) => {
  if (enable) {
    const audioPlayer = new Audio(NOTIFICATION_SOUND_URL);
    audioPlayer.play();
  }  
}


chrome.browserAction.onClicked.addListener((t) => { 

	playSoundNotificiation(enableSound);

});
