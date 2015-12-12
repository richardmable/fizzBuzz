//By Richard Mable

window.onload = function(){
	//listens for click of "FizzBuzz" button
	document.getElementById("go").addEventListener("click", function(){
		//loop to count to 100
		for (var i = 0; i <= 100; i++) {
			//if 15.  This is placed first to avoid print just Fizz or Buzz, since those
			//will also give no remainder.  The rest of the lines create the text and place it
			//in the div printOut.
			if (i % 15 == 0){
				//create an element p assign to para
				var para = document.createElement("P");
				//create the text to be placed, assign to t
				var t = document.createTextNode("FizzBuzz");
				//append the t var to the para var. (attaches text to new paragraph)
				para.appendChild(t);
				//prints out the newly created paragraph with text in the printOut div.
				document.getElementById("printOut").appendChild(para);
			//if 5
			}else if (i % 5 == 0){
				var para = document.createElement("P");
				var t = document.createTextNode("Buzz");
				para.appendChild(t);
				document.getElementById("printOut").appendChild(para);
			//if 3
			}else if (i % 3 == 0){
				var para = document.createElement("P");
				var t = document.createTextNode("Fizz");
				para.appendChild(t);
				document.getElementById("printOut").appendChild(para);
			}else {
				var para = document.createElement("P");
				var t = document.createTextNode(i);
				para.appendChild(t);
				document.getElementById("printOut").appendChild(para);
			}
		};
	});
};