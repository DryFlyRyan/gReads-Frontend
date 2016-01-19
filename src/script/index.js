$(document).ready(function() {
  console.log('document is ready');

  //Connection/Template Vars

  // var remote = 'https://limitless-plains-3321.herokuapp.com/';

  var remote =
  'http://localhost:8000';

  var view = $('#view-area');

  mainPage();

  // bookCard('a fire upon the deep', 'science fiction', 'description here', 'http://www.wired.com/images_blogs/underwire/2012/03/a-fire-upon-the-deep.jpg');

  // View Templates

  function mainPage() {

    $('#view-area').empty().append(
      '<section class="view-container flex-row-center">' +
      '<a href="#" id="books" class="book-container heading-container panel panel-default col-md-4">' +

        '<div class="book-img-container flex-row-center">' +
          '<img src="http://www.wired.com/images_blogs/underwire/2012/03/a-fire-upon-the-deep.jpg" alt="a fire upon the deep" />' +
        '</div>' +
        '<div class="book-headline-container flex-row-center">' +
          '<h1>books</h1>'+
        '</div>' +
      '</a>' +
      '<a href="#" id="authors" class="author-container heading-container panel panel-default col-md-offset-1 col-md-4">' +
        '<div class="author-img-container flex-row-center">' +
          '<img src="http://img.radio.cz/pictures/spisovatele/vonnegut_kurt1.jpg" alt="kurt vonnegut" />' +
        '</div>' +
        '<div class="author-headline-container flex-row-center">' +
          '<h1>authors</h1>' +
        '</div>' +
      '</a>' +
    '</section>'
  );
}

  function bookCard(title, genre, description, photo_url, id) {
    $('#view-area').append(
      '<section class="book-card panel panel-default col-md-10 col-md-offset-1">' +
                  '<div class="cover-photo-container col-md-3">' +
                    '<a href="#book" class="view-book" data-id ="' + id +'"><img src="'+ photo_url + '" alt="" class="col-md-10 col-md-offset-1 cover-photo"/></a>' +
                  '</div>' +
                  '<div class="book-text-container col-md-9">' +
                    '<h3>'+ title + '</h3>' +
                    '<p class="genre">' + genre + '</p>' +
                    '<blockquote class="description truncated">' +
                      '<p>' + description + '</p>' +
                    '</blockquote>' +
                    '<a href="#" data-id="'+id+'" class="btn btn-danger crud-btn remove-book">Remove Book</a>' +
                    '<a href="#" data-id="'+id+'" class="btn btn-primary crud-btn edit-book">Edit Book</a>' +
                    '<a href="#" data-id="'+id+'" class="btn btn-info crud-btn view-book">View Book</a>' +
                  '</div>' +
                '</section>' +
              '</section>'
    );
  }

  function authorCard(first_name, last_name, biography, photo_url, id) {
    $('#view-area').append(
      '<section class="book-card panel panel-default col-md-10 col-md-offset-1">' +
                  '<div class="cover-photo-container col-md-3">' +
                    '<a href="#book" class="view-author" data-id ="'+id+'"><img src="'+ photo_url + '" alt="" class="col-md-10 col-md-offset-1 cover-photo"/></a>' +
                  '</div>' +
                  '<div class="book-text-container col-md-9">' +
                    '<h3>'+ first_name + ' ' + last_name + '</h3>' +
                    '<blockquote class="description truncated">' +
                      '<p>' + biography + '</p>' +
                    '</blockquote>' +
                    '<a href="#" data-id="'+id+'" class="btn btn-danger crud-btn remove-author">Remove Author</a>' +
                    '<a href="#" data-id="'+id+'" class="btn btn-primary crud-btn edit-author">Edit Author</a>' +
                    '<a href="#" data-id="'+id+'" class="btn btn-info crud-btn view-author">View Author</a>' +
                  '</div>' +
                '</section>' +
              '</section>'
    );
  }

// View Functions

function bookCardPage() {
  view.empty();
  getAllBooks()
  .then(function(data){
    data.forEach(function(item) {
      bookCard(item.title, item.genre, item.description, item.photo_url, item.id)
    })
  })
}

function getAllBooks() {
  return new Promise(function(resolve, reject) {
    $.get(remote + '/books', function(data) {
      resolve(data);
    })
  })
}

function getOneBook(bookID) {
  return new Promise(function(resolve, reject) {
    $.post(remote + '/books/readBook', {id: bookID}, function(data) {
      resolve(data)
    })
  })
}

function authorCardPage() {
  view.empty();
  getAllAuthors()
  .then(function(data){
    data.forEach(function(item) {
      authorCard(item.first_name, item.last_name, item.biography, item.photo_url, item.id)
    })
  })
}

function getAllAuthors() {
  return new Promise(function(resolve, reject) {
    $.get(remote + '/authors', function(data) {
      resolve(data);
    })
  })
}

function getOneAuthor(authorID) {
  return new Promise(function(resolve, reject) {
    $.post(remote + '/authors/readAuthor', {id: authorID}, function(data) {
      resolve(data)
    })
  })
}


// Event Handlers

$('#home-button').click(function(){
  mainPage();
})

$('#books-button').click(function(){
  bookCardPage();
})

$(document).on('click','#books',function(){
  bookCardPage();
})

$('#authors-button').click(function(){
  authorCardPage();
})

$(document).on('click','#authors',function(){
  authorCardPage();
})

$(document).on('click', '.view-author', function(){
  view.empty();
  // console.log(remote + '/authors/' + $(this).data('id'));
  getOneAuthor($(this).data('id'))
  .then(function(data) {
    console.log(data);
    data = data[0];
    authorCard(data.first_name, data.last_name, data.biography, data.photo_url, data.id)
  })
})

$(document).on('click', '.view-book', function(){
  view.empty();
  // console.log(remote + '/authors/' + $(this).data('id'));
  getOneBook($(this).data('id'))
  .then(function(data) {
    console.log(data);
    data = data[0];
    bookCard(data.title, data.genre, data.description, data.photo_url, data.id)
  })
})

//End of the Line
})
