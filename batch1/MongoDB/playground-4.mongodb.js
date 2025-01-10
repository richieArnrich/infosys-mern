use("Infosys-MERN");

// write an aggregation function to display details  of department with id dept_01

// db.departments.find();

// db.departments.aggregate([
//   {
//     $match: {
//       _id: "dept_01",
//     },
//   },
// ]);

// write an agg func to display the details of manager of the dept dept_01
db.departments.aggregate([
  {
    $match: {
      _id: "dept_01",
    },
  },
  {
    $lookup: {
      // capture details from another collection
      from: "managers",
      localField: "manager",
      foreignField: "_id",
      as: "manager_details",
    },
  },
  {
    $unwind: "$manager_details",
  },
]);
