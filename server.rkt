#lang racket/base

(require
  net/url
  web-galaxy/response
  web-galaxy/serve
  plateau/pages/index
  plateau/pages/game
  )

(define static-root-path
  (path->string (build-path (current-server-root-path) "static")))

(define-response (index)
  (response/page (index-page)))

(define-response (game id)
  (define game #f)
  (response/page (game-page game)))

(define-response (join-game id)
  (response/page '(p "Vous avez rejoint la partie")))

(define-response (api)
  (response/json #hash()))

(define-response (api-game id)
  (response/json #hash()))

(define-response (not-found)
  (response/xexpr
    #:code 404
    #:message #"Not found"
    #:preamble #"<!DOCTYPE html>"
    '(p "Not found")))

(define (response-error url exception)
  (log-error "~s" `((exn ,(exn-message exception))
                    (uri ,(url->string url))
                    (time ,(current-seconds))))
  (response/json
    #:code 500
    #:message #"Internal server error"
    #:preamble #"<!DOCTYPE html>"
    '(p "Internal server error")))

(server-command-line)

(parameterize ([current-server-static-paths (list static-root-path)]
               [current-not-found-responder response-not-found]
               [current-error-responder response-error])
  (serve/all
    [GET ("") response-index]
    [GET ("game" (integer-arg)) response-game]
    [POST ("game" (integer-arg)) response-join-game]
    
    [GET ("api") response-api]
    [GET ("api" "game" (integer-arg)) response-api-game]
    ))
