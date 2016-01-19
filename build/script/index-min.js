$(document).ready(function(){function o(){$("#view-area").empty().append('<section class="view-container flex-row-center"><a href="#" id="books" class="book-container heading-container panel panel-default col-md-4"><div class="book-img-container flex-row-center"><img src="http://www.wired.com/images_blogs/underwire/2012/03/a-fire-upon-the-deep.jpg" alt="a fire upon the deep" /></div><div class="book-headline-container flex-row-center"><h1>books</h1></div></a><a href="#" id="authors" class="author-container heading-container panel panel-default col-md-offset-1 col-md-4"><div class="author-img-container flex-row-center"><img src="http://img.radio.cz/pictures/spisovatele/vonnegut_kurt1.jpg" alt="kurt vonnegut" /></div><div class="author-headline-container flex-row-center"><h1>authors</h1></div></a></section>')}function t(o,t,n,e,i){$("#view-area").append('<section class="book-card panel panel-default col-md-10 col-md-offset-1"><div class="cover-photo-container col-md-3"><a href="#book" class="view-book" data-id ="'+i+'"><img src="'+e+'" alt="" class="col-md-10 col-md-offset-1 cover-photo"/></a></div><div class="book-text-container col-md-9"><h3>'+o+'</h3><p class="genre">'+t+'</p><blockquote class="description truncated"><p>'+n+'</p></blockquote><a href="#" data-id="'+i+'" class="btn btn-danger crud-btn remove-book">Remove Book</a><a href="#" data-id="'+i+'" class="btn btn-primary crud-btn edit-book">Edit Book</a><a href="#" data-id="'+i+'" class="btn btn-info crud-btn view-book">View Book</a></div></section></section>')}function n(o,t,n,e,i){$("#view-area").append('<section class="book-card panel panel-default col-md-10 col-md-offset-1"><div class="cover-photo-container col-md-3"><a href="#book" class="view-author" data-id ="'+i+'"><img src="'+e+'" alt="" class="col-md-10 col-md-offset-1 cover-photo"/></a></div><div class="book-text-container col-md-9"><h3>'+o+" "+t+'</h3><blockquote class="description truncated"><p>'+n+'</p></blockquote><a href="#" data-id="'+i+'" class="btn btn-danger crud-btn remove-author">Remove Author</a><a href="#" data-id="'+i+'" class="btn btn-primary crud-btn edit-author">Edit Author</a><a href="#" data-id="'+i+'" class="btn btn-info crud-btn view-author">View Author</a></div></section></section>')}function e(){l.empty(),i().then(function(o){o.forEach(function(o){t(o.title,o.genre,o.description,o.photo_url,o.id)})})}function i(){return new Promise(function(o,t){$.get(d+"/books",function(t){o(t)})})}function a(o){return new Promise(function(t,n){$.post(d+"/books/readBook",{id:o},function(o){t(o)})})}function c(){l.empty(),r().then(function(o){o.forEach(function(o){n(o.first_name,o.last_name,o.biography,o.photo_url,o.id)})})}function r(){return new Promise(function(o,t){$.get(d+"/authors",function(t){o(t)})})}function s(o){return new Promise(function(t,n){$.post(d+"/authors/readAuthor",{id:o},function(o){t(o)})})}console.log("document is ready");var d="http://localhost:8000",l=$("#view-area");o(),$("#home-button").click(function(){o()}),$("#books-button").click(function(){e()}),$(document).on("click","#books",function(){e()}),$("#authors-button").click(function(){c()}),$(document).on("click","#authors",function(){c()}),$(document).on("click",".view-author",function(){l.empty(),s($(this).data("id")).then(function(o){console.log(o),o=o[0],n(o.first_name,o.last_name,o.biography,o.photo_url,o.id)})}),$(document).on("click",".view-book",function(){l.empty(),a($(this).data("id")).then(function(o){console.log(o),o=o[0],t(o.title,o.genre,o.description,o.photo_url,o.id)})})});