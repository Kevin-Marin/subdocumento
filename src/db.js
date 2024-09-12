import mongoose from "mongoose";

const mongoDB =
  "mongodb+srv://admin:admin123@cluster0.r60c3.mongodb.net/";
const database = "armario";

const main = async () => {
  mongoose.connect(mongoDB + database);
};

main()
  .then(() => console.log(`Conectado ao db ${database} com sucesso!`))
  .catch((err) => console.log(err));

export default mongoose; // module.exports = mongoose

// import mongoose from "./mongoose"

// const mongoDB = "mongodb+srv://admin:admin123@cluster0.r60c3.mongodb.net/";
// const database = "armario";

// const main = async () => {
//   mongoose.connect(mongoDB + database);
// };

// main()
//   .then(() => console.log(`conectado ao db ${database} com sucesso`))
//   .catch((err) => console.log(err));

// export default mongoose;



