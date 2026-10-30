const activities = [
  "Plant some flowers!",
  "Create nature-inspired art!",
  "Play a friendly sports game!",
  "Read a book outdoors!",
  "Organise a family picnic!",
  "Go on a nature hunt!",
  "Care for the school garden!"
];

function pickActivity() {
  const index = Math.floor(
    Math.random() * activities.length
  );

  document.getElementById("suggestion").textContent =
    activities[index];
}

function playVideo() {
  const video = document.getElementById('Gamesandactivities');
  
  // Add controls so the user can pause/adjust volume after it starts
  video.controls = true; 
  
  // Play the video
  video.play();
  
  // Remove the onclick event so clicking again doesn't restart the video
  video.removeAttribute('onclick'); 
}

function playVideo1() {
  const video = document.getElementById('garden');
  
  // Add controls so the user can pause/adjust volume after it starts
  video.controls = true; 
  
  // Play the video
  video.play();
  
  // Remove the onclick event so clicking again doesn't restart the video
  video.removeAttribute('onclick'); 
}

function playVideo2() {
  const video = document.getElementById('classroom');
  
  // Add controls so the user can pause/adjust volume after it starts
  video.controls = true; 
  
  // Play the video
  video.play();
  
  // Remove the onclick event so clicking again doesn't restart the video
  video.removeAttribute('onclick'); 
}

function playVideo3() {
  const video = document.getElementById('picnic');
  
  // Add controls so the user can pause/adjust volume after it starts
  video.controls = true; 
  
  // Play the video
  video.play();
  
  // Remove the onclick event so clicking again doesn't restart the video
  video.removeAttribute('onclick'); 
}