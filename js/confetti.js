import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function party() {
  confetti({
  });
  confetti({
    angle: 270
  });
}

document.getElementById('startButton').addEventListener('click', party)
