  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  document.body.style.backgroundImage = 'none';

  // Create YouTube player variable
  var player;

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
          height: '0',
          width: '0',
          videoId: 'BcJ6z4GHWOM', // YouTube video ID
          events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
          },
          playerVars: {
              'autoplay': 0, // Do not autoplay initially
              'mute': 1      // Mute initially
          }
      });
  }

  let discoInterval;

  function onPlayerReady(event) {
      // Select the torso element
      const torso = document.querySelector('.torso');
      torso.addEventListener('click', () => {
          player.unMute();    // Unmute the player
          player.playVideo(); // Play the video when torso is clicked
          startDisco();       // Start disco effect
      });
  }

  function onPlayerStateChange(event) {
      if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
          stopDisco(); // Stop disco effect if video is paused or ended
      }
  }

  function startDisco() {
      const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];
      let colorIndex = 0;

      discoInterval = setInterval(() => {
          document.body.style.backgroundColor = colors[colorIndex];
          document.querySelector('footer').style.backgroundColor = colors[colorIndex];
          colorIndex = (colorIndex + 1) % colors.length;
      }, 500);
  }

  function stopDisco() {
      clearInterval(discoInterval);
      document.body.style.backgroundColor = ''; // Reset background color
  }