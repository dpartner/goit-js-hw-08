import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(onCurrentTime, 1000));

function onCurrentTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}
