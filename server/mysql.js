const mysql = require('mysql2/promise');
const db = mysql.createPool(
    {
        host: 'containers-us-west-13.railway.app',
        user: 'root',
        database: 'railway',
        password: 'L2MJO7MvgWfyx6pSHYki',
        port: 5526
    }
)


module.exports = db;