import { extendType, list, nonNull } from "nexus";
import { Context } from "../../context";

export const writerQueries = extendType({
  type: 'Query',
  definition(t) {
    t.field('getAllWriters', {
      type: nonNull(list(nonNull('Writer'))),
      async resolve(_, __, { services }: Context) {
        const { writerService } = services;
        return await writerService.findAll();
      }
    });
  }
});