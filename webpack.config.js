const path = require('path');

module.exports = {
    entry:'./teste.js',
    output: {
        path: path.resolve(__dirname + "/webpack", 'dist'),
        filename: 'bundle.js'
    }
};