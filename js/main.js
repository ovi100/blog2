/*------------------------------------
 *Author:MD ABU SAYED
 *Template:Blog Theme 2
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	$(window).scroll(function(){
	    if ($(this).scrollTop()>150){
	      // $('.menu').addClass('fixed-menu');
	      
	    } 
	    else {
	      // $('.menu').removeClass('fixed-menu');
	    }
  	});

  	// if ($(window).width()<768){
   //    $('.col-logo').addClass('order-12');
   //    $('.col-icon').addClass('order-1');
      
   //  } 
   //  else {
   //    $('.col-logo').removeClass('order-12');
   //    $('.col-icon').removeClass('order-1');
   //  }


   // Home Slider

    $('#main-slider').owlCarousel({
    	autoplay:true,
    	autoplayHoverPause:true,
    	dots:false,
    	items:2,
	    loop:true,
	    margin:0,
	    nav:true,
	    navText:['<i class="icofont">rounded_left</i>','<i class="icofont">rounded_right</i>'],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        768:{
	            items:2
	        }
	    },
	    slideBy:2
	})


});


// Header Sidebar

$(function(){

	$(".header-left-icon .header-sidebar .sidebar-body").hide();

	$(document).on('click', '.header-left-icon .header-sidebar .btn-sidebar', function() {
		$(".header-left-icon .header-sidebar .sidebar-body").fadeIn();
		$(".header-left-icon .header-sidebar").addClass('active');
		$(".header-left-icon .header-sidebar .btn-sidebar").addClass('active');
	});

	$(document).on('click', '.header-left-icon .header-sidebar .sidebar-body .close', function() {
		$(".header-left-icon .header-sidebar .sidebar-body").fadeOut();
		$(".header-left-icon .header-sidebar").removeClass('active');
		$(".header-left-icon .header-sidebar .btn-sidebar").removeClass('active');
	});

});


  
