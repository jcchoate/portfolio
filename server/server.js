const express = require('express');
const app = express();

app.use(express.json());

app.use( express.static( `${__dirname}/../build` ) )

app.listen(4000,()=>{
    console.log(`4100 tiny robots doing your bidding.`)
})