// A simple express server that uses Prisma to interact with a database and perform CRUD operations on it.
import { PrismaClient } from "@prisma/client";
import express from "express";

const client = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json(users);
})

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json(users);
})

async function readUser() {
    const user = await client.user.findFirst({
        where: {
            id: 7
        },
        include: {
            todos: true
        }
    });
    console.log(user);
}
readUser();

app.listen(3000);




// import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();

// async function createUser() {
  
//     await client.user.createMany({
//         data: [{
//             username: "Alice",
//             password: "1234",
//             age: 20,
//             city: "New York"
//         },
//         {
//             username: "Bob",
//             password: "12345",
//             age: 25,
//             city: "San Francisco"
//         }]
//     })
// }
// createUser();

// async function deleteUser() {
  
//     await client.user.delete({
//         where: {
//             id: 1
//         }
//     })
// }
// deleteUser();

// async function UpdateUser() {
  
//     await client.user.update({
//         where: {
//             id: 1
//         },
//         data: {
//             username: "GKSingh",
//         }
//     })
// }
// UpdateUser();

// async function readUser() {
//     const user = await client.user.findFirst({
//         where: {
//             id: 7
//         },
//         include: {
//             todos: true
//         }
//     });
//     console.log(user);
// }
// readUser();
