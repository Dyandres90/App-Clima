window.addEventListener('load', () => {
    let lon
    let lat

    let temperatura = document.getElementById('temperatura')
    let descripcion = document.getElementById('descripcion')
    let ubicacion = document.getElementById('ubicacion')
    let icono = document.getElementById('icono')
    let velocidad = document.getElementById('velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {
            
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=9a10066618a191b64cc56dc10f5fe879`
            
            
            fetch(url)
            .then(response => {return response.json()})
            .then(data =>{
                let temp = Math.round(data.main.temp)
                temperatura.textContent = `${temp} °C`

                let desc = data.weather[0].description
                descripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                velocidad.textContent = `${data.wind.speed} m/s`

                console.log(data)

                //iconos animado
                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                    case 'Thunderstorm':
                      icono.src='animated/thunder.svg'
                      console.log('TORMENTA');
                      break;
                    case 'Drizzle':
                      icono.src='animated/rainy-2.svg'
                      console.log('LLOVIZNA');
                      break;
                    case 'Rain':
                      icono.src='animated/rainy-7.svg'
                      console.log('LLUVIA');
                      break;
                    case 'Snow':
                      icono.src='animated/snowy-6.svg'
                        console.log('NIEVE');
                      break;                        
                    case 'Clear':
                        icono.src='animated/day.svg'
                        console.log('LIMPIO');
                      break;
                    case 'Atmosphere':
                      icono.src='animated/weather.svg'
                        console.log('ATMOSFERA');
                        break;  
                    case 'Clouds':
                        icono.src='animated/cloudy-day-1.svg'
                        console.log('NUBES');
                        break;  
                    default:
                      icono.src='animated/cloudy-day-1.svg'
                      console.log('por defecto');
                  }
            })
            .catch(error =>{
                console.log(error)
            })
        })
    }
}) 