// scroll de la paginación
$(function(){
    $('a').click(function(event) {
        // alert(this.hash) // obtiene #
        if (this.hash !== '') {
            // no se ejecute el evento por defecto
            event.preventDefault()
            var gato = this.hash
            // scrollTop, método con animación
            $('html, body').animate({
                // offset, método donde se ubica
                scrollTop: $(gato).offset().top
            }, 800, function() {
                // function, para buscar el gato del id
                window.location.hash = gato
            })
        }
    })
    // usar popover
    $('[data-toggle="popover"]').popover()
})