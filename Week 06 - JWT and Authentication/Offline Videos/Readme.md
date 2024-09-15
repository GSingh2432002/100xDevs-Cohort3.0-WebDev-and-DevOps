JWT consists of 3 things:-
1. Generate:- It is the process of creating a new JSON Web Token that contains a set of claims in its payload and is signed with a secret or private key. This ensures the token's integrity and authenticity when it is later decoded and verified by a recipient. With JWT generation, you create a secure token that clients like frontend app can use to authenticate and access protected resources on your server.
    1. Payload: Contains information about the user(userId and role). This data will be accessible in the token's payload once decoded.

    2. Secret Key: A key used to sign the JWT. The same key will be required to verify the token later.

    3. jwt.sign() Method:
        * Takes the payload and the secret key to create a token
        * The expiresIn option sets the token's expiration time. After this time, the token will be considered invalid.
    Eg:-
        Code:-
            ```javascript
            const jwt = require('jsonwebtoken');
            // Data to include in the JWT payload
            const payload = {
                userId: 123,
                role: 'admin'
            };

            // Secret key for signing the JWT
            const secretKey = 'your-256-bit-secret';

            // Generate the JWT
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

            console.log('Generated JWT:', token);
            ```

        Output:-
            ```
            eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIiwiaWF0IjoxNjI2MTUwMDAwLCJleHAiOjE2MjYxNTM2MDB9.wNSuNYgBXB5SLnrT-gDQXLD4nlwP_oG5sC-sv7IUlL0
            ```

2. Decoding:- Decoding a JWT means extracting the information stored in its payload without verifying the token's authenticity. In this case, jwt.decode() only extracts the payload but doesn't confirm whether the token has been tampered with. This is risky if used alone because you can't trust the token's authenticity.
    Eg:-
        Code:-
            ```javascript
            const jwt = require('jsonwebtoken');
            // Example JWT token
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

            // Decode the JWT (does NOT verify the signature)
            const decoded = jwt.decode(token);
            console.log(decoded);
            ```

        Output:-
            ```
            {
                "userId": 123,
                "role": "admin"
            }
            ```

3. Verifying:- Verifying a JWT checks the token's signature to ensure it was signed with the correct secret or public key. It confirms the integrity and authenticity of the token. Essential when you need to trust the information in the token, typically for authorization purposes.
    Eg:- 
        Code:-
            ```javascript
            const jwt = require('jsonwebtoken');
            // Example JWT token
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywicm9sZSI6ImFkbWluIn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

            // Secret used to sign the JWT
            const secret = 'your-256-bit-secret';

            // Verify the JWT
            jwt.verify(token, secret, (err, decoded) => {
                if (err) {
                    console.log('Invalid token:', err.message);
                } else {
                    console.log('Verified token:', decoded);
                }
            });
            ```

        Output:-
            if correct:
            ```
            {
                "userId": 123,
                "role": "admin",
                "iat": 1516239022
            }
            ```
            if not:
            ```
            Invalid token: invalid signature
            ```

Key Differences:-
- **Decoding:** Reads the token's payload without verifying its authenticity. Fast but insecure on its own.
- **Verifying:** Confirms the token's signature and integrity, ensuring it has not been tampered with. Essential for security.

### Try/Catch Block:-
The `try` statement allows you to check whether a specific block of code contains an error or not.

The `catch` statement allows you to display the error if any are found in the try block.
Eg:-
```javascript
function geekFunc() {
    let a = 10;
    try {
        console.log("Value of variable a is : " + a);
    }
    catch (e) {
        console.log("Error: " + e.description);
    }
}
geekFunc();
```
