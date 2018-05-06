import express from "express"
import bodyParser from "body-parser"
import config from "./config/config.js"
import router from "./config/router.js"
import database from "./config/database.js"
import cors from "cors"

const app = express()
database.connect(config['database'])

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(`${config['contextRoot']}`, router(app))

app.listen(config['port'], () => {
    console.log(`Server started at port ${config['port']}`);
});