What is Middleware?
Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

    Middleware functions can perform the following tasks:-

        * Execute any code.
        * Make changes to the request and the response objects.
        * End the request-response cycle.
        * Call the next middleware in the stack.
        
        If the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.
            Eg:-
                const express = require('express')
                const app = express()

                const myLogger = function (req, res, next) {
                console.log('LOGGED')
                next()
                }

                app.use(myLogger)

                app.get('/', (req, res) => {
                res.send('Hello World!')
                })

                app.listen(3000)