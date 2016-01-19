$(document).ready(function() {
  // Total Arrays

  var authorsArray;
  var booksArray;

  //Connection/Template Vars

  var remote = 'https://limitless-plains-3321.herokuapp.com/';

  // var remote = 'http://localhost:8000';

  var view = $('#view-area');
  console.log('document is ready');



  mainPage();

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

  function bookForm() {
    view.empty().append(
      '<form class="form-horizontal">' +
        '<fieldset>' +
          '<legend>Add Book</legend>' +
          '<div class="form-group">' +
            '<label for="inputTitle" class="col-lg-2 control-label">Title</label>' +
            '<div class="col-lg-10">' +
              '<input type="text" class="form-control" id="inputTitle" placeholder="Title" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="inputGenre" class="col-lg-2 control-label">Genre</label>' +
            '<div class="col-lg-10">' +
              '<input type="password" class="form-control" id="inputPassword" placeholder="Genre" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="inputBookPhoto" class="col-lg-2 control-label">Photo URL</label>' +
            '<div class="col-lg-10">' +
              '<input type="text" class="form-control" id="inputBookPhoto" placeholder="Photo URL" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="inputDescription" class="col-lg-2 control-label">Description</label>' +
            '<div class="col-lg-10">' +
              '<textarea class="form-control" rows="3" id="inputDescription" style="margin: 0px -18.8438px 0px 0px; height: 140px; width: 100%;"></textarea>' +
              '<span class="help-block">Please enter a short description of your book here.</span>' +
            '</div>' +
          '</div>' +
              '<div class="form-group">' +
            '<div class="col-lg-10 col-lg-offset-2">' +
              '<button type="reset" class="btn btn-default">Cancel</button>' +
              '<button type="submit" class="btn btn-primary">Submit</button>' +
            '</div>' +
          '</div>' +
        '</fieldset>' +
      '</form>'
    )
  }

  function authorForm() {
    view.empty().append(
      '<form class="form-horizontal">' +
        '<fieldset>' +
          '<legend>Add Author</legend>' +
          '<div class="form-group">' +
            '<label for="inputFirstName" class="col-lg-2 control-label">First Name</label>' +
            '<div class="col-lg-10">' +
              '<input type="text" class="form-control" id="inputFirstName" placeholder="First Name" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="inputLastName" class="col-lg-2 control-label">Last Name</label>' +
            '<div class="col-lg-10">' +
              '<input type="text" class="form-control" id="inputLastName" placeholder="Last Name" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="inputAuthorPhoto" class="col-lg-2 control-label">Photo URL</label>' +
            '<div class="col-lg-10">' +
              '<input type="text" class="form-control" id="inputAuthorPhoto" placeholder="Photo URL" autocomplete="off" style="cursor: auto; background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3QsPDhss3LcOZQAAAU5JREFUOMvdkzFLA0EQhd/bO7iIYmklaCUopLAQA6KNaawt9BeIgnUwLHPJRchfEBR7CyGWgiDY2SlIQBT/gDaCoGDudiy8SLwkBiwz1c7y+GZ25i0wnFEqlSZFZKGdi8iiiOR7aU32QkR2c7ncPcljAARAkgckb8IwrGf1fg/oJ8lRAHkR2VDVmOQ8AKjqY1bMHgCGYXhFchnAg6omJGcBXEZRtNoXYK2dMsaMt1qtD9/3p40x5yS9tHICYF1Vn0mOxXH8Uq/Xb389wff9PQDbQRB0t/QNOiPZ1h4B2MoO0fxnYz8dOOcOVbWhqq8kJzzPa3RAXZIkawCenHMjJN/+GiIqlcoFgKKq3pEMAMwAuCa5VK1W3SAfbAIopum+cy5KzwXn3M5AI6XVYlVt1mq1U8/zTlS1CeC9j2+6o1wuz1lrVzpWXLDWTg3pz/0CQnd2Jos49xUAAAAASUVORK5CYII=&quot;); background-attachment: scroll; background-position: 100% 50%; background-repeat: no-repeat;">' +
            '</div>' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="inputBiography" class="col-lg-2 control-label">Biography</label>' +
            '<div class="col-lg-10">' +
              '<textarea class="form-control" rows="3" id="inputBiography" style="margin: 0px -18.8438px 0px 0px; height: 140px; width: 100%;"></textarea>' +
              '<span class="help-block">Please enter a short description of your book here.</span>' +
            '</div>' +
          '</div>' +
              '<div class="form-group">' +
            '<div class="col-lg-10 col-lg-offset-2">' +
              '<button type="reset" class="btn btn-default">Cancel</button>' +
              '<button type="submit" class="btn btn-primary">Submit</button>' +
            '</div>' +
          '</div>' +
        '</fieldset>' +
      '</form>'
    )
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

// Startup Functions

readAll();

function readAll() {
  getAllAuthors()
  .then(function(data) {
    authorsArray = data;
    $('#authors-button').append(
      '<span class="badge">'+ authorsArray.length + '</span>'
    )
  })
  getAllBooks()
  .then(function(data){
    booksArray = data;
    $('#books-button').append(
      '<span class="badge">'+ booksArray.length + '</span>'
    )
  })
}

// Modal Handlers

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

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

$('#add-book').click(function(){
  bookForm();
})

$('#add-author').click(function(){
  authorForm();
})

//End of the Line
})
