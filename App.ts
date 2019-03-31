import * as express from "express";
import * as bodyParser from "body-parser";
import { Sequelize } from "sequelize-typescript";

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