"use strick";
const audio = document.getElementById("discoAudio");

const torso = document.querySelector(".torso");
const head = document.querySelector(".head");
const eye_bros = document.querySelector(".eye_bros");
const Right_eyebro = document.querySelector(".Right_eyebro");
const Left_eyebro = document.querySelector(".Left_eyebro");

const rightArm = document.querySelector(".right_arm");
const leftArm = document.querySelector(".left_arm");
const leftLeg = document.querySelector(".left_leg");
const rightLeg = document.querySelector(".right_leg");

const lyrics = [
  { time: 0, text: `<a href="https://suno.com/song/af99365b-ec03-45a1-80e5-31766d1c562d" target="_blank">Robot Friend</a>
` },
  { time: 5, text: "Pixel lights they flash and glow" },
  { time: 8, text: "In the club where robots go" },
  { time: 10, text: "Wires twist and circuits spin" },
  { time: 13, text: "Let the robot dance begin" },
  { time: 16, text: "Binary beats in the air" },
  { time: 18, text: "Metal feet tap everywhere" },
  { time: 21, text: "Eyes light up in neon red" },
  { time: 24, text: "Feel the rhythm in your head" },
  { time: 26, text: "Robot robot dance with me" },
  { time: 29, text: "Through the night let's glitch and be" },
  { time: 32, text: "Electric love in circuitry" },
  { time: 34, text: "Robot robot wild and free" },
  { time: 37, text: "(Epic Beat!)" },
  { time: 48, text: "Beep and boop we hit the floor" },
  { time: 50, text: "Craving more let's dance some more" },
  { time: 53, text: "Bytes of joy we can't control" },
  { time: 56, text: "In this wild electric soul" },
  { time: 58, text: "Sync to beats we'll never tire" },
  { time: 61, text: "Full of volts we never expire" },
  { time: 64, text: "Robots high on bits and bytes" },
  { time: 66, text: "In the glow of flashing lights" },
  { time: 69, text: "Robot robot dance with me" },
  { time: 72, text: "Through the night let's glitch and be" },
  { time: 74, text: "Electric love in circuitry" },
  { time: 77, text: "Robot robot wild and free" },
  { time: 80, text: "(Epic Beat!)" },
  { time: 90, text: "Beep and boop we hit the floor" },
  { time: 93, text: "Craving more let's dance some more" },
  { time: 96, text: "Bytes of joy we can't control" },
  { time: 98, text: "In this wild electric soul" },
  { time: 60 + 41, text: "Sync to beats we'll never tire" },
  { time: 60 + 44, text: "Full of volts we never expire" },
  { time: 60 + 47, text: "Robots high on bits and bytes" },
  { time: 60 + 49, text: "In the glow of flashing lights" },
  { time: 60 + 52, text: "Robot robot dance with me" },
  { time: 60 + 54, text: "Through the night let's glitch and be" },
  { time: 60 + 57, text: "Electric love in circuitry" },
  { time: 120, text: "Robot robot wild and free" },
  { time: 128, text: "(EPIC!!!!)" },
];

let discoInterval;
let count = 0;

const startDisco = function () {
  if (count > 0) return;
  count++;
  document.body.style.background = "none";
  document.querySelector("footer").classList.add("hidden");
  const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
  let colorIndex = 0;
  leftLeg.classList.toggle("dance-left-leg");
  rightLeg.classList.toggle("dance-right-leg");
  head.classList.toggle("beat");
  torso.classList.toggle("beat");
  eye_bros.style.opacity = "100%";
  discoInterval = setInterval(() => {
    Right_eyebro.classList.toggle("dance-arms-right");
    Left_eyebro.classList.toggle("dance-arms-left");
    head.classList.toggle("enlarge");
    leftArm.classList.toggle("dance-arms-left");
    rightArm.classList.toggle("dance-arms-right");
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
  }, 150);
  audio.play();
};
const stopDisco = function () {
  clearInterval(discoInterval);
  document.body.style.backgroundColor = "";
  document.body.style.background =
    'url("https://img.freepik.com/premium-photo/3d-rendering-welding-robotic-arms-with-blank-space-white-background_493806-7833.jpg?w=826") center center fixed no-repeat';
  document.body.style.backgroundSize = "cover";

  document.querySelector("footer").classList.remove("hidden");
  audio.pause();
  audio.currentTime = 0;
  leftLeg.classList.remove("dance-left-leg");
  rightLeg.classList.remove("dance-right-leg");
  head.classList.remove("beat");
  torso.classList.remove("beat");
  Right_eyebro.classList.remove("dance-arms-right");
  Left_eyebro.classList.remove("dance-arms-left");
  head.classList.remove("enlarge");
  leftArm.classList.remove("dance-arms-left");
  rightArm.classList.remove("dance-arms-right");
};

// Sync the lyrics with the audio
audio.addEventListener("timeupdate", function () {
  const currentTime = audio.currentTime;

  const currentLyric = lyrics.reduce((prev, current) => {
    return current.time <= currentTime ? current : prev;
  }, lyrics[0]);

  if (currentLyric) {
    lyricsContainer.innerHTML = currentLyric.text;
  }
});

torso.addEventListener("click", startDisco);
audio.addEventListener("ended", stopDisco);