import * as express from "express";
import * as bodyParser from "body-parser";
import { Sequelize, DataType } from "sequelize-typescript";
import { Article } from "./src/models/Article";
import { Category } from "./src/models/Category";

class App {
    public express : express.Express;

    public sequelize: Sequelize;
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.mountRoutes();
        this.connectDatabase();
    }

    private mountRoutes() : void {
        const router = express.Router();
        router.get('/api',(req,res)=>{
            console.log("/");
            res.send({
                message: 'Hello World!'
            })
        })
        this.express.use('/', router);
    }

    private connectDatabase() {

        DataType.DATE.prototype._stringify = function _stringify(date, options) {
            return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
          };

        let sequelize = new Sequelize({
            database: 'chorus',
            dialect: 'postgres',
            username: 'mmm',
            password: 'mmm',
        });
        
        sequelize.addModels([__dirname + '/src/models']);

        sequelize.sync();
        
        this.sequelize = sequelize;
    }
}

export default new App().express;