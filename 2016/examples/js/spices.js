// Flip the cards over
// --------------------------------------------------------------------
// This adds a 'flip' class to things marked with 'hover' when someone is hovering.
// It's used on the People page to make photo cards flip over.
// This javascript was snagged from http://css3playground.com/flip-card.php
// Thanks Chris Ruppel, http://chrisruppel.com

// --------------------------------------------------------------------



  $(document).ready(function(){

    // set up hover panels
    // although this can be done without JavaScript, we've attached these events
    // because it causes the hover to be triggered when the element is tapped on a touch device
    $('.hover').hover(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });

    // set up click/tap panels
    $('.click').toggle(function(){
      $(this).addClass('flip');
    },function(){
      $(this).removeClass('flip');
    });

  });
