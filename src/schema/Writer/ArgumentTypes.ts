import { inputObjectType } from "nexus";

export const WriterCreateInput = inputObjectType({
  name: 'WriterCreateInput',
  nonNullDefaults: { input: true },
  definition(t) {
    t.nonNull.string('name'),
    t.nonNull.string('about'),
    t.nonNull.string('imgUrl')
  }
});

export const WriterUpdateInput = inputObjectType({
  name: 'WriterUpdateInput',
  nonNullDefaults: { input: true },
  definition(t) {
    t.nonNull.int('id'),
    t.nonNull.string('name'),
    t.nonNull.string('about'),
    t.nonNull.string('imgUrl')
  }
});

export const WriterDeleteInput = inputObjectType({
  name: 'WriterDeleteInput',
  definition(t) {
    t.nonNull.int('id')
  }
});