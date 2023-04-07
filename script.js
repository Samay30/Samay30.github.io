

function showAlert() {
    if(fname.value =='' || fname.value == null){
        alert('Missing items, Please try again!')
    }
    else if(lname.value =='' || lname.value == null){
        alert('Missing items, Please try again!')
    }
    else if(birthday.value =='' || birthday.value == null){
        alert('Missing items, Please try again!')
    }
    else if(sub.value==''|| sub.value==null){
        alert('missing items, Please try again')
    }
    else{
        alert("Form submitted!");
    }
    

}

function ChangeColor() {  
     document.body.style.backgroundColor = 'Red';  
     setTimeout("ChangeColor2()", 2000);  
}  
  
function ChangeColor2(){  
    document.body.style.backgroundColor = 'grey';  
    setTimeout("ChangeColor3()", 2000);  
 }  
  
function ChangeColor3()   {  
     document.body.style.backgroundColor = 'Green';  
     setTimeout("ChangeColor4()", 2000);  
 }  
  
function ChangeColor4(){  
    document.body.style.backgroundColor = 'Red';  
 }  
