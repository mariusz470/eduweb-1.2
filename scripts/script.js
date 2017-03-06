(function($) {

    $(document).ready(function() {
    	console.log("success");
		var grid = "$(div.grid.grid-12);";
		var http = "$(.nav a [href^='http']);";
		var radio = "$(input:radio:not(:checked), input:checkbox:not(:checked));";
		var empty = "$(div#text p:empty:first);";
		var pagination = "$(.pagination-item:not('span'));";
		$("#grid").hover(function() {
    $("#result").append( $( "<span>"+grid+" </span>" ) );
  }, function() {
    $("#result").find( "span:last" ).remove();
  }
);
    	$("#http").hover(function() {
    $("#result").append( $( "<span>"+http+" </span>" ) );
  }, function() {
    $("#result").find( "span:last" ).remove();
  }
);
    	$("#radio").hover(function() {
    $("#result").append( $( "<span>"+radio+" </span>" ) );
  }, function() {
    $("#result").find( "span:last" ).remove();
  }
);
    	$("#empty").hover(function() {
    $("#result").append( $( "<span>"+empty+" </span>" ) );
  }, function() {
    $("#result").find( "span:last" ).remove();
  }
);
    	$("#pagination").hover(function() {
    $("#result").append( $( "<span>"+pagination+" </span>" ) );
  }, function() {
    $("#result").find( "span:last" ).remove();
  }
);
	 });
    

})(jQuery);
