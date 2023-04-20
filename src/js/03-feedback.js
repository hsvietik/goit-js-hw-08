import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const localFeedback = localStorage.getItem('feedback-form-state');
if (localFeedback) {
  const { email, message } = JSON.parse(localFeedback);
  feedbackForm.email.value = email;
  feedbackForm.message.value = message;
}
function dataSave(evt) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: feedbackForm.email.value,
      message: feedbackForm.message.value,
    })
  );
}
feedbackForm.addEventListener('input', throttle(dataSave, 500));

function handleSubmit(event) {
  event.preventDefault();
  console.log({
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  });
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}
feedbackForm.addEventListener('submit', handleSubmit);
