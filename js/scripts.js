/*!
* Start Bootstrap - Blog Home v5.0.9 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();

var currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


var map = L.map('map').setView([51.317, 4.933], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                                maxZoom: 19,
                                attribution: '&copy; <a href="contact.html">MACServices Address Map</a>'
                        }).addTo(map);

var logoIcon = L.icon({
    iconUrl: 'assets/logo marker.png',
    shadowUrl: 'assets/logo marker shadow.png',

    iconSize:     [65, 95],
    shadowSize:   [22, 94],
    iconAnchor:   [45, 94],
    shadowAnchor: [38, 92], 
    popupAnchor:  [-3, -76] 
});                        
var marker = L.marker([51.317, 4.933], {icon: logoIcon}).addTo(map);

var bounds = [[51.3095339, 4.9211096], [51.32471998427867, 4.9691895838]];
L.rectangle(bounds, {color: "#f2de07", weight: 2}).addTo(map);

var polygon = L.polygon([
   [51.317, 4.933],
    [51.315, 4.931],
    [51.31, 4.93],
]).addTo(map);
marker.bindPopup(" in Turnhout <br> <b>Here is were</b><br> You can find us!").openPopup();
rectangle.bindPopup("This is the area around us.");
polygon.bindPopup(".");
