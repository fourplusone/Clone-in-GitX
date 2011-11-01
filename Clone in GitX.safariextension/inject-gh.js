$(".url-box").each(function(i,o){
	var urlBox = $(o);
	var nativeClones = $(".native-clones", o);
	if(nativeClones[0] == undefined){
		urlBox.prepend('<ul class="native-clones"></ul>')
	}
	nativeClones = $(".native-clones", o);
	var publicUrl = $(".public_clone_url a" ,o).attr('href');
	var privateUrl = $(".private_clone_url a" ,o).attr('href');
	var cloneUrl = privateUrl != undefined ? privateUrl : publicUrl;
	
	
	var gitXLink = 'gitx://clone/?repo=' + encodeURIComponent(cloneUrl);
	var gitXLinkElement = $('<a class="minibutton btn-clone-in-gitx "><span><span class="icon"></span>± Clone in GitX</span></a></li>');
	gitXLinkElement.attr("href", gitXLink);
	
	
	nativeClones.append($("<li>").append(gitXLinkElement));
	
});

