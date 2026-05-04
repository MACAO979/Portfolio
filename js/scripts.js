/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var map = L.map('map').setView([ 51.323278, 4.938841], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                                maxZoom: 19,
                                attribution: '&copy; <a href="contact.html">MACServices Address Map</a>'
                        }).addTo(map);

var logoIcon = L.icon({
    iconUrl: 'assets/logo marker.png',
    shadowUrl: 'assets/logo marker shadow.png',

    iconSize:     [55, 35], // size of the icon
    shadowSize:   [7, 4], // size of the shadow
    iconAnchor:   [45, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});                        
var marker = L.marker([51.323278, 4.938841], {icon: logoIcon}).addTo(map);

var bounds = [[51.3095339, 4.9211096], [51.32471998427867, 4.9691895838]];
L.rectangle(bounds, {color: "#34594f", weight: 1}).addTo(map);



var polygon = L.polygon([
   [51.323, 4.938],
    [51.323, 4.937],
    [51.32, 4.93],
]).addTo(map);
marker.bindPopup("<b>Here is were</b><br> You can find us!").openPopup();
rectangle.bindPopup("This is the area around us.");
polygon.bindPopup(".");

var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

$('#dropdownMenuButton').dropdown('toggle');

$(document).ready(function(){
$.ajax({
type:"get",
url:"https://randomuser.me/api/?result=6",
success: function(data){
result="";
for(i in data){
result+="ID: "+data[i].ID+" // UUID: "+data[i].UUID+"<br>";
}
$("#list").html(result);
}
});
});


fetch('https://randomuser.me/api/?result=6')
  .then(response => response.json()) 
  .then(posts => {
  
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => console.error('Error fetching posts:', error));












