var map;

function LoadMap() {
    map = new Microsoft.Maps.Map('#mapView', {
        credentials: 'Am7pXyDtFcu7IrMI6Pq-rtc98641u1t7hChLvnIBx7YhsEQOZz-MkemW7GGCintq'
    });
    get_location_button.style.display="block";
}

function GetLocation(){
    navigator.geolocation.getCurrentPosition(function (position) {
        var loc = new Microsoft.Maps.Location(
            position.coords.latitude,
            position.coords.longitude);
        var pin = new Microsoft.Maps.Pushpin(loc);
        map.entities.push(pin);
        map.setView({ center: loc, zoom: 15 });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    LoadMap();
});
