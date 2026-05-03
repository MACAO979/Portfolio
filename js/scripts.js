/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
var map = L.map('map').setView([51.317, 4.933], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                                maxZoom: 19,
                                attribution: '&copy; <a href="contact.html">MACServices Address Map</a>'
                        }).addTo(map);

var marker = L.marker([51.317, 4.933]).addTo(map);

var circle = L.circle([51.317, 4.940], {
    color: 'red',
    fillColor: 'rgb(201, 31, 31)',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [51.317, 4.933],
    [51.315, 4.931],
    [51.31, 4.93],
]).addTo(map);
marker.bindPopup("<b>Here is were</b><br> You can find us!").openPopup();
circle.bindPopup("This is the area around us.");
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












