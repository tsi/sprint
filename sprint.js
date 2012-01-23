(function($) {
  
  Drupal.behaviors.simplePrint = {
    attach: function(context) {

      $('a.download').click(function(e) { // the link selector should be exposed to the user.

        // Prevent the link behaviour
        e.preventDefault();

        // Remove the link
        $(this).remove();

        // Add "print" body class so themes can easily add css rules to this process.
        $("body").addClass("print");

        // Remove everything but #page.
        $('body').html(
          $('#page').html() // todo: We should expose these selectors to the user.
        );

        // Add top toolbar.
        var bar = $('<div class="simple-print-bar" />')
          .prependTo('body')
          .append('<a href="#" class="print">' + Drupal.t('Send to printer') + '</a> ')
          .append('<a href="#" class="back">' + Drupal.t('Back to original post') + '</a> ');  
        
        $('html, body').animate({scrollTop:'0'}, 500);

        // We simply refresh to go back to the normal view.
        $('.simple-print-bar a.back').click(function() {
          location.reload();
        });

        // send-to-printer link
        $('.simple-print-bar a.print').click(function() {
          text=document;
          print(text);
        });

      });

    }
  
  };
  
})(jQuery);