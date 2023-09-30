var menuHTML = "<div id='titleName'>JORDI TOLOSA</div>"+
				"<nav id='nav'>"+
					"<ul>"+
						"<li><a href='"+ROOT_URL+"/index.html'>Home</a></li>"+
						"<li><a href='"+ROOT_URL+"/about.html'>About</a></li>"+
						"<li><a href='"+ROOT_URL+"/store.html'>Store</a></li>"+
						"<li><a href='"+ROOT_URL+"/contact.php'>Contact</a></li>"+
					"</ul>"+
				"</nav>";

$(document).ready(function(){
	$("#header").append(menuHTML);
});
