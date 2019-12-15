var x = [];
var y = [];

//https://spreadsheets.google.com/feeds/list/spreadsheetID/worksheetID/public/values?alt=json
fetch('https://spreadsheets.google.com/feeds/list/1tpFSN7Bk82cu3T2_fNG0_xXlKVP5wrcKvMpnFH1DaPI/1/public/values?alt=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        //console.log(myJson);

        //console.log(myJson.feed.entry[0].gsx$x);
        //console.log(myJson.feed.entry[0].gsx$y);
        for (var i = 0; i < myJson.feed.entry.length; i++) {
            //console.log(myJson.feed.entry[i].gsx$x.$t);

            x.push(myJson.feed.entry[i].gsx$x.$t);
            y.push(myJson.feed.entry[i].gsx$y.$t);



        }
        console.log(x);
        //console.log(y);
        var z = y.map(Number);
        console.log(z);


    });
