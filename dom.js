const decrementBtn = document.getElementById("dec");
const incrementBtn = document.getElementById("inc");
const resetBtn = document.getElementById("reset");
const displayValue = document.getElementById("display");

// decrement



decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
      displayValue.innerText = value - 1;
    } else {
      alert("Negative value not allowed");
    }
  });
  
 
  
  // for increment button click
  incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 0) {
     displayValue.innerText=value+1;
    } else {
      alert("negative values are not allowed")
    }
  });
 
    

// Reset button event listener
resetBtn.addEventListener("click", () => {
  displayValue.innerText = "0";
});
