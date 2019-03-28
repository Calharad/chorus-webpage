import { Router, Request, Response, RequestHandler } from "express";

abstract class IRoute {
    constructor(route: string) {
        this._route = route;
    }
    
    readonly _route: string;

    addGetRoute(router: Router) : Router {
        
        return router.get(this._route, (req, res)=>this.sendMessage(req, res));
    }

    protected abstract sendMessage(req: Request, res: Response) : any;
}