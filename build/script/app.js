$(document).ready(function() {
  console.log('document is ready');

  // mainPage();

  bookCard('a fire upon the deep', 'science fiction', 'description here', 'http://www.wired.com/images_blogs/underwire/2012/03/a-fire-upon-the-deep.jpg');

  // View Templates

  function bookCard(title, genre, description, photo_url) {
    $('#view-area').empty().append(
      '<section class="book-card panel panel-default col-md-10 col-md-offset-1">' +
                  '<div class="cover-photo-container col-md-3">' +
                    '<a href="#book" data-id ="id"><img src="'+ photo_url + '" alt="" class="col-md-10 col-md-offset-1 cover-photo"/></a>' +
                  '</div>' +
                  '<div class="book-text-container col-md-9">' +
                    '<h3>'+ title + '</h3>' +
                    '<p class="genre">' + genre + '</p>' +
                    '<blockquote class="description truncated">' +
                      '<p>' + description + '</p>' +
                    '</blockquote>' +
                    '<a href="#" data-id="id" class="btn btn-danger crud-btn">Remove Book</a>' +
                    '<a href="#" data-id="id" class="btn btn-primary crud-btn">Edit Book</a>' +
                    '<a href="#" data-id="id" class="btn btn-info crud-btn">View Book</a>' +
                  '</div>' +
                '</section>' +
              '</section>'
    )
  }

  function mainPage() {

    $('#view-area').empty().append(
      '<section class="view-container flex-row-center">' +
      '<a href="#books" class="book-container heading-container panel panel-default col-md-4">' +

        '<div class="book-img-container flex-row-center">' +
          '<img src="http://www.wired.com/images_blogs/underwire/2012/03/a-fire-upon-the-deep.jpg" alt="a fire upon the deep" />' +
        '</div>' +
        '<div class="book-headline-container flex-row-center">' +
          '<h1>books</h1>'+
        '</div>' +
      '</a>' +
      '<a href="#authors" class="author-container heading-container panel panel-default col-md-offset-1 col-md-4">' +
        '<div class="author-img-container flex-row-center">' +
          '<img src="http://img.radio.cz/pictures/spisovatele/vonnegut_kurt1.jpg" alt="kurt vonnegut" />' +
        '</div>' +
        '<div class="author-headline-container flex-row-center">' +
          '<h1>authors</h1>' +
        '</div>' +
      '</a>' +
    '</section>'
    )
  }
})
