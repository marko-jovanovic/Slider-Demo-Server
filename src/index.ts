import { ApolloServer } from 'apollo-server';
import schema from './schema/index';
import WriterService from './service/Writer';

const port = Number(process.env.PORT || 4000);

const context = async ({ req }: {req: Request}) => {
  return {
    services: {
      writerService: WriterService.getInstance()
    }
  }
}

const server = new ApolloServer({
  schema,
  context
});

server.listen({ port }).then(({ url }) => {
  console.log(`\u{1F680}  server ready at http://localhost:${port}${server.graphqlPath}`);
});
