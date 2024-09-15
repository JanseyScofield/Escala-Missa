import express from 'express';
import connectDatabase from 'database/db';

const door : Number = 3000;
const app = express();
const servosRoutes = require('routes/ServosRoutes.ts');

app.use('/servos',servosRoutes);

connectDatabase()
app.listen(door,() =>{
    console.log('Listen at the door ' + door);
});
