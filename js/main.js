 $(document).ready(function(e) {
   
    $('.menu-toggle').click(function(){
	  $('.main-menu').slideToggle(); 
	 });


  $('.accordian > div h5').click(function() {
            if (!$(this).next().is(':visible')) {
                $('.accordian .drop').slideUp(400);
                $('.accordian > div').removeClass('active');
                $(this).next().slideDown(400);
                $(this).parent().addClass('active');
            }
            else {
                 $('.accordian .drop').slideUp(400);
                 $('.accordian > div').removeClass('active');
            }
            return false;
     });





$('.write_review-btn').click(function(e){
  e.preventDefault();
  $('.light-box').show();
   $('.store_complaints').fadeOut();
  $('.vendor-item').find('.light-box').hide();
  $('.product-item').find('.light-box').hide();
  $('body,html').scrollTop(0);
})



$('.vendor-item').each(function(){
$(this).children('.details').click(function(){
 $(this).next('.light-box').show();
  $('body,html').scrollTop(0);
})
})
$('.product-item').each(function(){
$(this).children('.deal-box-wrap').click(function(){
 $(this).next('.light-box').show();
  $('body,html').scrollTop(0);
})
})

$('.deal-item').click(function(){
 $('.light-box').fadeIn();
$('body,html').scrollTop(0);
})
$('.overlay,.close').click(function(){
 $('.light-box').fadeOut(); 
})
   
$('#store_complaints').click(function(e){
  e.preventDefault();
 $('.store_complaints').fadeIn();
$('body,html').scrollTop(0);  
})
   

$('#vendor_shp_tab').click(function(e){
    e.preventDefault();
  $('.tabbing > div').hide();
  $('.vendor_shp_tab_content').show();
})

$('#locatiion_tab').click(function(e){
    e.preventDefault();
  $('.tabbing > div').hide();
  $('.location_tab_content').show();
})

$('#pop_deals_tab').click(function(e){
    e.preventDefault();
  $('.deals-view-tabbing > div').hide();
  $('.pop_deals_tab_content').show();
})
$('#pop_view_review_tab').click(function(e){
    e.preventDefault();
  $('.deals-view-tabbing > div').hide();
  $('.review-listing-box').show();
})

   $('.controlls-options-head .field').each(function(index){
   $(this).click(function(){
    if ($(this).find('input').is(':checked')) {
       $(this).find('input').prop('checked', false);
     if($(this).index() == '0'){
        $('.vendors-listing-box').hide();
     }     
     if($(this).index() == '1'){
        $('.product-listing-box').hide();
     }     
    } else {
      $('.controlls-options-head .onoffswitch').find('input').prop('checked', false);
     if($(this).index() == '0'){
        $('.vendors-listing-box').show();
       $('.product-listing-box').hide();
     }else{
        $('.product-listing-box').show();
       $('.vendors-listing-box').hide();            
      }     
       $(this).find('input').prop('checked', true);
    }
  })
});

   $('.controlls-options-head .field').each(function(index){
     if ($(this).find('input').is(':checked')) {
       $(this).find('input').prop('checked', false);
     if($(this).index() == '0'){
        $('.vendors-listing-box').hide();
     }     
     if($(this).index() == '1'){
        $('.product-listing-box').hide();
     }     
    } else {
      $('.controlls-options-head .onoffswitch').find('input').prop('checked', false);
     if($(this).index() == '0'){
        $('.vendors-listing-box').show();
       $('.product-listing-box').hide();
     }else{
        $('.product-listing-box').show();
       $('.vendors-listing-box').hide();            
      }     
       $(this).find('input').prop('checked', true);
    }
 });

if($(window).width() < 639){
  $('.site-footer h4').click(function() {
            if (!$(this).next().is(':visible')) {
                $('.site-footer .footer-menu').slideUp(400);
                $('.site-footer > div').removeClass('active');
                $(this).next().slideDown(400);
                $(this).parent().addClass('active');
            }
            else {
                 $('.site-footer .footer-menu').slideUp(400);
                 $('.site-footer > div').removeClass('active');
            }
            return false;
     });
}




$('input, textarea').placeholder({customClass:'my-placeholder'});


$('.slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  autoplay:true,
  slidesToShow: 1,
  adaptiveHeight: true
});
				


$('.responsive').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



	
}); 	