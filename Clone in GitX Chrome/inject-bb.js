var ending = ".git";
$("#repo-desc-cloneinfo").each(function(i,o){

	var cloneElement = $("a.ssh" ,o);
	var cloneUrl = cloneElement.attr('href');
	
	if(cloneUrl.substr(cloneUrl.length - ending.length, ending.length) == ending){
		var gitXLink = 'gitx://clone/?repo=' + encodeURIComponent(cloneUrl);

		var gitXLinkElement = $('<a>± GitX</a>');
		gitXLinkElement.attr("href", gitXLink);
		cloneElement.after($("<span> / </span>").append(gitXLinkElement));
	}

});

