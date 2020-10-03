function Model(){
this.calc = function (val, home, visiting){
    if(!(isNaN(val) && isNaN(home) && isNaN(visiting))){
    let temp = val/home;
    val = temp*visiting;
    val = val + val * (view.getFeeValue());
    return Math.round(val);
    }
    };

this.fetchData = function () {
    var http = new XMLHttpRequest(),
    arr = [], rate, name, i, names = [], rates = [];
    http.open("GET", "https://devweb2019.cis.strath.ac.uk/~aes02112/ecbxml.php", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function () {
        if(http.readyState === 4 && http.status === 200){
            var xmlDoc = this.responseXML,
                data = xmlDoc.getElementsByTagName("Cube");
            for(i = 2; i < data.length; i++){
                 rate = data[i].getAttribute('rate');
                 name = data[i].getAttribute('currency');
                 names.push(name);
                 rates.push(rate);

            }
            localStorage.setItem('names',JSON.stringify(names));
            localStorage.setItem('rates',JSON.stringify(rates));

        }
    };

    http.send();
};
this.getRate = function(id){
    let names = JSON.parse(localStorage.getItem('names'));
    let rates = JSON.parse(localStorage.getItem('rates'));
    if(id === "EUR"){
        return 1;
    }
    let currIndex = names.indexOf(id);
    return rates[currIndex];
};





}
