


function requestWeather(city_name) {

    city_name = $("#city_input").val();
    $.getJSON({
        url: "https://api.hgbrasil.com/weather/",
        data: {
            key: '9988e705',
            format: 'json-cors',
            city_name: city_name,
            locale: 'pt'

        },
        success: function( result ) {
            if(result.by === "default"){
                Toastify({
                    text: "Cidade inválida, digite uma cidade válida!!!",
                    duration: 3000,
                    newWindow: true,
                    backgroundColor: "#ff0000",
                  }).showToast();
            }

            else{

            
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
        }

    })
}




$( document ).ready(function() {
    $('#city_input').on('keypress',function(e) {
        if(e.which == 13) {
            var city_name = $("#city_input").val()
            requestWeather(city_name);
        }

        
        
    });

    



});