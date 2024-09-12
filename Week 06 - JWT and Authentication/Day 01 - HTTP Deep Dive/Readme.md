**What is Authentication?**

Authentication is the process of verifying the identity of a user, ensuring they are who they claim to be. This is typically achieved through the use of credentials, such as usernames and passwords. It involves letting users sign in/sign out of your website, ensuring that routes are protected, and that users can only access their own data and not data from other users.

**Why Use Authentication?**

Authentication is crucial for protecting sensitive information and restricting access to authorized users. By implementing authentication mechanisms, you can ensure that only authenticated users can access certain features or resources within your application.

**Authentication Workflow (Bank Example)**

When you go to open a bank account:
1. You go to the bank and provide your information.
2. The bank issues you a cheque book.
3. Every time you want to send money, you write it in the cheque book and send it to the bank.
4. This is how the bank identifies you.

**Authentication Workflow**

1. The user visits your website (e.g., `courses.com`).
2. The user sends a request to `/signin` with their username and password.
3. The user receives a token in response.
4. In subsequent requests, the user sends the token to identify themselves to the backend.

**What is Token Authentication?**

Token authentication works by generating a random string (token) for the user when they authenticate. The token is included in the HTTP Authorization header on each subsequent request and is validated by checking the database on each request. The benefit of token authentication is its simplicity, as it keeps user credentials secure. The credentials are only sent to the server once and are never stored or cached for future requests, ensuring their security.

**What is JWT Token (JSON Web Token)?**

JWT is a different approach that uses encryption and hashing techniques to validate the token instead of database checks. It starts similarly to token authentication:
1. The user sends their username and password, which are validated against the database.
2. Once validated, the server generates a token based on a secret key known only to the server.
3. The client includes this token in the HTTP headers of subsequent requests. The server validates it using the secret key without accessing the database.
4. The token usually converts to a JSON object with details about the authenticating user (typically a user ID), so the server can identify the user without querying the database.
5. Each token is valid for a fixed period, after which the server must use a refresh token to request a new one. This allows the server to block access if needed.

The benefit of JWT is that it is more scalable, requiring fewer database hits. However, it is more complex to implement.

**Tokens vs. JWTs**

Stateful tokens require storing token data in a variable or database. This necessitates a database request every time the user accesses an authenticated endpoint, leading to potential inefficiencies.

**JWTs** are compact and self-contained, representing information between two parties. They are stateless, containing all the information needed to authenticate a request within the token itself. This means the server does not need to store session data, as all necessary data is included in the token.
