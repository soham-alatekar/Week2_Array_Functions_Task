var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    let countries =  Object.values(data).filter((element) => {
            return element.region == "Asia";
    })


    console.log("Countries in Asia  :  ");

    for(var j of countries)
    {
        console.log(j.name +"    "+j.region);
    }

}