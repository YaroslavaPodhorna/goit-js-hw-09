const form = document.querySelector('.feedback-form');
const LOCAL_STORAGE_KEY = 'feedback-form-state';

// initialisation formData
const formData = {
  email: '',
  message: '',
};

// loading start

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// event input
form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value; 
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData)); 
});

// event submit
form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

 
  console.log('Submitted data:', formData);

  //clear
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset(); 
});