document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var options = {};
  var instances = M.Modal.init(elems, options);
});


 



//--------------------------------------------------------------
// var button = $('button')
// button.click(()=>{

var dashboard = $('#div-test');
// dashboard.removeClass('hii')
var alpha = $('#alpha');
var urlNews = "https://api.polygon.io/v2/reference/news?apiKey=2vBl2k6Nzv2Cqtal2Z2kE4sVaIT2FTNv";


var style = $('<style>').text(`
  .dashboard-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid gray;
    margin: 10px;
    width: 20%;
    height:400px;
  }
  .dashboard-item h3 {
    font-size: 15px;
    margin: 10px;
  }
  .dashboard-item img {
    max-width: 100%;
    margin-bottom: 10px;
    height: 200px;
  }

  .dashboard-item a {
    font-size: 10px;
    text-decoration: none;
    color: limegreen;
    margin-top: 10px;
  }
`).appendTo('head');

fetch(urlNews)
  .then(response => response.json())
  .then(data => {
 
    dashboard.empty();
    for (var i = 0; i <= 4; i++) {
      var title = data.results[i].title;
      var img = data.results[i].image_url;
      // var description = data.results[i].description;
      var article = data.results[i].article_url;
      var h3 = $('<h3>').text(title);
      var pic = $('<img>').attr("src", img);
      // var detail = $('<p>').text(description);
      var link = $('<a>').attr('href', article).text('Read More');
      var item = $('<div>').addClass('dashboard-item');

      item.append(h3, pic, link);
      dashboard.append(item);
    }
  })
 
//---------------------


fetch('https://fakestoreapi.com/products/')
  .then(response => response.json())
  .then(data => {
    console.log(data)
 
    alpha.empty();
    for (var i = 0; i <= 4; i++) {
      var title = data[i].title;
      var img2 = data[i].image;
      var price = data[i].price;
      var p = $('<p>').text(title);
      var pic2 = $('<img>').attr("src", img2);
      var cost = $('<p>').text("$" + price);
      var item2 = $('<div>').addClass('dashboard-item');

      item2.append( pic2, p, cost);
      alpha.append(item2);
    }
  })
 

// })


// fetch('https://fakestoreapi.com/products/')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     alpha.empty();
//     for (var i = 0; i < 5; i++) { // Loop through the first 5 products
//       var title = data[i].title;
//       var img = data[i].image;
//       var p = $('<p>').text(title);
//       var pic = $('<img>').attr("src", img);
//       alpha.append(p, pic);
//     }
//   })
//   .catch(error => {
//     console.log('Error fetching products:', error);
//   });





//--------------------------------------------------------------
  fetch('https://api.coincap.io/v2/assets?ids=bitcoin,usd-coin,polkadot,the-graph,tron')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const test = $('#Crypto');

    // loop over the array of assets
    for (const asset of data.data) {
      const id = asset.id;
      const name = asset.name;
      const price = asset.priceUsd;
      var symbol = asset.symbol;
      

      // create elements for displaying the asset information
      const assetContainer = $('<div>');
      const assetId = $('<h2>').text(id);
      const assetName = $('<p>').text(name);
      const assetPrice = $('<p>').text(`Price: ${price}`);
      var assetsymbol = $('<p>').text(symbol);
      

      // add the elements to the container div
      assetContainer.append(assetId);
      assetContainer.append(assetName);
      assetContainer.append(assetPrice);
      assetContainer.append(assetsymbol);
      

      // add the container div to the test element
      test.append(assetContainer);
    }
  });







