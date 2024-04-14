https://github.com/simoncerman/rocketsweb

## Setup

Make sure to install the dependencies (need to have node installed):

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## .env
Make sure in your code folder is .env file, if not database will not work how it is supposed to work.

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Important internet connection
You need to be connected to the network to use event and login to the app

Alternative: 
- use local docker container runtime of the supabase instance (not so easy)
- use different database / userauth service (need to be changed both api and auth


## End
Thank you for trying my app. It is still a development version on which I learned how to work in Vue and generally in Nuxt. This work has really given me a lot even though it was often a struggle. New concepts and ways of solving a problem in a modern framework with a modern database solution. 

The application is currently going the way of finishing from the GUI side for real possible deployment in the guild. It expects to add more dynamic interfaces, admin elements, better refresh handling for action changes and so on.

Thanks again and I hope you enjoy the test version of the application.