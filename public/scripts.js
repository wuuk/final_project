    var input = document.querySelector('input');
    var button = document.querySelector('button');

    button.addEventListener('click', function() {
      getRottenMovie(input.value);
      console.log(input.value);
    });

    getTopMovies();

    function renderMovie(imageSrc, title) {
      var div = document.querySelector('div#results');
      var img = document.createElement('img');
      img.src = imageSrc;

      var titleElement = document.createElement('h3');
      titleElement.innerText = title;

      div.appendChild(titleElement);
      div.appendChild(img);
    }

    function getRottenMovie(movieTitle) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", "http://localhost:4567/movie_info/" + movieTitle);

      xhr.addEventListener('load', function() {
        console.log(xhr.response);
        var parsedMovie = JSON.parse(xhr.response);
        var title = parsedMovie["movies"][0]["title"];
        var poster = parsedMovie["movies"][0]["posters"]["detailed"];
        renderMovie(poster, title);
      });

      xhr.send();
    }

    function getTopMovies(movieTitle) {
      var xhr = new XMLHttpRequest();

      xhr.open("GET", "http://localhost:4567/top_movies");

      xhr.addEventListener('load', function() {
        //console.log(xhr.response);
        var parsedResponse = JSON.parse(xhr.response);
        var movies = parsedResponse["movies"];
        movies.forEach(function(movie) {
          var title = movie["title"];
          var poster = movie["posters"]["detailed"];
          renderMovie(poster, title);
        })
      });

      xhr.send();
    }

    // function getOMDBMovie(movieTitle) {
    //   var xhr = new XMLHttpRequest();

    //   xhr.open("GET", "http://omdbapi.com/?t=" + movieTitle);

    //   xhr.addEventListener('load', function() {
    //     console.log(xhr.response);
    //     parsedMovie = JSON.parse(xhr.response);
    //     renderMovie(parsedMovie["Poster"], parsedMovie["Title"]);
    //   });

    //   xhr.send();
    // }

