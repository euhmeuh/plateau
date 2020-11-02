let Plateau = (function() {
  function makeDraggable(elt, ondown, onmove, onup) {
    let init_pos = [0,0]
    elt.onmousedown = startDrag;

    function startDrag(e) {
      e = e || window.event;
      e.preventDefault();

      if(ondown) { ondown(elt) }

      init_pos = [e.clientX, e.clientY]
      document.onmousemove = drag;
      document.onmouseup = stopDrag;
    }

    function drag(e) {
      e = e || window.event;
      e.preventDefault();

      if(onmove) { onmove(elt) }

      dx = init_pos[0] - e.clientX;
      dy = init_pos[1] - e.clientY;
      init_pos = [e.clientX, e.clientY]

      elt.style.left = (elt.offsetLeft - dx) + "px";
      elt.style.top = (elt.offsetTop - dy) + "px";
    }

    function stopDrag() {
      document.onmouseup = null;
      document.onmousemove = null;

      if(onup) { onup(elt) }
    }
  }

  function setupGame(game) {
    let gameRoot = document.getElementById('game');
    Object.entries(game.zones).forEach(([name, zone]) => {
      zoneElt = Page.createElementFromJson({
        tag: 'div',
        attrs: { id: name, class: zone.type },
      });
      if (zone.cards) {
        let len = zone.cards.length;
        zone.cards.forEach((c, i) => {
          cardElt = Page.createElementFromJson({
            tag: 'div',
            text: c.name,
            attrs: { class: 'card', style: `z-index: ${i}; top: ${len-i}px` }
          });
          zoneElt.appendChild(cardElt);
        })
      }
      gameRoot.appendChild(zoneElt);
    });
  }
  
  return { setupGame: setupGame, makeDraggable: makeDraggable };
})();
