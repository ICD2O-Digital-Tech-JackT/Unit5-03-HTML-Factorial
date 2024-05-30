function Submit(){
  // Making variables
  let num = document.getElementById('num').value;
  let result = document.getElementById('Result');
  let current = num
  //factorial loop
  if (num>0&&Math.round(num)==num){
    do {
      //incrimenting down
      current-=1
      //checking if we can multiply
      if (current>0){
        num*=current //multiplying num
      }
    } while(current>0)
    //set display
    result.innerHTML = num
  } else{    
    //set display
    result.innerHTML = "Please enter a whole, positive number"
  }
}