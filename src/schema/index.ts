import path from 'path'
import { makeSchema } from "nexus";
import WriterTypes from './Writer';

const schema = makeSchema({
  types: [
    ...WriterTypes
  ],
  contextType: {
    module: path.join('../', 'context.ts'),
    export: 'Context',
  },
});

export default schema;
