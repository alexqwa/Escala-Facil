import { FastifyInstance } from 'fastify';

import { scaleRoutes } from './scales';

export async function routes(app: FastifyInstance) {
  await scaleRoutes(app);
}
