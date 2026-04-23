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
    fillColor: '#f03',
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

$('#dropdownMenuButton').dropdown('toggle');
