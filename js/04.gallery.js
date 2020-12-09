/****** 이벤트 등록 ******/
$(".thumb img").click(onClick).eq(0).trigger("click");

/****** 이벤트 콜백 ******/
function onClick() {
	var src = $(this).attr('src');
	var title = $(this).data('title');
	$(".img-main")
	.attr({ 'src': src, 'alt': title })
	.data('title', title)
	.css("opacity", 0)
	.stop()
	.animate({"opacity": 1}, 300)
}