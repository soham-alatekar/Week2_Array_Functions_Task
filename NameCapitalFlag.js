var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    
    data.forEach(function(country){
        console.log("Name : " +country.name +"  "+"Capital : " +country.capital+"  "+"Flag : "+country.flag);
    })

}