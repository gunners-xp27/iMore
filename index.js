const express = require('express');
const bodyParser = require('body-parser');
const Lead = require('./models/Lead');

const app = express();

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/leads', (req, res) => {
    const { name } = req.body;
    const { empresa } = req.body;
    const { cargo } = req.body;
    const { email } = req.body;
    const { ajuda } = req.body;
    const lead = Lead.create({ name, empresa, cargo, email, ajuda });
    res.send('Obrigado, ' + name + "!");
});

app.get('/leads.csv', (req, res) => {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="leads.csv"');
    Lead.csv((data) => {
        res.send(data);
    });
});

app.listen(21104);