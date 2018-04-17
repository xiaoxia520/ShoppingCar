$(function(){
    $(".shoppingcar").fullpage({
        sectionsColor: ["#f9dd67", "#84a2d4", "#ef674d", "#ffeedd", "#cf4759", "#85d9ed", "#8ac060", "#84d9ed"],
        navigation: true,
        afterLoad: function(anchor, index) {
            //移除所有css3的动画， 给当前屏添加css3的动画
            $(".section").removeClass("animate").eq(index-1).addClass("animate");

            //移除所有的js动画， 给当前屏添加js动画
            $(".section>div div, .section>div img").stop().attr("style", "");

            //如果是第二屏
            if (index == 2) {
                $(".section2 .search01").animate({marginLeft: -111}, 1000, "easeOutBack",  function(){
                    //右侧搜索框移到中间后隐藏
                    $(this).hide();
                    //中间搜索框显示出来， 并停顿0.5秒，再移动到右上角
                    $(".section2 .search02").show().delay(200).animate({marginLeft: 120, bottom: 449, height: 30}, 1000);

                    //沙发显示出来,要点， 就是固定住右下角（设right）
                    $(".section2 .sofas").delay(200).animate({opacity: 1, height: 218}, 1000);
                });
            }

            //如果是第四屏
            if (index == 4) {
                $(".section4 .carbox").animate({marginLeft: 1000}, 2000, "easeInElastic", function() {
                    $(".section4 .keyboard, .section4 .address").fadeIn();
                });
            }

            //如果是第六屏
            if (index == 6) {
                //1. 沙发的小盒子落下来
                $(".section6 .sofabox").animate({bottom: 100}, 2000, function() {
                    //2. 开车（街道的div在移动）
                    $(".section6 .street").animate({left: -1300, width: 3800}, 7000, function() {
                        //3. 停车后，车里下来两个男人（男人变大了）
                        $(".section6 .man").animate({width: 120}, 1000, function(){
                            //4. 男人下来之后，往女孩子家的方向移动
                            $(this).animate({right: -150}, 2000, function() {
                                //5. 开门
                                $(".section6 .door").show();
                                //6. 女人出门
                                // delay对于show是不生效的
                                $(".section6 .women").delay(500).fadeIn();
                                // setTimeout(function(){
                                //     $(".section6 .women").show();
                                // }, 500);
                            })
                        });
                    });
                });
            }

            //如果是第八屏
            if (index == 8) {
                var windowH = $(window).height();
                
                $(".section8").mousemove(function(event){
                    console.log("鼠标移动");
                    var x = event.pageX;
                    var y = event.pageY;
                    console.log(windowH);
                    console.log(y);
                    //算出bottom的值
                    var bottom = windowH - y - 449;
                    bottom = bottom > 0 ? 0 : bottom;
                    $(".section8 .hand").css({left: x-70, bottom: bottom});
                });

                $(".section8 .again").click(function(){
                    //alert("aaaa");
                    // fullPage插件调用方法的写法
                    $.fn.fullpage.moveTo(1);
                });
            }
        }
    });
});