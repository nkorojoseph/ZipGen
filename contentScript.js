// check for Geolocation support
if (navigator.geolocation) {
   //alert('Geolocation is supported!');
   window.onload = function() {
        let startPos;

        var geoOptions = {
        timeout: 10 * 1000
        }
    
        let geoSuccess = function(position) {
        startPos = position;
        document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        };
        let geoError = function(error) {
        
        };
    
        navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
    };
  }
  else {
    console.log('Geolocation is not supported for this Browser/OS.');
  }


  