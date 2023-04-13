import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};
player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(currentTime)
  .then(function (currentTime) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
