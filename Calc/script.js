const buttons = document.querySelectorAll('button');
const input = document.querySelector('#input');

let str ='';
buttons.forEach((button)=>{
    button.addEventListener('click',(e) => {
      let tar = e.target.textContent.trim();
      if(tar === 'AC'){
        str='';
        input.value = str;
      }
      else if(tar === 'DEL'){
        str = str.substring(0,str.length-1);
        input.value = str;
      }
      else if(tar === '='){
        str = eval(str);
        input.value = str;
      }
      else{
        str+=tar;
        input.value = str;
      }
    });
});




    