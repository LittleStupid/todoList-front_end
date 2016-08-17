$("ul").on( "click", "li", function(){
  $(this).toggleClass( "completed" );
});

$("ul").on( "click", "span", function(event){
  $(this).parent().fadeOut( 500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress( function(event){
  //create new item if enter key is pressed.
  if( event.which === 13 ){
    var todoText = $(this).val();

    $(this).val("");
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});
