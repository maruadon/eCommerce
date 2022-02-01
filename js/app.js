$(document).ready(function () {
    $('.slider').slick({
      arrows: false,
      dots: true,
      appendDots:'.slider_dots',
      // slider_dots class e paste kore dilo plugin er code
      fade:true
      
    });  

    $('.slider2').slick({
      arrows: false,
      dots:true,
      slidesToShow:3,
      slidesToscroll:1,
      centerMode:true,
      autoplay:true,
      appendDots:'.slider2-dots', 
    }); 
    
});

const triggers = document.querySelectorAll('.menu-trigger');

for(let i = 0;i<triggers.length;i++){
  triggers[i].addEventListener('click',function(e){
    e.preventDefault();
    // default action of click on any link is disabled
    this.classList.toggle('is-open')
    //we will add color for the class is-open after clicked one
  });
}
