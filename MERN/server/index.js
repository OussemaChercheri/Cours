import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import morgan from 'morgan';
import clientRoutes from './routes/client.js';
import generalRoutes from './routes/general.js';
import managementRoutes from './routes/management.js';
import salesRoutes from './routes/sales.js';

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* MONGOOSE SETUP */
const MONGODB_URI = process.env.MONGODB_URI; // Set your MongoDB URI in the .env file
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 9000;
        app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
})
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);
