(function($) {

// === S(imple)Print ===
//
// This script will create a printable version of a page.
//
// Usage:
// a. Add a link to your page :
//
//    <a href="#" class="sprint" data-sprint="#content">PRINT</a>
//
//    note: data-sprint attribute is a selector for your printable content.
//          defaults to '#page'.
//
// b. Call it directly:
//
//    $('#page').sprint();

  $.fn.extend({
    sprint: function() {

      // Add 'print' class for easier print styling.
      $("body").addClass("print");

      // Printable content.
      var printContent = $(document.createElement('div'));
      $(this).each(function() {
        $(this).appendTo(printContent);
      });
      if (printContent.length) {
        $('body').html(printContent);
      }

      // Add top toolbar.
      var bar = $('<div class="simple-print-bar" />')
        .append('<a href="#" class="print">' + Drupal.t('Send to printer') + '</a> ')
        .append('<a href="#" class="back">' + Drupal.t('Back to original post') + '</a> ')
        .hide().prependTo('body').slideDown();
      
      $('html, body').animate({scrollTop:'0'}, 500);

      // We simply refresh to go back to the normal view.
      $('.simple-print-bar a.back').click(function() {
        location.reload();
      });

      // send-to-printer link.
      $('.simple-print-bar a.print').click(function() {
        text=document;
        print(text);
      });

    }
  });


  Drupal.behaviors.simplePrint = {
    attach: function(context) {

      $('a.sprint').click(function(e) {

        // Prevent the link behaviour.
        e.preventDefault();

        // The 'data-sprint' attribute can set the printable content wrapper.
        var wrap = $(this).attr('data-sprint') || '#page';
        $(wrap).sprint();

      });

    }
  };
})(jQuery);
