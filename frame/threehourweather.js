
window.onload = function() {
        var clock = document.querySelector('div');
        var last_hour = 0;
        var imageSetToday = 0;
        // But there is a little problem
        // we need to pad 0-9 with an extra
        // 0 on the left for hours, seconds, minutes
        var pad = function(x) {
            return x < 10 ? '0'+x : x;
        };
        
        var threeHour = function() {
            $.getJSON("https://api.openweathermap.org/data/2.5/forecast?id=6173331&units=metric&appid=8a0125f0aa87a97fffc45a41349af913",function(data){
                console.log(data);
                for (i=0; i<5; i++){
                  var icon = data.list[i].weather[0].icon.slice(0,2);
                  //const link = `<img src="http://openweathermap.org/img/wn/${icon}@2x.png"/>`;
                  const link = `<img src="weather/${icon}.png"/>`;
                  elementID = "icon"+(i+1);
                  document.getElementById(elementID).innerHTML = link;
                  var gmtTime = parseInt(data.list[i].dt, 10);
                  thedate = new Date(gmtTime *1000);
                  elementID = "time"+(i+1);
                  document.getElementById(elementID).innerHTML = thedate.toString().slice(16,21);
                }
            });
        };


        threeHour(); 

}
