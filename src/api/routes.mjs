import healthcheck from './healthcheck/index.mjs';
import kanji from './kanji/index.mjs';
import books from './books/index.mjs'

function routes(app) {
    app.use('/api/healthcheck', healthcheck);
    app.use('/api/kanji', kanji);
    app.use('/api/books', books);
}
  
export default routes;