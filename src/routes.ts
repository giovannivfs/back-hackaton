import express, {Request, Response} from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).json({message: "API Hackaton 2020 CCR - Amigos do trecho"});
})

routes.get("/items", itemsController.index);

routes.get("/points/", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.post("/points", pointsController.create);

export default routes;
