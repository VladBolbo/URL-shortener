const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;
require('dotenv').load();

app.use(bodyParser.json());

router.get('/', (err, data) => {
    res.send('Survive');
})

app.use('/app', router);

app.listen(port, console.log(`Listening on port ${port}`));