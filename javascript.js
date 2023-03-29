// 1. Created the variable you want to add
//2. Grab the html name to convert it to a variable name with the
//document.getElementById
//L3.Create the function
//4.Input the converted html and innerText changes what
//was put there in this example, the html was 0 and traded/equal
//for our adding/counting variable.

//Changes our html to javascript for headcount of 0
let headCount = document.getElementById("head-count")

let counts = 0
//Changes our html that saves headcount#, to javascript
let saving = document.getElementById("save")

//We created a function that adds our number "counts", by one 
//The second line of code converts that html to our number "counts"
function increment(){
     // Same as += , counting= counting + 1
     counts += 1
headCount.textContent = counts
    console.log(headCount)
}

//We created a function that creates a variable "theSave"
//for storing the counts
function save(){
  let theSave = counts + " - "  
  
    //textContent is like innerText but better
    saving.textContent += theSave
    // After storing we process the headcount back at zero in
    //html
    headCount.textContent = 0
    //Though we've made the html look like 0 we have to make
    //zero in javascript too
    counts = 0
}
