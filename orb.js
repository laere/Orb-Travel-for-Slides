$(function() {
  function orbTravelRight() {
      $currentOrb = $('div.orb.select');
      var $nextOrb = $currentOrb.next();
      //if current selected orb is the last orb
      if($currentOrb.is(':last-child')) {
        //class is then added to the first orb
        $nextOrb = $('div.orb:first');
      }
      $currentOrb.removeClass('select');
      $nextOrb.addClass('select');
    }
    function orbTravelLeft() {
      $currentOrb = $('div.orb.select');
      var $prevOrb = $currentOrb.prev();
      //if current orb selected is the first orb
      if($currentOrb.is(':first-child')) {
        //class is then added to the last orb
        $prevOrb = $('div.orb:last');
      }
      $currentOrb.removeClass('select');
      $prevOrb.addClass('select');
    }
    //Left arrow click
    $('.fa-arrow-left').click(function() {
      orbTravelLeft();
    });
    //Right arrow click
    $('.fa-arrow-right').click(function() {
      orbTravelRight();
    });
  });
