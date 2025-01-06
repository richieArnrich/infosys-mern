// create a database in mongodb
use("Infosys-MERN");

// create collection in mongodb
db.createCollection("users");

// insert into users collection
// db.users.insertOne({
//   _id: "user_01",
//   name: "John Doe",
//   email: "johndoe@example.com",
//   password: "password123",
//   role: "admin",
//   city: "Bangalore",
// });

// to insert more than one at a time:
// db.users.insertMany([
//   {
//     _id: "user_02",
//     name: "Jane Doe",
//     email: "janedoe@example.com",
//     password: "password123",
//     role: "admin",
//     city: "Bangalore",
//   },
//   {
//     _id: "user_03",
//     name: "John Smith",
//     email: "johnsmith@example.com",
//     password: "password123",
//     role: "user",
//     city: "Mumbai",
//   },
//   {
//     _id: "user_04",
//     name: "Jane Smith",
//     email: "janesmith@example.com",
//     password: "password123",
//     role: "user",
//     city: "Delhi",
//   },
//   {
//     _id: "user_05",
//     name: "John Johnson",
//     email: "johnjohnson@example.com",
//     password: "password123",
//     role: "data admin",
//     city: "Chennai",
//   },
//   {
//     _id: "user_06",
//     name: "Jane Johnson",
//     email: "janeyjohnson@example.com",
//     password: "password123",
//     role: "software engineer",
//     city: "Hyderabad",
//   },
// ]);

// to read from database
db.users.find();
