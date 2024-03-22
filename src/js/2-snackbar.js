import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const timer = event.currentTarget.elements.delay.value;
  const radio = event.currentTarget.elements.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radio === 'fulfilled') {
        resolve(timer);
      } else {
        reject(timer);
      }
    }, timer);
  });
  // return promise;

  promise
    .then(value => {
      iziToast.success({
        color: 'green',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${timer} ms`,
      });
    })
    .catch(error => {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `❌ Rejected promise in ${timer}ms`,
      });
    });
  event.currentTarget.reset();
}
