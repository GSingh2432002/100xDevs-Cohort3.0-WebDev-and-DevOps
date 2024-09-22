# What are Databases?

Databases are organized collections of data that are structured to enable efficient storage, retrieval, and management of information.

## Types of Databases

1. **Relational Databases**: Use tables to store data and relationships between data.
2. **NoSQL Databases**: Designed for more flexible data models and often used for big data or real-time web applications.
3. **Graph Databases**: Store data in nodes and edges to represent relationships.
4. **Vector Databases**: Used in ML to store data in the form of embeddings.

## SQL vs NoSQL

### SQL

1. Relational Database Management System
2. These databases have fixed or static or predefined schema
3. These databases are not suited for hierarchical data storage
4. These databases are best suited for complex queries
5. Vertically Scalable
6. Follows ACID property

### NoSQL

1. Non-relational or distributed database system
2. They have a dynamic schema
3. These databases are best suited for hierarchical data storage
4. These databases are not so good for complex queries
5. Horizontally Scalable
6. Follows CAP

## MongoDB and NoSQL Databases

NoSQL databases are a broad category of database systems that diverge from the traditional relational model used in SQL databases. They are designed to handle a variety of data models and workloads that may not fit neatly into the tabular schema of relational databases.

### Properties

- **Schema Flexibility**: NoSQL databases often allow for a flexible schema, meaning you can store data in formats that don't require a fixed structure.
- **Scalability**: Many NoSQL databases are designed to scale out horizontally, making it easier to distribute data across multiple servers and handle large volumes of traffic.

### MongoDB

MongoDB is a NoSQL database that uses a document-oriented approach. Data is stored in flexible, JSON-like documents, which can have nested structures and varied fields.

## What is Mongoose?

Mongoose is an object modeling tool for MongoDB and Node.js. In practical terms, it means you can define your data model in just one place, in your code. It allows defining schemas for your data to fit into while abstracting the access to MongoDB. This way, you can ensure all saved documents share a structure and contain required properties.

### Collection

Collections are like tables in relational databases; they also store data but in the form of documents. A single database is allowed to store multiple collections.

### Schema

A schema is a description of the data structure. It is like a blueprint for the document in each collection. It defines what fields each document should contain, the data types, whether the field is required or not, the length of each field, and so on.

#### Creation of Schema

You create a schema using the `mongoose.Schema()` function, which accepts an object where you define each field of the document along with its data type. You create a model based on the schema. A model is what actually interacts with the database and represents a MongoDB collection with all the operations that can be performed on that collection.

```javascript
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
const User = mongoose.model("User", userSchema);
module.exports = User;
```

## Model

A model is a primary tool for interacting with MongoDB. It is a fancy constructor for a document. Models are responsible for creating and reading documents from the underlying MongoDB database.

### Example

```javascript
const UserModel = mongoose.model('User', userSchema);
const doc = new UserModel({
    name: 'Jean-Luc Picard',
    age: '59' // Mongoose will convert this to a number
});
doc.age; // 59
await doc.save();
// Mongoose will convert '60' from a string to a number, even in an update
await UserModel.updateOne({}, { $set: { age: '60' } });
```

## What are "_id" and "__v" Fields in MongoDB?
Both fields are automatically created by MongoDB.
- **_id**: This field is used to uniquely identify the document.
- **__v**: This field is used to track the version of the document. Whenever the document is updated, the version is incremented; by default, it is 0.
