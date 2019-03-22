var iNow = 1;

$(document).on('swipeUp',function(){
    $('.page'+iNow).attr('class','page-'+iNow+'moveToTop');
    $('.page'+(iNow+1)).attr('class','page-'+(iNow+1)+' moveFormBottom')

    setTimeout(function(){
        $('.page'+(iNow+1)).children().removeClass('hide');
        iNow++;
    },600); 
});
