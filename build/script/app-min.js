$(document).ready(function(){function e(e,o,a,t){$("#view-area").empty().append('<section class="book-card panel panel-default col-md-10 col-md-offset-1"><div class="cover-photo-container col-md-3"><a href="#book" data-id ="id"><img src="'+t+'" alt="" class="col-md-10 col-md-offset-1 cover-photo"/></a></div><div class="book-text-container col-md-9"><h3>'+e+'</h3><p class="genre">'+o+'</p><blockquote class="description truncated"><p>'+a+'</p></blockquote><a href="#" data-id="id" class="btn btn-danger crud-btn">Remove Book</a><a href="#" data-id="id" class="btn btn-primary crud-btn">Edit Book</a><a href="#" data-id="id" class="btn btn-info crud-btn">View Book</a></div></section></section>')}console.log("document is ready"),e("a fire upon the deep","science fiction","description here","http://www.wired.com/images_blogs/underwire/2012/03/a-fire-upon-the-deep.jpg")});