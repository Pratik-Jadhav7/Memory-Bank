import  express  from "express";
import bodyParser from "body-parser";
import mongoose, { mongo } from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();



app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true})); 
 app.use(cors());

 app.use('/posts', postRoutes);

 const CONNECTION_URL = 'mongodb+srv://Pratik123:Satara123@cluster0.qenc7s3.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('Server running on port: 3000'))) 
.catch((error) => console.log(error.message));

