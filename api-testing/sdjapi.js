<<<<<<< HEAD


 
=======
// var dashboard = $('#div-test')
// //key 2vBl2k6Nzv2Cqtal2Z2kE4sVaIT2FTNv
// var url = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=2vBl2k6Nzv2Cqtal2Z2kE4sVaIT2FTNv"
// fetch(url)
// .then(response => response.json())
// .then(data => {console.log(data)
// dashboard.empty()
// for (var i = 0; i<= 4; i++){
//     var name = data.results[i].name
//     var h3 = $('<h3>').text(name)
//     dashboard.append(h3)
// }
// })

// var dashboard = $('#div-test')
// var urlNews = "https://api.polygon.io/v2/reference/news?apiKey=2vBl2k6Nzv2Cqtal2Z2kE4sVaIT2FTNv"
// var style = $('<style>').text(`
//     .dashboard-items{
//         display: flex;
//         flex-direction: row;
//         align-items: center;
//         justify-content: center;
//         text-align: center;
//         margin: 5px;
//         border: 2px solid gray;
//         padding: 5px;
//         width: 100%;

//     }
//     .dashboard-item img {
//          max-width: 100%;
//         height: auto;
//         margin-bottom: 10px;
//           }
    
// `).appendTo('head')
// fetch(urlNews)
// .then(response => response.json())
// .then(data => {console.log(data)
// dashboard.empty()
// for (var i = 0; i<= 4; i++){
//     var title = data.results[i].title
//     var img = data.results[i].image_url
//     var description = data.results[i].description
//     var artical = data.results[i].artical_url
//     var h3 = $('<h3>').text(title)
//     var pic = $('<img>').attr("src", img)
//     var detail = $('<p>').text(description)
//     var link = $('<a>').attr('href', artical).text('Read More');


//     var item = $('<div>').addClass('dashboard-item');

//     item.append(h3, pic, detail, link);
//     dashboard.append(item);
// }
// })


>>>>>>> main



//--------------------------------------------------------------
<<<<<<< HEAD
var button = $('button')
button.click(()=>{

var dashboard = $('#div-test');
dashboard.removeClass('hii')
console.log("hiii")
=======

var dashboard = $('#div-test');
>>>>>>> main
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
<<<<<<< HEAD
    width: 20%;
=======
>>>>>>> main
  }
  .dashboard-item h3 {
    font-size: 20px;
    margin: 10px;
  }
  .dashboard-item img {
    max-width: 100%;
    margin-bottom: 10px;
<<<<<<< HEAD
    height: auto;
=======
>>>>>>> main
  }
  .dashboard-item p {
    font-size: 8px;
  }
  .dashboard-item a {
    font-size: 10px;
    text-decoration: none;
    color: cyan;
    margin-top: 10px;
  }
`).appendTo('head');

fetch(urlNews)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    dashboard.empty();
    for (var i = 0; i <= 4; i++) {
      var title = data.results[i].title;
      var img = data.results[i].image_url;
      var description = data.results[i].description;
      var article = data.results[i].article_url;
      var h3 = $('<h3>').text(title);
      var pic = $('<img>').attr("src", img);
      var detail = $('<p>').text(description);
      var link = $('<a>').attr('href', article).text('Read More');
      var item = $('<div>').addClass('dashboard-item');

      item.append(h3, pic, detail, link);
      dashboard.append(item);
    }
  })
<<<<<<< HEAD
})
=======

>>>>>>> main



//--------------------------------------------------------------
<<<<<<< HEAD
=======
// var name = "aapl"
// var dashboard = $('#div-test')
// //key 2vBl2k6Nzv2Cqtal2Z2kE4sVaIT2FTNv
// var url = "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=2vBl2k6Nzv2Cqtal2Z2kE4sVaIT2FTNv"
// fetch(url)
// .then(response => response.json())
// .then(data => {console.log(data)
// // dashboard.empty()
// // for (var i = 0; i<= 4; i++){
// //     var name = data.results[i].name
// //     var h3 = $('<h3>').text(name)
// //     dashboard.append(h3)
// // }
// })
>>>>>>> main
