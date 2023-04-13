import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const localFeedback = localStorage.getItem('feedback-form-state');
if (localFeedback) {
  const { email, message } = JSON.parse(localFeedback);
  feedbackForm.email.value = email;
  feedbackForm.message.value = message;
}
function dataSave(evt) {
  const { email, message } = evt.currentTarget;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  );
}
feedbackForm.addEventListener(
  'input',
  throttle(dataSave, 500)
  //   throttle(dataSave, 500, { trailing: false })
);

function handleSubmit(event) {
  console.log(event.currentTarget);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}
feedbackForm.addEventListener('submit', handleSubmit);
