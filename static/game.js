function onCardGrabbed() {}
function onCardMoved() {}
function onCardDropped() {}

Page.onload(() => {
  Plateau.setupGame({
    zones: {
      board: { type: 'board', borders: '#F00' },
      deck: {
        type: 'deck',
        color: '#000',
        cards: [
          { name: 'As de Trèfles' },
          { name: 'Roi de Trèfles' },
          { name: 'Dame de Trèfles' },
          { name: 'Valet de Trèfles' },
          { name: '10 de Trèfles' },
          { name: '9 de Trèfles' },
          { name: '8 de Trèfles' },
          { name: '7 de Trèfles' },
          { name: '6 de Trèfles' },
          { name: '5 de Trèfles' },
          { name: '4 de Trèfles' },
          { name: '3 de Trèfles' },
          { name: '2 de Trèfles' },
          { name: 'As de Coeurs' },
          { name: 'Roi de Coeurs' },
          { name: 'Dame de Coeurs' },
          { name: 'Valet de Coeurs' },
          { name: '10 de Coeurs' },
          { name: '9 de Coeurs' },
          { name: '8 de Coeurs' },
          { name: '7 de Coeurs' },
          { name: '6 de Coeurs' },
          { name: '5 de Coeurs' },
          { name: '4 de Coeurs' },
          { name: '3 de Coeurs' },
          { name: '2 de Coeurs' },
          { name: 'As de Piques' },
          { name: 'Roi de Piques' },
          { name: 'Dame de Piques' },
          { name: 'Valet de Piques' },
          { name: '10 de Piques' },
          { name: '9 de Piques' },
          { name: '8 de Piques' },
          { name: '7 de Piques' },
          { name: '6 de Piques' },
          { name: '5 de Piques' },
          { name: '4 de Piques' },
          { name: '3 de Piques' },
          { name: '2 de Piques' },
          { name: 'As de Carreaux' },
          { name: 'Roi de Carreaux' },
          { name: 'Dame de Carreaux' },
          { name: 'Valet de Carreaux' },
          { name: '10 de Carreaux' },
          { name: '9 de Carreaux' },
          { name: '8 de Carreaux' },
          { name: '7 de Carreaux' },
          { name: '6 de Carreaux' },
          { name: '5 de Carreaux' },
          { name: '4 de Carreaux' },
          { name: '3 de Carreaux' },
          { name: '2 de Carreaux' },
        ]
      },
      stack: { type: 'stack' },
      pile: { type: 'pile' },
      player1: { type: 'hand' },
      player2: { type: 'hand' },
      player3: { type: 'hand' },
      player4: { type: 'hand' }
    }
  });
  Page.getAll('.card').forEach(
    (e) => Plateau.makeDraggable(e, onCardGrabbed, onCardMoved, onCardDropped)
  );
});
