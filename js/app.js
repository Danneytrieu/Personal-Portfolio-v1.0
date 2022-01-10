// show/hide nav
const openBtn = document.querySelector(".nav-open-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navContainer = document.querySelector(".nav-container");

openBtn.addEventListener("click", () => {
  navContainer.classList.add("showNav");
});
closeBtn.addEventListener("click", () => {
  navContainer.classList.remove("showNav");
});

//change bg-img
const videoPlayer = document.querySelector(".bg-video");
const videoSrc = document.querySelector(".bg-video-source");

window.addEventListener("resize", function () {
  const width = window.matchMedia("(max-width: 800px)");

  if (width.matches) {
    videoSrc.src = "./video/1.mp4";
    videoPlayer.load();
    videoPlayer.play();
  } else {
    videoSrc.src = "./video/2.mp4";
    videoPlayer.load();
    videoPlayer.play();
  }
});

//audio player
const mySong = document.getElementById("mySong");
const icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "img/pause.png";
  } else {
    mySong.pause();
    icon.src = "img/play.png";
  }
};

// preloader

const preLoader = document.getElementById("preloader")

window.addEventListener("load", function(){
  preLoader.style.display = "none"
})