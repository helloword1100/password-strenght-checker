const input_pass=document.getElementById('pass');
const sbm=document.getElementById('submit');
const str=document.getElementById('stren');
const about_pass=document.getElementById('password');


input_pass.addEventListener('input',()=>{
    if(input_pass.value.length>0)
    {
        about_pass.style.display='block'
    }
    else{
        about_pass.style.display='none'
    }
    
     if(input_pass.value.length<8)
    {
         about_pass.style.color='red';
         str.innerHTML="weak";
         input_pass.style.borderColor='red'
         str.style.color='red';
    }
    else if(input_pass.value.length>12)
    {
        about_pass.style.color='green';
        str.innerHTML="Good ";
        input_pass.style.borderColor='green'
        str.style.color='green';
    }
    else if(input_pass.value.length>8)
    {
        about_pass.style.color='yellow';
        str.innerHTML="Average";
        input_pass.style.borderColor='yellow'
        str.style.color='yellow';
    }
   
  


})