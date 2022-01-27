# Environment

## Workflow

The project was setup by [Vite](https://vitejs.dev/) and [PNPM](https://pnpm.io/).

## Security

The private API Key used by the project is stored into a .env file. 
The application access this value [thanks to the bundler tool](https://vitejs.dev/guide/env-and-mode.html) that power the project. This is not a production feature!

To run the project you should create a .env file at the root then define inside a "VITE_MOVIE_API_KEY" value hosting you own API key from themoviedb.org. 

