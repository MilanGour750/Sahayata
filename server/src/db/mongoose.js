const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const URI = "mongodb+srv://milangour97521:admin4sahayata@clustersahayata.0fl5j.mongodb.net/"
const connect = async ()=>{
	try {
		await mongoose.connect(URI);
		console.log("connect ed dB );")
	} catch (error) {
		console.log(error)
	}
}

module.exports = connect;

// mongoose
// 	.connect("mongodb+srv://raj:raj@suvidha.nuo4a97.mongodb.net/?retryWrites=true&w=majority&appName=suvidha", {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 		autoIndex: true, // helpes to get rid of unique property problem in mongoose schema
// 		useCreateIndex: true,
// 	})
// 	.then(() => console.log(`Main Database connected successfully`))
// 	.catch((err) => console.log(err));

	// const db ='mongodb://localhost:27017/worklinkdb'
	// mongoose.connect(db,  {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true,
	// 	useCreateIndex: true
	// }).then(() => console.log('MongoDB Connected....'))
	// .catch(err => console.log(err));

// const connect = async(uri)=>
// {
// 	console.log(uri);
// 	try
// 	{
// 	mongoose.connect(uri)
// 	}
// 	catch(err)
// 	{
// 		console.log("cpnnection error in Db")
// 	}
// }

// module.exports = connect