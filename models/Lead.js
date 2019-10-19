const firebase = require('../firebase');
const stringify = require('csv-stringify');

const create = ({ name, empresa, cargo, email, ajuda, ip, tipo, data_hora }) => {
    const leads = firebase.database().ref('leads');
    const lead = leads.push({ name, empresa, cargo, email, ajuda, ip, tipo, data_hora });
    return lead;
};

const csv = (cb) => {
    const leads = firebase.database().ref('leads');
    const data = [['email', 'nome', 'ip', 'tipo', 'data_hora']];
    leads.on('value', (snapshot) => {
        snapshot.forEach((lead) => {
            const { email } = lead.val();
            const { name } = lead.val();
            const { ip } = lead.val();
            const { tipo } = lead.val();
            const { data_hora } = lead.val();

            data.push([email, name, ip, tipo, data_hora]);
        });
        stringify(data, (err, output) => {
            cb(output);
        });
    });
};

const csvIP = (cb) => {
    const leads = firebase.database().ref('leads');
    const data = [['email', 'nome', 'ip', 'tipo', 'data_hora']];
    leads.on('value', (snapshot) => {
        snapshot.forEach((lead) => {
            const { email } = lead.val();
            const { name } = lead.val();
            const { ip } = lead.val();
            const { tipo } = lead.val();
            const { data_hora } = lead.val();

            if (ip != undefined) { 
                data.push([email, name, ip, tipo, data_hora]);
            }
        });
        stringify(data, (err, output) => {
            cb(output);
        });
    });
};

module.exports = {
    create,
    csvIP,
    csv,
}