var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var population = [];
    

    data.forEach(function(country){
        population.push(country.population);
    })

    
    console.log(population.reduce(function(accumulator,currentValue){
        return accumulator+currentValue;
    }));


}