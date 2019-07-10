document.ready( function () {
    document.getElementsByClassName( ".open" ).click( function () {
        document.getElementsByClassName( '.search_overlay' ).slideDown( 'slow' );
    } );
    document.getElementById( '#close_search' ).click( function () {
        document.getElementsByClassName( '.search_overlay' ).slideUp( 'slow' );
    } );
} );