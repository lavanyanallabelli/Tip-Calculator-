/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

let bill =document.getElementById("billTotalInput");
let tip = document.getElementById("tipInput");
let noOfPeople = document.getElementById("numberOfPeople");
let totalPerPerson = document.getElementById("perPersonTotal");
// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div




let Person = parseInt(totalPerPerson.innerText);
let newPeople = parseInt(numberOfPeople.innerText) 

// Get number of people from number of people div


// ** Calculate the total bill per person **
//Number(bill.innerText);

const calculateBill = () => {
    
   
    let totalBill =Number(bill.value);
    // get bill from user input & convert it into a number

    let percentage  = (Number(tip.value))/100;
    // get the tip from user & convert it into a percentage (divide by 100)
    
    let tipAmount = totalBill * percentage;
    //console.log({tipAmount})
    // get the total tip amount

    let total = totalBill + tipAmount;
   // console.log({total})
    // calculate the total (tip amount + bill)
    
    Person = parseInt(total/newPeople);
    //console.log({Person})
    totalPerPerson.innerText = `$${Person.toFixed(2)}`
}
    // calculate the per person total (total divided by number of people)
  
  
    // update the perPersonTotal on DOM & show it to user
 

  
  
  
  // ** Splits the bill between more people **
  
  const increasePeople = ()=>{
   
    newPeople +=1
    // increment the amount of people
  
    noOfPeople.innerText=newPeople
    // update the DOM with the new number of people
  
     calculateBill()
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    if(newPeople<=1){
      return
    }
    else{
      newPeople -=1
      noOfPeople.innerText=newPeople

    }
    calculateBill()
  }
   
    // guard clause
   
    // if amount is 1 or less simply return
       
    // (a.k.a you can't decrease the number of people to 0 or negative!)
   
    // decrement the amount of people
      
    // update the DOM with the new number of people
    
    
    // calculate the bill based on the new number of people
    
  