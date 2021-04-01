var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function(){
    var data = JSON.parse(this.response);
    var res = [];
    let countries =  Object.values(data).map((element) => {
        let curr = element.currencies  ;
        for(var i = 0 ; i<curr.length ; i++)
        {
            if(curr[i].code == "USD")
            {
                res.push(element.name);
            }
        }
    })

    console.log(res);     
}
