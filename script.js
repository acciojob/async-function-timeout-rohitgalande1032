//your JS code here. If required.


document.getElementById("btn").addEventListener("click", async () => {
	let ip1 = document.getElementById("text");
	let ip2 = document.getElementById("delay");
	
	let text = ip1.value;
	let delay = parseInt(ip2.value);
	let output = document.getElementById("output");

	// Function to return a promise with a timeout
    function delayFunction(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

	// Wait for the delay using async/await
	  await delayFunction(delay);
  
	  // Display the user-provided text after the delay
	  output.innerText = text;
})