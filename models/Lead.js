const firebase = require('../firebase');
const stringify = require('csv-stringify');

const create = ({ name, empresa, cargo, email, ajuda }) => {
    const leads = firebase.database().ref('leads');
    const lead = leads.push({ name, empresa, cargo, email, ajuda });
    return lead;
};

const csv = (cb) => {
    const leads = firebase.database().ref('leads');
    const data = [['id', 'name', 'empresa', 'cargo', 'email', 'ajuda']];
    leads.on('value', (snapshot) => {
        snapshot.forEach((lead) => {
            const { name } = lead.val();
            const { empresa } = lead.val();
            const { cargo } = lead.val();
            const { email } = lead.val();
            const { ajuda } = lead.val();
            data.push([lead.key, name, empresa, cargo, email, ajuda]);
        });
        stringify(data, (err, output) => {
            cb(output);
        });
    });
};

module.exports = {
    create,
    csv,
}