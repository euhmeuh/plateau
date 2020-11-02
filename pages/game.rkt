#lang racket/base

(provide game-page)

(require plateau/pages/base)

(define (game-page game)
  (base-page
    "Plateau - Jeu de plateau partagé"
    (lambda ()
      `((div ([id "game"])
          (div ([class "cursors"])
            (div ([id "player-cursor1"] [class "cursor cursor-red"]))
            (div ([id "player-cursor2"] [class "cursor cursor-green"]))
            (div ([id "player-cursor3"] [class "cursor cursor-blue"]))
            (div ([id "player-cursor4"] [class "cursor cursor-cyan"]))
            ))))
    '((script ([type "text/javascript"] [src "/plateau.js"]))
      (script ([type "text/javascript"] [src "/game.js"])))
    ))
