import * as functions from "firebase-functions"
import next from "next"

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf: { distDir: 'next' } })
const handle = app.getRequestHandler()

exports.next = functions.https.onRequest((request, response) =>
  app.prepare().then(() => handle(request, response)))