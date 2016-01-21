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

    var fakeModal = $('.fake-modal').add('.fake-modal-art');

    fakeModal.hide();

    var fakeModalOpen = function(modalName) {
        var modalName = '.' + modalName;
        $(modalName).fadeIn();
    };
    var fakeModalClose = function() {
        fakeModal.find('.background').on('click', function() {
            fakeModal.fadeOut();
        });
    };
    var fakeModalTrigger = function() {
        $('a').on('click', function() {
            
            var modalName = $(this).data('modal');

            if (modalName) {
                console.log(modalName);
                fakeModalOpen(modalName);
            }
        });
    };
    
    fakeModalTrigger();
    fakeModalClose();

    //
    //
    // MOBILE TAP LOGIC 
    // used for home and serie pages
    // where hover is used in desktop version
    //
    //

});