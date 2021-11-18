import express,{Application} from 'express';
require('dotenv').config();


const app:Application=express();
const port = process.env.PORT||5000;



app.set('view engine', 'ejs');
app.use(cors())
app.use('/api/range',require('./api/range'))

app.use('/**', (req,res)=>{
    res.status(404).send("Api your searching for is not avail...")
})

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
});


