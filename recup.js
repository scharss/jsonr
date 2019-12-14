/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))*/

fetch('https://spreadsheets.google.com/feeds/list/1tpFSN7Bk82cu3T2_fNG0_xXlKVP5wrcKvMpnFH1DaPI/1/public/values?alt=json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        //console.log(myJson);

        console.log(myJson.feed.entry[0].gsx$x);
        console.log(myJson.feed.entry[0].gsx$y);


        x = myJson.feed.entry[0].gsx$x.$t;
        y = myJson.feed.entry[0].gsx$y.$t;
        console.log(x);
        console.log(typeof(x));




        document.getElementById("demo").innerHTML = x;
        document.getElementById("demo2").innerHTML = y;

    });