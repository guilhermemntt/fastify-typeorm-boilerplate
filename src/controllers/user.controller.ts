import { User } from "../entities/user";
import fastify from "fastify";
import { Address } from "../entities/address";

interface userController {
  get: fastify.RequestHandler;
  find: fastify.RequestHandler;
  add: fastify.RequestHandler;
  update: fastify.RequestHandler;
  delete: fastify.RequestHandler;
}

let userController: userController = {
  get: async (request, reply) => {
    try {
      const users: User[] = await User.find();

      reply.code(200).send(users);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  find: async (request, reply) => {
    try {
      const user: User = await User.findOne({ cpf: request.params.cpf });

      reply.code(200).send(user);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  add: async (request, reply) => {
    try {
      const address: Address = await Address.findOne({
        id: request.body.addressId
      });

      const response = await User.insert({ ...request.body, address });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  update: async (request, reply) => {
    try {
      const { cpf } = request.body;

      const address: Address = await Address.findOne({
        id: request.body.addressId
      });

      const { addressId, ...user } = request.body;

      const response = await User.update({ cpf }, { ...user, address });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  },
  delete: async (request, reply) => {
    try {
      const { cpf } = request.params;

      const response = await User.delete({ cpf });

      reply.status(200).send(response);
    } catch (error) {
      console.log(error);
      reply.status(500).send();
    }
  }
};

export { userController };
