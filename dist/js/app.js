let home = $('#home-carousel');
home.owlCarousel({
    loop: false,
    dots: true,
    nav: false,
    items: 1
});

function initialize_owl(el) {
    el.owlCarousel({
        loop: false,
        margin: 30,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
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


    // Normatividad dataTables
    $('#dataTable').DataTable(
        {
            "language": {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "Cargando...",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            "columnDefs": [
                { 
                    "targets": -1, // your case first column
                    "className": "text-center",
                    "searchable": false,
                    "orderable": false
                }
            ]

        }
    );

    // Viewport Checker
    $('.section').addClass("hide").viewportChecker({
        classToAdd: 'show',
        classToRemove: 'hide',
        offset: 50
    });
});

$(window).scroll(function() {    
    // get the amount the window has scrolled
    var scroll = $(window).scrollTop();
    // add the 'active' class to the correct li based on the scroll amount
    if (scroll > 200) {
        $(".navbar-primary").addClass("fixed-top");
    }else {
        $(".navbar-primary").removeClass("fixed-top");
    }
});

var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > 200 && st < lastScrollTop){
    $(".navbar-primary").addClass("fixed-top");
   }else{
       $(".navbar-primary").removeClass("fixed-top");
   }
   lastScrollTop = st;
   console.log(st);
});