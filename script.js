const userInput = document.querySelector('#user-input');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const results = document.querySelector('#results-div');

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkBtn.click();
  }
});

checkBtn.addEventListener('click', () => {
  if (userInput.value == '') {
    alert('PLease provide a phone number');
    results.innerText = '';
  } numbervalid();
});

const numbervalid = () => {
  const validnumbers = [
    /^\d{3}-\d{3}-\d{4}$/,
    /^1 \d{3}-\d{3}-\d{4}$/,
    /^1 \d{3} \d{3} \d{4}$/,
    /^1 \d{3}\d{3}\d{4}$/,
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    /^\d{10}$/,
    /^\(\d{3}\)\d{3}-\d{4}$/,
    /^1\(\d{3}\)\d{3}-\d{4}$/
  ]
  const match = validnumbers.some((number) => number.test(userInput.value));

  if (match) {
    results.innerText = `Valid US number: ${userInput.value}`;
    results.style.color = 'green';
    userInput.style.border = '2px solid green';
  } else if (userInput.value == '') {
    results.innerText = '';
    userInput.style.border = '1px solid black'
  } else {
    results.innerText = `Invalid US number: ${userInput.value}`;
    results.style.color = 'red';
    userInput.style.border = '2px solid red';
  }
};