const express = require('express');
const app = express();
const PORT = 1234;

app.use(express.static('../react-hyf-client/build'));

app.get('/', function (req, res) {
    res.sendFile(path.join('../react-hyf-client', '/index.html'));
});

app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});
