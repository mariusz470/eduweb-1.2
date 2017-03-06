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
		var infoResult ="";
		$("#grid").on("click", function() {
			cleanbutton();
			infoResult="grid";
    		$("#result").append( $( "<span>"+grid+" </span>" ) );
 			 }
);
    	$("#http").on("click", function() {
    		cleanbutton();
    		infoResult ="http";
    		$("#result").append( $( "<span>"+http+" </span>" ) );
  		});
    	$("#radio").on("click", function() {
    		cleanbutton();
    		infoResult ="radio";
    		$("#result").append( $( "<span>"+radio+" </span>" ) );
  		});
    	$("#empty").on("click", function() {
    		cleanbutton();
    		infoResult ="empty";
    		$("#result").append( $( "<span>"+empty+" </span>" ) );
  		});
    	$("#pagination").on("click", function() {
    		cleanbutton();
    		infoResult ="pagination";
    		$("#result").append( $( "<span>"+pagination+" </span>" ) );
  		});
	 });
    function info(event){
    	switch(event) {
    		case "grid":
    		$("#info").find( "span:last" ).remove();
    		$("#info").append('<span>Wszystkie elementy div, posiadające zarówno klasę “grid” oraz klasę “grid-12”.</span>');
    		break;
    		case "http":
    		$("#info").find( "span:last" ).remove();
    		$("#info").append('<span>Wszystkie elementy a, których atrybut “href" zaczyna się na “http”, znajdujące się w elemencie o klasie “nav”.</span>');
    		break;
    		case "radio":
    		$("#info").find( "span:last" ).remove();
    		$("#info").append('<span>Wszystkie elementy input, których typ to “radio” lub “checkbox” oraz dodatkowo nie są aktualnie zaznaczone (checked).</span>');
    		break;
    		case "empty":
    		$("#info").find( "span:last" ).remove();
    		$("#info").append('<span>Wyłącznie pierwszy element p, który jest pusty (nie zawiera dzieci) oraz znajduje się w elemencie div z identyfikatorem “text”.</span>');
    		break;
    		case "pagination":
    		$("#info").find( "span:last" ).remove();
    		$("#info").append('<span>Wszystkie elementy z klasą “pagination-item”, które nie są elementem span.</span>');
    		break;
    		default:
    		$("#info").find( "span:last" ).remove();
    		$("#info").append('<span>Najedź kursorem na przycisk, aby wyświetlić informację. Wciśnij, aby zobaczyć selektor jQuery.</span>');
    	}
    }
    info("");
    $("#grid").hover(
    	function(){
    		$("#info").append(gridInfo)
    	},info("grid"),info(infoResult));
    $("#http").hover(info("http"),info(infoResult));
    $("#radio").hover(info("radio"),info(infoResult));
    $("#empty").hover(info("empty"),info(infoResult));
    $("#pagination").hover(info("pagination"),info(infoResult));
    

})(jQuery);
