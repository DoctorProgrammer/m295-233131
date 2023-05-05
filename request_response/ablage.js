const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const names = [];

app.use(bodyParser.urlencoded({ extended: true }));

function listTimezones() {
    let timezones = Intl.supportedValuesOf('timeZone');

    let date = new Date();
    timezones.forEach((timeZone) => {
        let strTime = date.toLocaleString('de-DE', { timeZone: timeZone });
        console.log(`${timeZone}: ${strTime}`);
    });
    return `Es gibt ${timezones.length} Zeitzonen: ${timezones}`;
}

function generateNameListHTML(names) {
    let nameListHTML = '';
    names.forEach((name) => {
        nameListHTML += `<li>${name}</li>`;
    });
    return nameListHTML;
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    const nameListHTML = generateNameListHTML(names);
    const scriptHTML = `<script>document.getElementById('nameList').innerHTML = '${nameListHTML}'</script>`;
    res.write(scriptHTML);
    res.end();
});

app.get('/timezones', (req, res) => {
    res.send(listTimezones());
});

app.get('/now', (req, res) => {
    const tz = req.query.tz || 'Europe/Zurich';
    res.send(
        `Es ist gerade ${new Date().toLocaleTimeString('de-CH', {
            timeZone: tz,
        })} Uhr in ${tz}`
    );
});

app.post('/name', (req, res) => {
    const name = req.body.name || 'Anonymous';
    names.push(name);
    console.log(names);
    res.redirect('/');
});

app.get('/parameter', (req, res) => {
    res.send(req.query.p); // http://localhost:3000/parameter?p=Hallo
});

app.listen(port, () => {
    console.log(
        `\nPort: ${port}\thttp://localhost:${port}\t\t${new Date().toString()}`
    );
});