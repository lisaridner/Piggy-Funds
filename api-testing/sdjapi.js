

 



//--------------------------------------------------------------
var button = $('button')
button.click(()=>{

var dashboard = $('#div-test');
dashboard.removeClass('hii')
console.log("hiii")
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
  }
  .dashboard-item h3 {
    font-size: 20px;
    margin: 10px;
  }
  .dashboard-item img {
    max-width: 100%;
    margin-bottom: 10px;
    height: auto;
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
})



//--------------------------------------------------------------
