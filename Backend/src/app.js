import express, { json } from 'express';
import aiRoutes from '../src/routes/ai.routes.js'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send("Server is connected!");
})

app.use('/ai', aiRoutes)
export default app 
