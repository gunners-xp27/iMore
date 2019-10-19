const express = require('express');
const bodyParser = require('body-parser');
const Lead = require('./models/Lead');

const app = express();

app.use(express.static(__dirname+'/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/tecnologia-e-marketing-digital.html');
});

app.get('/tecnologia-e-marketing-digital', (req, res) => {
    res.sendFile(__dirname + '/tecnologia-e-marketing-digital.html');
});

app.get('/blog-2', (req, res) => {
    res.sendFile(__dirname + '/momentos-da-verdade-para-sua-empresa.html');
});

app.get('/momentos-da-verdade-para-sua-empresa', (req, res) => {
    res.sendFile(__dirname + '/momentos-da-verdade-para-sua-empresa.html');
});

app.get('/estrutura-proposta-comercial', (req, res) => {
    res.sendFile(__dirname + '/estrutura-proposta-comercial.html');
});

app.get('/o-que-fazer-depois-de-enviar-proposta-comercial', (req, res) => {
    res.sendFile(__dirname + '/o-que-fazer-depois-de-enviar-proposta-comercial.html');
});
 
app.get('/Newsletter', (req, res) => {
    res.sendFile(__dirname + '/Newsletter.html');
});
 
app.get('/Ebook', (req, res) => {
    res.sendFile(__dirname + '/ebook.html');
});
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
 
app.get('/ebook.html', (req, res) => {
    res.sendFile(__dirname + '/ebook.html');
});
 
app.get('/Newsletter.html', (req, res) => {
    res.sendFile(__dirname + '/Newsletter.html');
});
 
app.get('/tecnologia-e-marketing-digital.html', (req, res) => {
    res.sendFile(__dirname + '/tecnologia-e-marketing-digital.html');
});

app.get('/blog.html', (req, res) => {
    res.sendFile(__dirname + '/tecnologia-e-marketing-digital.html');
});

app.get('/momentos-da-verdade-para-sua-empresa.html', (req, res) => {
    res.sendFile(__dirname + '/momentos-da-verdade-para-sua-empresa.html');
});

app.get('/blog-2.html', (req, res) => {
    res.sendFile(__dirname + '/momentos-da-verdade-para-sua-empresa.html');
});

app.get('/estrutura-proposta-comercial.html', (req, res) => {
    res.sendFile(__dirname + '/estrutura-proposta-comercial.html');
});

app.get('/o-que-fazer-depois-de-enviar-proposta-comercial.html', (req, res) => {
    res.sendFile(__dirname + '/o-que-fazer-depois-de-enviar-proposta-comercial.html');
});
 
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/leads', (req, res) => {
    const { name } = req.body;
    const { empresa } = req.body;
    const { cargo } = req.body;
    const { email } = req.body;
    const { ajuda } = req.body;
    const { ip } = req.body;
    const { tipo } = req.body;
    const { data_hora } = req.body;
    const lead = Lead.create({ name, empresa, cargo, email, ajuda, ip, tipo, data_hora });
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