$document.scroll(function() {
    $(".ofertas").toggleClass(ofertas-scroll, $document.scrollTop() >= 50);
  });