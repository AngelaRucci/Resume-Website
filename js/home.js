/**
 * Created by angelarucci on 11/12/16.
 */
/*Navigation Scroll*/
function goToByScroll(id){
    if ($('#wrapper').hasClass('toggled')){
        hamburger_cross();
        $('#wrapper').removeClass('toggled')
    }
    id = id.replace("link", "");
    $('html,body').animate({
            scrollTop: $("."+id).offset().top}, 'slow');

}

$(".sidebar-nav > ul > li > a").click(function(e) {
    e.preventDefault();
    goToByScroll(this.id);
});

/*MENU*/
var trigger = $('.hamburger'),
    overlay = $('.overlay'),
    isClosed = false;

trigger.click(function () {
    hamburger_cross();
});

function hamburger_cross() {

    if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
    } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
    }
}

$('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
});

/*Sent Contact Form*/
var $contactForm = $('#form');
$contactForm.submit(function(e) {
    e.preventDefault();
    $.ajax({
        url: 'https://formspree.io/angelanrucci@icloud.com',
        method: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: function(data) {
            $("#success").show().delay(5000).fadeOut();
        }
    });
});