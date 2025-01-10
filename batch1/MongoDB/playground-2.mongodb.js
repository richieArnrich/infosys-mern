use("Infosys-MERN");

db.getCollectionNames();

// db.users.find();
// fetch data of user id 3
// db.users.find({ _id: "user_03" });

// fetch data of users whose names start with j
// db.users.find({ name: { $regex: /^j/, $options: "i" } });

// update the email of the user with id 3 as gomes@example.com
// db.users.updateOne(
//   { _id: "user_03" },
//   { $set: { email: "gomes@example.com" } }
// );

// delete the user with user id 02
// db.users.deleteOne({ _id: "user_02" });
// db.users.find();

// rename users collection to employees
// db.users.renameCollection("employees");
