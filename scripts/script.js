(function($) {

    $(document).ready(function() {
    	var clicked=false;
    	function cleanbutton(){
    		if (clicked) {
    			$("#result").find( "span:last" ).remove();
    		}
    		else {
    			clicked=true
    		}
    		
    	}
    	console.log("success");
		var grid = "$(div.grid.grid-12);";
		var http = "$(.nav a [href^='http']);";
		var radio = "$(input:radio:not(:checked), input:checkbox:not(:checked));";
		var empty = "$(div#text p:empty:first);";
		var pagination = "$(.pagination-item:not('span'));";
		$("#grid").on("click", function() {
			cleanbutton();
    		$("#result").append( $( "<span>"+grid+" </span>" ) );
 			 }
);
    	$("#http").on("click", function() {
    		cleanbutton()
    		$("#result").append( $( "<span>"+http+" </span>" ) );
  		});
    	$("#radio").on("click", function() {
    		cleanbutton()
    		$("#result").append( $( "<span>"+radio+" </span>" ) );
  		});
    	$("#empty").on("click", function() {
    		cleanbutton()
    		$("#result").append( $( "<span>"+empty+" </span>" ) );
  		});
    	$("#pagination").on("click", function() {
    		cleanbutton()
    		$("#result").append( $( "<span>"+pagination+" </span>" ) );
  		});
	 });
    $("#http").hover()
    

})(jQuery);
