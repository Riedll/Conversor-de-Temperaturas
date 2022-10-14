let button = document.querySelector("#botão");

button.onclick = function(){

    let temperaturaCelcius;
    let temperaturaFarenheit;
    let temperaturaKelvin;
    let temperaturaRankine;

        let temperaturaInicial = parseInt(document.querySelector("#temperaturaInserida").value);
        let unidadeEscolhida = parseInt(document.querySelector("#unidadeEscolhida").value); 
        let celcius = document.querySelector("#grausCelcius");
        let farenheit = document.querySelector("#grausFarenheit");
        let kelvin = document.querySelector("#grausKelvin");
        let rankine = document.querySelector("#grausRankine");

            let entrada = document.querySelector("#temperaturaInserida");
    entrada.value = "";

                if(unidadeEscolhida == 0)
    {
        temperaturaCelcius = temperaturaInicial;
            }else
                if(unidadeEscolhida == 1)
    {
        temperaturaFarenheit = temperaturaInicial;

        temperaturaCelcius = (temperaturaFarenheit - 32) * 5/9;
            }else
                if(unidadeEscolhida == 2)
    {
        temperaturaKelvin = temperaturaInicial;

        temperaturaCelcius = temperaturaKelvin - 273;
            }else
                if(unidadeEscolhida == 3)
    {
        temperaturaRankine = temperaturaInicial;

        temperaturaCelcius = (temperaturaRankine - 491.67) * 5/9;
    }

    temperaturaFarenheit = (temperaturaCelcius * 9/5) + 32;

    temperaturaKelvin = temperaturaCelcius + 273;

    temperaturaRankine = temperaturaCelcius * 9/5 + 491.67;

    celcius.innerHTML = temperaturaCelcius.toFixed(2) + " ºC";
    celcius.style.display = "inline";
    
    farenheit.innerHTML = temperaturaFarenheit.toFixed(2) + " ºF";
    farenheit.style.display = "inline";

    kelvin.innerHTML = temperaturaKelvin.toFixed(2) + " K";
    kelvin.style.display = "inline";

    rankine.innerHTML = temperaturaRankine.toFixed(2) + " ºRa";
    rankine.style.display = "inline";

    return false;
}