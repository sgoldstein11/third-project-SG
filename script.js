
console.log("script running")

// names the different constants and fetches/gets them from the html file
const toyButton = document.querySelector("button");
const status = document.querySelector("#status");
const imageDiv = document.querySelector("#image-container");
const milkbottles = document.querySelectorAll ('.milkbottle');
const milkstatus = document.querySelector('#milkstatus');

//creates a variable named count and initalizes (starts at. first time) it with a value of zero
let count = 0

//adds an event listener -- listen for a click. when you hear a click do ___


toyButton.addEventListener('click', (e) =>{
  
  //once the button has been clicked, do the following: add 1 to the count
  count += 1
  console.log(`Button pressed ${count} times.`)
  //changing the html in the elemnt with an id of status. changing it to "you played the movie 6 times"
  // ${count} plugs the variable count into the string
  status.innerHTML = `You played Toy Story ${count} times!`
  // once they've clicked the button 3 times it tells you Sammy wants to watch more. If you click it again
  //it tells you keep clicking until you reach greater than six 
  if (count == 3) {
    status.innerHTML = '<h3>Sammy wants to watch more Toy Story. Keep on clicking!</h3>'
     imageDiv.innerHTML = '<img src ="SammyCoco.jpg"/>'
 
    
  } else if (count >6) {
     status.innerHTML = '<p>Good Job! Sammy has watched all the Toy Story he wanted to this week! </p>' 
     imageDiv.innerHTML = '<img src = "Smiling.jpg"/>'
     
  }
 
})

console.log (milkbottles);
milkbottles.forEach(milkbottle => {
    milkbottle.addEventListener ('click', e=> {
        milkbottle.classList.toggle ('active');
        countmilkbottles();
    });
});

console.log(milkstatus)
function countmilkbottles() {
    var activemilkbottles = [];
    milkbottles.forEach(milkbottle => {
        if(milkbottle.classList.contains('active')) { 
            activemilkbottles.push(milkbottle);
        }
    });

    console.log(activemilkbottles.length)
    milkstatus.innerHTML= `<h3>You gave Sammy ${activemilkbottles.length} bottles of milk. He wants 10 total!</h3>` 
};