## NestJS Learning Sandbox

Simple playground project to learn the NestJS framework and its patterns (modules, controllers, providers, DTOs, testing).

### Prerequisites

- Node.js 18+ recommended
- npm (bundled with Node)

### Quick start

1. Install deps: `npm install`
2. Start dev server with hot reload: `npm run start:dev`
3. Open http://localhost:3000 and hit the sample routes (see below).

### Notable routes (default scaffolding)

- `GET /` — hello world
- `GET /users` — sample users endpoint
- `GET /profile` — sample profile endpoint

### Scripts

- `npm run start` — run in production mode
- `npm run start:dev` — run in watch mode (ts-node-dev)
- `npm run build` — compile to dist/
- `npm test` — unit tests via Jest
- `npm run test:e2e` — e2e tests
- `npm run lint` — lint with ESLint

### Project structure

- `src/` — NestJS app code (controllers, services, modules, DTOs)
- `test/` — e2e tests scaffolded by Nest CLI
- `dist/` — build output (generated)

### Learning pointers

- Each feature lives in its own module (`users`, `profile`).
- DTOs in `src/**/dto` show how to define typed request shapes.
- Specs (`*.spec.ts`) illustrate unit testing with Jest + Nest testing utilities.

### Useful links

- NestJS docs: https://docs.nestjs.com/
- CLI reference: https://docs.nestjs.com/cli/overview
