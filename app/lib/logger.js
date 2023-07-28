import { schedule } from '@ember/runloop';

export function log(msg) {
  console.log(msg);
  schedule('afterRender', () => {
    document.getElementById('messagebox').innerText = msg;
  });
}
