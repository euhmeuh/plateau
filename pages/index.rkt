#lang racket/base

(provide index-page)

(require plateau/pages/base)

(define (index-page)
  (base-page "Plateau - Jeu de plateau partagé"
     (lambda ()
       `((h1 "Bienvenue")))))
