const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.send('<h1>GUNEY URAL</h1><br><h3>South side of the internet.</h3>');
});

app.listen(3000,()=>{
	console.log('We are going live on port 3000');
});
