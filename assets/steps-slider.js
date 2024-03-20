$('.steps-sliders').slick({
centerMode: false,
centerPadding: '00px',
slidesToShow: 1,
arrows: false,
dots: false,
autoplay:true,
autoplaySpeed:2500,  
responsive: [
{
breakpoint: 992,
settings: {
arrows: false,
dots: false,
centerMode: false,
centerPadding: '0px',
slidesToShow: 1
}
},
{
breakpoint: 749,
settings: {
arrows: false,
dots: false,
centerMode: false,
centerPadding: '0px',
slidesToShow: 1
}
},  
{
breakpoint: 480,
settings: {
arrows: false,
dots: false,
centerMode: false,
centerPadding: '0px',
slidesToShow: 1
}
}
]
});