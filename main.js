$(document).ready(function() {
// write your code here

            $.getJSON('data.json', function(result){
            for(var i=0; i<result.length; i++)
            $("tbody").append("<tr>"+"<td>"+result[i]["name"]+"</td>"+"<td>"+result[i]["description"]+"</td>"+"<td>"+"<button id=\"link\" onclick='location.href=\"http://maps.google.com/maps?q="+result[i]["location"]+"+(My+Point)&z=14&ll="+result[i]["location"]+"\"'>Open in Google Maps</button>"+"</td>"+"</tr>");
            
            //working links but no marker
            //$("tbody").append("<tr>"+"<td>"+result[i]["name"]+"</td>"+"<td>"+result[i]["description"]+"</td>"+"<td>"+result[i]["location"]+"<button id=\"link\" onclick='location.href=\"http://www.google.com/maps/@"+result[i]["location"]+",14z\"'>Open in Google Maps</button>"+"</td>"+"</tr>");
            
            
            });
})

//Tasks

//Using the command prompt open the project folder in VS Code: code ~/oca/startnow-san-diego-top-spots
//Run: npm install
//Write your code in the index.html file and a corresponding main.js file.
//Add a title to the page.
//Add an H1 with 'San Diego Top Spots' as the text.
//Create an HTML table structure with the headers you see in the image above.
//Also make sure you reference your index.js before the </body> tag.
//Write the following JavaScript in your main.js file:
//1. Use the $.getJSON method to download the contents of the data.json file.
//2. Iterate through the top spots and create a table row for each spot.
//3. Create a link to the location using the longitude and latitude provided. (Example https://www.google.com/maps?q=33.09745,-116.99572)
//4.  To start/test your application in your browser - Run static . to start a web server that you 
//   can access by going to http://localhost:8080. You MUST follow this step and use a static web server
//   in order to read in the contents of a file on your local file system as required in this project.