import mongoose from "mongoose";
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@kodetritechnologies.o4cvr9a.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Kodetritechnologies`
);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("mongodb server is connected");
});

db.on("error", (err) => {
  console.log(err);
});

db.on("disconnected", () => {
  console.log("mongodb server is disconnected");
});

export default db;
