console.log('aaaaaaaaaaaaaaaaaaaaaaaaa');
jQuery(document).ready(function() {

       // STICKY HEADER
       jQuery(window).scroll(function() {
           if (jQuery(this).scrollTop() > 0){ // 75 is the height of contact-container
               jQuery('.l-header').removeClass("scroll");
           }
           else{
               jQuery('.l-header').addClass("scroll");
           }
       });
});
