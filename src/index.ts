import express from 'express';
import connectDatabase from 'database/db';
import servosRoutes from 'routes/ServosRoutes'; 

const door: number = 3000; 
const app = express();

app.use(express.json());

app.use('/servos', servosRoutes);

connectDatabase();

app.listen(door, () => {
    console.log('Listening at port ' + door);
});
