//import '../node_modules/bootstrap/dist/js/bootstrap';
$('#home-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1
});

function initialize_owl(el) {
    el.owlCarousel({
        loop: true,
        margin: 15,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    });
}

function destroy_owl(el) {
    el.trigger("destroy.owl.carousel");
}

$(document).ready(function () {
    
    initialize_owl($('#services-1'));

    $('a[href="#gobierno"]').on('shown.bs.tab', function () {
        initialize_owl($('#services-1'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#services-1'));
    });

    $('a[href="#ciudadania"]').on('shown.bs.tab', function () {
        initialize_owl($('#services-2'));
    }).on('hide.bs.tab', function () {
        destroy_owl($('#services-2'));
    });
});