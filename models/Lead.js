const firebase = require('../firebase');
const stringify = require('csv-stringify');

const create = ({ name }) => {
    const leads = firebase.database().ref('leads');
    const lead = leads.push({ name });
    return lead;
};

const csv = (cb) => {
    const leads = firebase.database().ref('leads');
    const data = [['id', 'name']];
    leads.on('value', (snapshot) => {
        snapshot.forEach((lead) => {
            const { name } = lead.val();
            data.push([lead.key, name]);
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