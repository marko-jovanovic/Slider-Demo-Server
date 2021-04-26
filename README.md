# Slider Demo Server

A GraphQL server written for [Slider Demo App](https://github.com/marko-jovanovic/Slider-Demo-App)

## Tech stach

Tools:
- [MySQL](https://hub.docker.com/_/mysql) - Open source database engine
- [Docker](https://docs.docker.com/) - OS-level virtualization

Dependencies:
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - Open source GraphQL server
- [yup](https://github.com/jquense/yup) - JSON schema validator
- [nexus](https://nexusjs.org/docs/getting-started/tutorial) - Define GraphQL schema through code
- [nodemon](https://github.com/remy/nodemon) - watch for changes in order to restert the server automatically (dev purposes only)
- [Prisma](https://www.prisma.io/) - ORM framework for Typescript

## Getting started

Since the app is using MySQL to store data you'll need to have MySQL up and running along with the created database schema. Luckily you won't have to do that yourself since the app can be booted up with just one command: `yarn compose:dev` once everything is built.

### Step 1
But before doing so you need to docker build [Slider Demo App](https://github.com/marko-jovanovic/Slider-Demo-App) so that image could be pulled locally once you run `docker-compose`. For more please visit the repostory `README.md` file.


### Step 2
Make sure you've renamed the `.env.example` to `.env` (the dev credentials are for now plain, but this should be handled more securely in the future).

### Step 3
Once you have built **Slider Demo App** image and have `.env` file, you can also build the docker image for **Slider Demo Server**. Run the following command: `yarn docker:build`

### Step 4
Now you can boot up the whole app with `yarn compose:dev`

### Flaws of the current approach
Since the docker volume is not being mounted, to make code changes you need to re-build the image and re-run the docker app. So, for now if you are only working od the **Slider Demo Server**, then stop the container with `docker stop slider-demo-server_server_1` and then run the app locally with command `yarn dev`.