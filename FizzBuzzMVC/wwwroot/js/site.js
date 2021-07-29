"use strict"

//retrieves the id of the HTML element
let $ =(id)=> {
    return document.getElementById(id);
}
//makes the even numbers BOLD
let fizzBuzz = () => {

    //this array will hold the numbers generated using a for loop
    let numbers = [];

    //get the start and end number from the user
    //and convert them to a number
    let startValue = parseInt($("startValue").value); 
    let endValue = parseInt($("endValue").value);


    //populate the array using the starting and ending values
    for(startValue; startValue <=  endValue; startValue++) {
        numbers.push(startValue);
    }


    //using the forEach function iterate over the numbers array
    //and check for multiples of 3 and 5
    numbers.forEach((num)=>{
        
        let row = $("results").insertRow();
        let cell = row.insertCell();

        if(num % 3 == 0 && num % 5 == 0) {
            row.className = "bold-orange";
            cell.innerHTML = "FizzBuzz";
        } else if (num % 3 == 0){
            row.className = "bold";
            cell.innerHTML = "Fizz";
        } else if(num % 5 == 0) {
            row.className = "bold";
            cell.innerHTML = "Buzz";
        } else {
            cell.innerHTML = num;
        }

    });

}
//when window loads
window.onload = function() {
    //when the event of click occurs trigger the fizzBuzz function
    $("btnSubmit").onclick = function() {
        //this statement resets the table body data
        $("results").innerHTML = "";
    
        fizzBuzz();
   }
}