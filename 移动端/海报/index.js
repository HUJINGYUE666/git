var iNow = 1;
$(document).on('swipeUp',function(){
    // 当前图片 滑上去   添加class "page-1 moveToTop"
    $('.page-'+iNow).attr("class","page-"+iNow+" moveToTop");
    // 找到下一张图 从下边滑出来   "page-2 moveFromBottom"(iNow+1)
    $('.page-'+(iNow+1)).attr("class","page-"+(iNow+1)+" moveFromBottom");
    setTimeout(function(){
        $('.page-'+(iNow+1)).children().removeClass('hide');
        $('.page-'+iNow).children().addClass('hide');
        iNow++;
    }, 600);
});
$(document).on('swipeDown',function(){
    // 当前图片 滑下去   
    $('.page-'+iNow).attr('class','page-'+iNow+" moveToBottom");
    // 上一张图 滑下去    
    $('.page-'+(iNow-1)).attr("class","page-"+(iNow-1)+" moveFromTop");
    setTimeout(function(){
        $('.page-'+(iNow-1)).children().removeClass('hide');
        $('.page-'+iNow).children().addClass('hide');
        iNow--;
    }, 600);
});