import * as express from "express";
import * as bodyParser from "body-parser";

class App {
    public express : express.Express;
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
        this.mountRoutes();
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
}

export default new App().express;