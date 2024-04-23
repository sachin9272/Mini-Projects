const input = document.querySelector('#age-input');
const btn = document.querySelector('#calculate');
const output = document.querySelector('#final-age');

btn.addEventListener('click',() => {
  if(input.value ===''){
    alert("Please enter your Date of birth");
  }
  else{
    const dob = new Date(input.value);
    const dob_year = dob.getFullYear();
    const now = new Date();
    const now_year = now.getFullYear();
    const age = now_year-dob_year;
    console.log(age);
    output.innerHTML = `Your age is ${age} years`;
  }
});