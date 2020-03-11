var x = [];
var y = [];

fetch('https://spreadsheets.google.com/feeds/list/15damACaXrXfzAsXRfMgjkFLbfQFTlLjJ1SDTxk6OKw8/1/public/values?alt=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        //console.log(myJson);

        for (var i = 0; i < myJson.feed.entry.length; i++) {


            x.push(myJson.feed.entry[i].gsx$x.$t);
            y.push(myJson.feed.entry[i].gsx$y.$t);

        }
        console.log(x);
        console.log(y);
        var i = 0;
        var len = y.length
        while (i < len) {
            y[i] = parseFloat(y[i]);
            i++
        }
        console.log(y);

        document.getElementById("demo").innerHTML = x;
        document.getElementById("demo2").innerHTML = y;

    });