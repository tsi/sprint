S(imple )Print for Drupal 7
===========================

This module implements a simple method for having a printable version of your pages.

The concept is to create a printable version of your page on the client side, based on the original theme
by simply removing html blocks and adding some css.

Usage
-------

**opt 1.** via HTML/PHP - Simply add a link with a class "sprint" to your pages:
The 'data-sprint' attribute is a selector for your printable content, defaults to '#page'.
	
`<a href="#" class="sprint" data-sprint="#content">PRINT</a>`

or better -

`l(t('PRINT'), '#', array('attributes' => array('class' => array('sprint')), 'data-sprint' => '#content'));`


**opt 2.** via JS - Call it directly:

`$('#page').sprint();`
