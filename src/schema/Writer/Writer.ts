import { objectType } from 'nexus';

const Writer = objectType({
  name: 'Writer',
  definition(t) {
    t.nonNull.int('id'),
    t.nonNull.string('name'),
    t.nonNull.string('about'),
    t.nonNull.string('imgUrl')
  }
});

export {
  Writer
};
