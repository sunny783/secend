$(function() {
    $('.fast').on("tap", function() {

        $('.input2').show();
        $('.input1').hide();
        $('.fast').css('border-bottom', ' .3rem solid #ff8a00');
        $('.normal').css('border-bottom', ".3rem solid #d1d1d1")
    })
    touch.on($('.normal'), "tap", function() {

        $('.input1').show();
        $('.input2').hide();
        $('.normal').css('border-bottom', ' .3rem solid #ff8a00');
        $('.fast').css('border-bottom', ".3rem solid #d1d1d1")
    })
})