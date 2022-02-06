function palindromeCheck2(str) {                                                   
  
    const nonAlphaNum = /[\W_]/g;                                                    
    
    let firstVersion = str.toLowerCase().replace(nonAlphaNum, '');                   
    let reversedVersion = firstVersion.split('').reverse().join('');                 
    
    return reversedVersion === firstVersion;                                         
  }
  

  
  let submitButtonEvent = document.getElementById("submitButton");        
  
  submitButtonEvent.addEventListener("click", function() {
      'use strict';                                                       
  
      let value = document.getElementById("inputString").value;          
      let notification = document.getElementById("notification");        
      let displayWord = document.getElementById("displayWord");
    
      if(palindromeCheck2(value)) {

        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `é um palíndromo!`; 

        displayWord.innerHTML = 
          `Sentido normal: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Sentido inverso: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join(''); 
        
      } 
      
      else {
          
        notification.innerHTML = "\"" + value.toString() + "\"" + ` ` + `NÃO é um palíndromo!`; 

        displayWord.innerHTML = 
          `Sentido normal: ` + value.toLowerCase().replace(/[\W_]/g, '') + "<br>" + `Sentido inverso: ` + value.toLowerCase().replace(/[\W_]/g, '').split('').reverse().join('');  
      }

     
  })
  