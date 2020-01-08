import fastify from "fastify";
import { userRoutes } from "./user.route";
import { addressRoutes } from "./address.route";

type Routes = fastify.RouteOptions[];

const routes: Routes = [...userRoutes, ...addressRoutes];

export default routes;
