const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1a4b3e0604msh67de1dfcea0d202p1f0d23jsnb9419c53c9b0',
		'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
	}
};

fetch('https://yt-api.p.rapidapi.com/dl?id=arj7oStGLkU', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

    // Define the function to call the API
function callApi() {
    // Make an HTTP request to the API endpoint
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // Do something with the data returned by the API
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occur during the API request
        console.error(error);
      });
  }
  
  // Bind the button to the function
  const button = document.querySelector('button');
  button.addEventListener('click', callApi);
  