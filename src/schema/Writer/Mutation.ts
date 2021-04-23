import { arg, extendType } from "nexus";
import { Context } from "../../context";

export const writerMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createWriter', {
      type: 'Writer',
      args: {
        input: arg({ type: 'WriterCreateInput' })
      },
      async resolve(_, { input }, { services }: Context) {
        const { writerService } = services;
        return await writerService.create(input);
      }
    }),
    t.field('updateWriter', {
      type: 'Writer',
      args: {
        input: arg({ type: 'WriterUpdateInput' })
      },
      async resolve(_, { input }, { services }: Context) {
        const { writerService } = services;
        return await writerService.update(input);
      }
    }),
    t.field('deleteWriter', {
      type: 'Writer',
      args: {
        input: arg({ type: 'WriterDeleteInput' })
      },
      async resolve(_, { input }, { services }: Context) {
        const { writerService } = services;
        return await writerService.delete(input.id);
      }
    })
  }
});
