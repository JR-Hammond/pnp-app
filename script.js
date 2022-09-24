const video = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video, and PLAY!!!
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    }
  } catch (error) {
    // Catch error
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;
  // Start pic in pic
  await video.requestPictureInPicture();
  // Enable button
  button.disabled = false;
});

// On load
selectMediaStream();