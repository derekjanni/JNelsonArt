$(document).ready(function() {
    //
    //
    // MOBILE MENU LOGIC 
    // only for mobile
    //
    //
    var navIcon = $('.menu-icon');
    var navUL = $('.nav').find('ul');
    var navLI = navUL.find('li');

    // toggles menu on .menu-icon click in DOM
    navIcon.on('click', function() {
        navUL.slideToggle();
    });

    //closes menu on menu li if .menu-icon is visible
    if (navIcon.css('display') === 'block') {

        // hides menu on page ready
        navUL.css('display', 'none');

        navLI.on('click', function() {
            navUL.slideUp();
            console.log('triggered');
        });
    }


    //
    //
    // FAKE MODAL SECTION
    // (used in about page and art grid)
    //
    //
    $('.fake-modal').hide();

    var fakeModalOpen = function() {
        $('.fake-modal').fadeIn();
        $('.fake-modal').addClass('active');
    };
    var fakeModalClose = function() {
        $('.fake-modal .background').on('click', function() {
            $('.fake-modal').fadeOut();
        });
    };
    var openModalTrigger = function() {
        $('a').on('click', function() {
            if ($(this).data('modal') === 'fake-modal') {
                fakeModalOpen();
            }
        });
    };
    
    openModalTrigger();
    fakeModalClose();

    //
    //
    // MOBILE TAP LOGIC 
    // used for home and serie pages
    // where hover is used in desktop version
    //
    //

});