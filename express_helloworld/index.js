const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>
    res.send('Hello World!')
);

app.get('/now', (req, res) =>
    res.send(new Date().toString())
);

app.get('/zli', (req, res) =>
    res.redirect('https://www.zli.ch')
);

app.get('/name', (req, res) => {
    const name = [
        "Andreas",
        "Bettina",
        "Christian",
        "Doris",
        "Erich",
        "Frieda",
        "Gustav",
        "Hans",
        "Ingrid",
        "Johann",
        "Karl",
        "Ludwig",
        "Maria",
        "Nikolaus",
        "Otto",
        "Paul",
        "Quirin",
        "Rudolf",
        "Stefan",
        "Theodor",
        "Ulrich",
        "Viktor",
        "Walter",
        "Xaver",
        "Yvonne",
        "Zacharias"
    ];
    const randomName = name[Math.floor(Math.random() * name.length)];
    res.send(randomName);
});

app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/image', (req, res) => {
    res.sendFile(__dirname + '/image.jpg');
});

app.get('/teapot', (req, res) => {
    res.status(418).send('I am a teapot');
});

app.get('/user-agent', (req, res) => {
    res.send(req.headers['user-agent']);
});

app.get('/secret', (req, res) => {
    res.status(403).send('You are not authorized to access this page');
});

app.get('/xml', (req, res) => {
    res.sendFile(__dirname + '/techshop.xml');
});

app.get('/me', (req, res) => {
    const me = {
        "vorname": "Robin",
        "nachname": "Trachsel",
        "alter": 18
    };
    res.json(me);
});

app.listen(port, () =>
    console.log(`\nPort: ${port}\thttp://localhost:${port}\t\t${new Date().toString()}`)
);