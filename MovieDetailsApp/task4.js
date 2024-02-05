function fetchMovieDetails() {
    const movieName = document.getElementById('movieName').value;

    const apiUrl = `https://www.omdbapi.com/?t=$fukrey&apikey=c37526bb`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.Response === 'True') {
          displayMovieDetails(data);
        } else {
          document.getElementById('movieDetails').innerHTML = 'Movie not found.';
        }
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
        document.getElementById('movieDetails').innerHTML = 'Error fetching movie details.';
      });
  }

  function displayMovieDetails(movie) {
    const detailsContainer = document.getElementById('movieDetails');
    detailsContainer.innerHTML = `
      <h2>${movie.Title}</h2>
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Plot:</strong> ${movie.Plot}</p>
      <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>
    `;
  }
  