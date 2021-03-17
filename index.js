
$('.nameFilm').on('submit', (event) => {
    event.preventDefault()
    let film = $('.Film').val();
    console.log(film);

    fetch('http://www.omdbapi.com/?t=' + film + '&apikey=dc4d8e0d')
        .then((response) => response.json())
        .then((post) => {
        console.log(post)

        $('.inform').html(`
        <p>${post.Title}</p>
        <p>Year: ${post.Year}</p>
        <p>Runtime: ${post.Runtime}</p>
        <p>Type: ${post.Type}</p>
        <p>Writer: ${post.Writer}</p>
        <p>Rating: ${post.imdbRating}</p>
        <p>Language: ${post.Language}</p>
        <p>Released: ${post.Released}</p>
        <p>Actors: ${post.Actors}</p>
        `);

        let year = 2021;
        console.log("Фильму исполнилось: " + (year - post.Year))
    })
    .catch((error) => {
    console.log(error);
    });
});

//'http://www.omdbapi.com/?s=' + film + '&apikey=dc4d8e0d'   - moi
//http://www.omdbapi.com/?s=harry&apikey=d357825





  //http://www.omdbapi.com/?i=tt3896198&apikey=8c820bc1 









// Class work ----------------------------------------------------
// fetch('https://jsonplaceholder.typicode.com/users/1')
//   .then((response) => response.json())
//   .then((post) => {
//     $('#root').html(`
//       <p>${post.name}</p>
//       <p>${post.username}</p>
//       <p><a href="mailto:${post.email}">${post.email}</a></p>
//       <p>Phone: ${post.phone}</p>
//       <p>Street: ${post.address.street}</p>
//       <p>City: ${post.address.city}</p>
//       <p><a href="#">${post.website}</a></p>
//   `);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//   -----------------------------------------------------------------