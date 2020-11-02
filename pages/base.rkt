#lang racket/base

(provide base-page)

(define (base-page title renderer [scripts '()])
  `(html ([lang "fr"])
     (head
       (meta ([charset "utf-8"]))
       (title ,title)
       (link ([rel "stylesheet"] [type "text/css"] [href "/common.css"])))
     (body
       ,@(renderer)
       (script ([type "text/javascript"] [src "/rilouweb/_.js"]))
       (script ([type "text/javascript"] [src "/rilouweb/page.js"]))
       ,@scripts
       )))
