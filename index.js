const express = require('express');

const app = express();

// function rootTree (req, res) {
//     res.send('think you very much')
// };

app.get('/',(req, res)=> res.send('think you very much'))

app.listen(3000, () => console.log('this is my local host'));