var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    //let countries =  Object.values(data).filter((element) => {
    //        return element.currencies ==  ;
    //})

    for(var i of data)
    {
        console.log(i.currencies);
    }
    

  //  for(var j of countries)
   // {
    //    console.log(j.name +"   "+ j.currencies.name);
    //}    
}