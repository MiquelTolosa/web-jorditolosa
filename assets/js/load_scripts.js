//load scripts
var ROOT_URL = "";
var parent_directory = "assets/js/";
if(window.location.pathname.indexOf("categories")!=-1 ||  window.location.pathname.indexOf("work")!=-1)
	parent_directory = "../"+parent_directory;
var urls = [
	"jquery.dropotron.min.js",
	"jquery.scrolly.min.js",
	"jquery.onvisible.min.js",
	"skel.min.js",
	"util.js",
	"main.js",
	"menu.js"
];
$(document).ready(function(){
	
	for(var i=0; i<urls.length; i++){
		var url = ROOT_URL+parent_directory+urls[i];
		$.getScript( url, function( data, textStatus, jqxhr ) {
		  console.log( data ); // Data returned
		  console.log( textStatus ); // Success
		  console.log( jqxhr.status ); // 200
		  console.log( "Load was performed." );
		});
	}
	
});

