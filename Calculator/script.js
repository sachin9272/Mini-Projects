const output = document.querySelector('.result');
const buttons = document.querySelectorAll('button');

let str = '';

buttons.forEach((button) =>{
    button.addEventListener('click', (e) => {
      let tar = e.target.textContent.trim();
      if(tar === 'AC'){
        str = '';
        output.value = str;
      }else if(tar === 'DEL'){
        str = str.substring(0,str.length-1);
        output.value = str;
      }else if(tar === '='){
        str = eval(str);
        output.value = str;
      }else{
        str += e.target.textContent.trim();
        output.value = str;
      }
    });
});