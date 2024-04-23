const lengthp = document.querySelector("#length-number");
const upper = document.querySelector("#uppercase");
const lower = document.querySelector("#lowercase");
const number = document.querySelector("#numbers");
const symbol = document.querySelector("#symbols");
const passinp = document.querySelector("#pass-input");

const copy = document.querySelector("#copy");
const generate = document.querySelector("#generate");

const uppercasestr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercasestr = 'abcdefghijklmnopqrstuvwxyz';
const numberstr = '0123456789';
const symbolstr = '!@#$%^&*()_+';

generate.addEventListener('click' ,() => {
  let str = '';
  if(upper.checked){
    str+=uppercasestr;
  }
  if(lower.checked){
    str+=lowercasestr;
  }
  if(number.checked){
    str+=numberstr;
  }
  if(symbol.checked){
    str+=symbolstr;
  }

  let password = '';

  for(let i=0;i<lengthp.value;i++){
    let index = Math.floor(Math.random()*str.length);
    password += str[index];
  }
  passinp.value=password;
});

copy.addEventListener('click', () => {
  if(passinp.value === ''){
    alert('Please Generate a password First');
  }else{
    const newele = document.createElement('textarea');
    newele.value = passinp.value;
    document.body.appendChild(newele);
    newele.select();
    document.execCommand('copy');
    alert('Passwoed copied to clipboard');
    newele.remove();
  }
});
