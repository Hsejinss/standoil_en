$(document).ready(function(){

    media();

    function media(){
        const ww = $(window).width();
        if(ww >= 1200){
            // sec-4 슬라이드 영역
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                slidesPerView: 'auto',
                // slidesPerView: 5,
                spaceBetween: 0,
                speed: 5000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false
                },
            });
        }
    }

    // sec-1 스크롤 영역
    // 스크롤할때 왼쪽 이미지 고정, 오른쪽 스크롤 활성화
    $(window).scroll(function(){
        const h = $(window).scrollTop();
        console.log(h);

        // 스크롤값이 1000px일때 왼쪽 이미지 고정, 오른쪽 스크롤 활성화
        const sec1 = $('.sec-1').offset().top;
        const sec2 = $('.sec-2').offset().top;
        const wh = $(window).height();

        const sct = $(window).scrollTop();
        if(sct >= sec1 && sct < sec2){
            $('.sec-1 .left-content .left-main').addClass('active');
        }else{
            $('.sec-1 .left-content .left-main').removeClass('active');
        }
    });

    // sec-3 data-alt 영역
    $('.sec-3 .sub-content-box .sub-pro').click(function(){
        // 하단 이미지 클릭시 상단이미지, 설명 변경
    
        var detail = $(this).attr('data-alt');
        $(`#${detail}`).siblings().removeClass('active');
        $(`#${detail}`).addClass('active');
    });



    // 상단이동 버튼
    const topbutton = $('.go-to-top');
    topbutton.click(function(){
        $('html, body').animate({
            scrollTop: 0
        });
    });
});