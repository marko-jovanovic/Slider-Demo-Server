import { objectType } from 'nexus';

const Writer = objectType({
  name: 'Writer',
  definition(t) {
    t.nullable.int('id'),
    t.string('name'),
    t.string('about'),
    t.string('imgUrl')
  }
});

export {
  Writer
};
