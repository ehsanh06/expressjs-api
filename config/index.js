'use strict';

let credentials = require('./config');

module.exports = {
     getDbConnectionString: () => {
        return 'mongodb://' + credentials.uname + ':'
            + credentials.pwd + '@ds159200.mlab.com:59200/expressjssimpleapi';
    }
};