var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    let countries =  Object.values(data).filter((element) => {
            return element.population <= 200000 ;
    })


    console.log("Countries with population less than 2 lacs are  :  ");

    for(var j of countries)
    {
        console.log(j.name +"   "+ j.population);
    }

}