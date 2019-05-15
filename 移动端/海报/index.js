var iNow = 1;
$(document).on('swipeUp',function(){
    // 当前图片滑上去  添加class"page-1 moveToTop"
    $('.page-'+iNow).attr("class","page-"+iNow+" moveToTop");
    // 下一张图从下滑出来
    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveFromBottom");
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hide');
        $('.page-'+iNow).children().addClass('hide');
        iNow++;
    }, 600);
});
$(document).on('swipeDown',function(){
    // 当前图片滑下
    $('.page-'+iNow).attr('class','page-'+iNow+" moveToBottom");
    // 上一张图滑下  
    $('.page-'+(iNow-1)).attr("class","page-"+(iNow-1)+" moveFromTop");
    setTimeout(function(){
        $('.page-'+(iNow-1)).children().removeClass('hide');
        $('.page-'+iNow).children().addClass('hide');
        iNow--;
    }, 600);
});