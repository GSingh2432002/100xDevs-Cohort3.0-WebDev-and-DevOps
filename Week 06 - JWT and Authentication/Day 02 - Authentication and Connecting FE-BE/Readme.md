# JWTs and Their Security

JWTs can be `Decoded` by anyone. They can be verified by only the server that issued them.

## Example: Comparing JWTs to a Cheque

If you ever sign a `cheque`, you can show it to everyone, and everyone can see that you are transferring 20 INR to a friend. But only the bank needs to verify it before debiting the user's account.

It doesn't matter if everyone sees the cheque; they can't do anything with this information. However, the bank can verify the signature and act according to the end user's request.

Similarly, JWTs can be decoded by everyone, but they can only be verified by the person who issued them using `JWT_SECRET`.
