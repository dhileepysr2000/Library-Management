import express from 'express'
import cors from 'cors'

// * IMPORT TRPC SERVER
// npm i @trpc/server
import { createExpressMiddleware } from '@trpc/server/adapters/express'
import { expressHandler } from 'trpc-playground/handlers/express'
import { appRouter } from './main/MainRouter'

// * IMPORT TRPC ROUTER
 // <- ./routers/index.ts

// * IMPORT CONTEXT
import { createContext } from './main/context'
// --------------------------------------------
const runApp=async ()=>{
  const app = express()
  const trpcApiEndpoint = '/trpc'
  const playgroundEndpoint = '/trpc-playground'

  app.use(cors({ origin: 'http://localhost:5173' })) // cors for client
  // * Add the TRPC middleware to express (express specific)
  // http://localhost:3000/trpc
  app.use(
    // Create route for trpc
    trpcApiEndpoint,
    createExpressMiddleware({
      // Pass the router
      router: appRouter,
      // Add context to the server (req.ctx)
      createContext,
    })
  )
  app.use(
    playgroundEndpoint,
    await expressHandler({
      trpcApiEndpoint,
      playgroundEndpoint,
      router: appRouter,
    }),
  )

  app.listen(3033, () => console.log('Server started on port 3033'))
}
runApp()
  // * export types for client
export type AppRouter = typeof appRouter