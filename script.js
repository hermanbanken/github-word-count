function counts(){
jQuery(".markdown-body").each(function(){
	var count = -1;

	count = $(this).text().split(/\s+/).filter(function(word){
		return /[a-z]/igm.test(word);
	}).length;

	var header = $(this).closest(".file").size() && $(this).closest(".file").find(".file-info")
			|| 	 $(this).closest("#readme").size() && $(this).closest("#readme").find("h3");
	header.append('<span class="file-info-divider"></span> '+count+' words');
});
}

$(function(){
	$(window).on("pjax:end", function(){counts(); console.log("Counted!")});
	counts();
	window.counts = counts;
});