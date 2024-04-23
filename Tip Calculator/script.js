const billamount = document.querySelector('#bill-input');
const tipercentage = document.querySelector('#tip-input');
const btn = document.querySelector('#calculate');
const output = document.querySelector('#bill-amt');

btn.addEventListener('click',() => {
  if(billamount.value === '' || tipercentage.value === ''){
    alert("Please enter values");
    return;
  }
  else if(billamount.value < 0 || tipercentage.value < 0){
    alert("Please enter positive values");
    return;
  }else{
    const billamountValue = parseFloat(billamount.value);
    const tipercentagevalue = parseFloat(tipercentage.value);
    const tipamount = billamountValue * (tipercentagevalue/100);
    const totalbill = billamountValue + tipamount;
    output.textContent = totalbill;
  }
});