console.log("this is script file");
const toggleSidebar = () => {

if ($(".sidebar").is(":visible"))
{

$(".sidebar").css("display","none");
$(".content").css("margin-left","0%");

}
else
{
$(".sidebar").css("display","block");
$(".content").css("margin-left","20%");
}
};
$('.carousel').carousel({
  interval: 2000
})

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})
