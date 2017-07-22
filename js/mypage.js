$(document).ready(function(){

	  wow = new WOW(
                      {})
                    wow.init();

});
$(document).ready(function(e) {
    $(".aboutme>h2").hover(function(){
		$(".aboutme>p").fadeIn(2000);
		})
	
});
$(document).ready(function(e) {
    $(".details>h2").hover(function(){
		$(".details>li").fadeIn(2000);
		$(".media").fadeIn(2000);
		})
	
});

$(document).ready(function(e) {	
$(".d3").click(function(){	
		$(".lang1").animate({width:"95%"},3000);
		$(".lang2").animate({width:"95%"},3000);
		$(".lang3").animate({width:"85%"},3000);
		$(".lang4").animate({width:"80%"},3000);
		$(".lang5").animate({width:"50%"},3000);
		$(".lang6").animate({width:"60%"},3000);
		})
});
$(document).ready(function(e) {
    $(".navbar-default .navbar-nav>li>a").click(function(){
		$("html,body").animate({scrollTop:$($.attr(this,'href')).offset().top},3000);
		})
});
$(document).ready(function(e) {
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
});
});
$(document).ready(function(e) {
	$(".d2").click(function(){
		$("#about").fadeIn(2000);
		$("#sec1").css("display","none");
		$("#sec3").css("display","none");
		$("#sec4").css("display","none");
		$("#sec5").css("display","none");
		$("#sec6").css("display","none");
		})
});
$(document).ready(function(e) {
	$(".d1").click(function(){
		$("#sec1").fadeIn(2000);
		$("#sec3").css("display","none");
		$("#sec4").css("display","none");
		$("#sec5").css("display","none");
		$("#sec6").css("display","none");
		$("#about").css("display","none");
		})
});
$(document).ready(function(e) {
	$(".d3").click(function(){
		$("#sec3").fadeIn(2000);
		$("#sec1").css("display","none");
		$("#sec4").css("display","none");
		$("#sec5").css("display","none");
		$("#sec6").css("display","none");
		$("#about").css("display","none");
		})
});
$(document).ready(function(e) {
	$(".d4").click(function(){
		$("#sec4").fadeIn(2000);
		$("#sec1").css("display","none");
		$("#sec3").css("display","none");
		$("#sec5").css("display","none");
		$("#sec6").css("display","none");
		$("#about").css("display","none");
		})
});
$(document).ready(function(e) {
	$(".d5").click(function(){
		$("#sec5").fadeIn(2000);
		$("#sec6").fadeIn(2000);
		$("#sec1").css("display","none");
		$("#sec3").css("display","none");
		$("#sec4").css("display","none");
		$("#about").css("display","none");
		})
});
$(document).ready(function() {
  $(".gear").click(function(){
	
	$(".option-color").fadeToggle(1000);
	
	var x =$(".option-color ul li");
	
	x.click(function(){
		
		$(".change").css("color",$(this).css("color"));
		$(".change1").css("background-color",$(this).css("background-color"));
		
		})
});
})

