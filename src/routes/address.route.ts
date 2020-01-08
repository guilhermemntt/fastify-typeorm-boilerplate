import fastify from "fastify";
import { addressController } from "../controllers/address.controller";

type Routes = fastify.RouteOptions[];

const addressRoutes: Routes = [
  {
    method: "GET",
    url: "/address",
    handler: addressController.get
  },
  {
    method: "GET",
    url: "/address/:id",
    handler: addressController.find
  },
  {
    method: "POST",
    url: "/address",
    handler: addressController.add
  },
  {
    method: "PUT",
    url: "/address",
    handler: addressController.update
  },
  {
    method: "DELETE",
    url: "/address/:id",
    handler: addressController.delete
  }
];

export { addressRoutes };
