const express = require('express');
const hi  = require('./recurstion/sum_number_by_recursion')
const PORT = 3000;
const app = express();
app.use(express.json());
// app.use(cors({
//     origin: "*"
// }));
app.get("/",async (req,res) =>{
    console.log("Wellcome")
})
app.listen(PORT,()=>{
    console.log(`Server rnnimg on port ${PORT} !!!!!!!!`)
})

