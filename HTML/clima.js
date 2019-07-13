


function requestWeather(city_name) {
    $.getJSON({
        url: "https://api.hgbrasil.com/weather/",
        data: {
            key: 'c9991c56',
            format: 'json-cors',
            city_name: city_name,
            locale: 'pt-br'
        },
        success: function( result ) {
            data = result.results;
            city_name = data.city_name;

            $( "#city" ).html(  city_name);
            $( "#temp" ).html( data.temp +"°C" )
            $( "#wind" ).html("Velocidade do vento:"+  data.wind_speedy);
            $( "#sunrise" ).html( "Nascer do sol: "+ data.sunrise);
            $( "#sunset" ).html( "Pôr do sol: "+ data.sunset);
            $( "#time" ).html( data.time);
            $( "#date" ).html( data.date);
            $( "#status" ).html( data.description);

            


            var url_img = "https://assets.hgbrasil.com/weather/images/" + data.img_id + ".png";
            $( "#weather-img" ).attr("src",url_img);
        }

    })
}


$( document ).ready(function() {
    requestWeather();
});