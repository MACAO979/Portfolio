var map = L.map('map').setView([51.317, 4.933], 10);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { 
                                maxZoom: 19,
                                attribution: '&copy; <a href="contact.html">MACServices Address Map</a>'
                        }).addTo(map);
