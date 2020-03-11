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



            //console.log(typeof(x));

        }
        console.log(x);
        console.log(y);

        document.getElementById("demo").innerHTML = x;
        document.getElementById("demo2").innerHTML = y;

    });