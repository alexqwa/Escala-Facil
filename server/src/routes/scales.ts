import { z } from 'zod';
import { prisma } from '../lib/prisma';
import { FastifyInstance } from 'fastify';

export async function scaleRoutes(app: FastifyInstance) {
  app.post('/scales', async (request, reply) => {
    const colaboratorSchema = z.object({
      name: z.string().min(1, 'Nome é obrigatório.'),
      turn: z.boolean(),
      weekday: z.array(
        z.number().int().nonnegative('Deve ser um número inteiro não negativo.')
      ),
      sunday: z
        .number()
        .int()
        .nonnegative('Deve ser um número inteiro não negativo.'),
    });

    const scaleSchema = z.object({
      title: z.string().min(1, 'Nome é obrigatório.'),
      periodScale: z.string().min(1, 'Período da escala é obrigatório.'),
      colaborators: z.array(colaboratorSchema),
    });

    try {
      const { title, periodScale, colaborators } = scaleSchema.parse(
        request.body
      );

      const scale = await prisma.scale.create({
        data: {
          title,
          periodScale,
          colaborators: {
            create: colaborators.map((colaborator) => ({
              name: colaborator.name,
              turn: colaborator.turn,
              sunday: colaborator.sunday,
              weekday: {
                create: colaborator.weekday.map((day) => ({
                  day: day,
                })),
              },
            })),
          },
        },
      });

      reply.status(201).send(scale);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return reply.status(400).send({ errors: error.errors });
      }
      reply.status(500).send({ error: 'Erro ao criar Scale' });
    }
  });

  app.get('/scales', async (request, reply) => {
    try {
      const scales = await prisma.scale.findMany({
        include: {
          colaborators: {
            include: {
              weekday: true,
            },
          },
        },
      });
      reply.status(200).send(scales);
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao listar as Scales' });
    }
  });

  app.get('/scales/:id', async (request, reply) => {
    const scaleParams = z.object({
      id: z.string(),
    });

    try {
      const { id } = scaleParams.parse(request.params);
      const scale = await prisma.scale.findUnique({
        where: {
          id: parseInt(id),
        },
        include: {
          colaborators: {
            include: {
              weekday: true,
            },
          },
        },
      });
      reply.status(200).send(scale);
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao buscar a Scale' });
    }
  });

  app.delete('/scales/:id', async (request, reply) => {
    const scaleParams = z.object({
      id: z.string(),
    });

    try {
      const { id } = scaleParams.parse(request.params);

      const scale = await prisma.scale.delete({
        where: {
          id: parseInt(id),
        },
      });
      reply.status(200).send('Escala deletada com sucesso!');
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao deletar a Scale' });
    }
  });

  app.delete('/scales', async (request, reply) => {
    try {
      await prisma.scale.deleteMany();
      reply.status(200).send('Todas as escalas foram deletadas com sucesso!');
    } catch (error) {
      reply.status(500).send({ error: 'Erro ao deletar as escalas' });
    }
  });
}
