import express from "express"
import bodyParser from "body-parser"
import configs from "./config/config.js"
import router from "./config/router.js"
import database from "./config/database.js"

const app = express()
const config = configs['development']

database.connect(config['database'])

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(`${config['contextRoot']}`, router(app))

app.listen(config['port'], () => {
    console.log(`Server started at port ${config['port']}`);
});