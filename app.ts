import express, { Express, Request, Response } from 'express';
const dotenv = require('dotenv');
const expressHandlebars  = require('express-handlebars');
const path = require('path');
const httpClient = require('./lib/fetch');

/**
 * Require in your library here.
 */
// const fetch = require('./lib/fetch');

/**
 * Create a new instance of express and define the port to attach to.
 */
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

/**
 * Configure the Handlebars view engine with the express app.
 *
 * Views with a `.handlebars` extension will be parsed with this Handlebars view engine.
 *
 * The default layout is `views/layouts/main.handlebars`.
 */
app.engine('hbs', expressHandlebars({
    // Default layout
    defaultLayout: 'main',
    // Extension for view files
    extname: '.hbs',
    // Path to views layouts
    layoutsDir: path.join(__dirname, 'views/layouts'),
    // Path to views partials
    partialsDir: path.join(__dirname, 'views/partials'),
    // Define custom helpers
    helpers: {
        // Helper that returns if a value is positive
        isPositive: (value: number) => { return value > 0; },
        noEscape: (value: any) => { return `"${value}"`; },
        // Helper that returns class 'positive' or 'negative' based on a value
        conditionalClass: (value: number) => { return value > 0 ? 'positive' : 'negative'; },
        // Helper that makes the number absolute value and rounds it
        precision: (value: number, pos: number) => { 
            const fixPosition = value.toFixed(pos);
            return Math.abs(Number(fixPosition)); 
        },
    }
}));

app.set('view engine', 'hbs');

/**
 * Configure a path for static assets.
 *
 * Assets in the `static/` folder can be loaded using the `/static` path.
 *
 * @example
 *
 * ```html
 * <link rel="stylesheet" type="text/css" href="/static/stylesheet.css">
 * ```
 */

if(process.env.APP_MODE === 'react')
{
    app.use(express.static('client/build'));
    
    app.get('*', async function (req: Request, res: Response) {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
        res.end();
    });
} else {
    app.use('/static', express.static(path.join(__dirname, 'static')));

    /**
     * The index route. Your logic here-ish.
    */
    app.get('/', async function (req: Request, res: Response) {
        // Get an instance of the httpClient library, that's needed because we want to store the cache.
        const client = httpClient.getInstance();
        // Get the data from the API
        const data = await client.get(['FTSE:FSI', 'EURUSD', 'GBPUSD', 'INX:IOM', 'IB.1:IEU', 'AAPL', 'GOOGL']);
        const templateData = {
            cards: data,
            stocks: ['FTSE:FSI', 'EURUSD', 'GBPUSD', 'INX:IOM', 'IB.1:IEU', 'AAPL', 'GOOGL'],
        };
    
        // This renders the Handlebars view at `views/home.handlebars`.
        res.render('home', templateData);
    });
    
    app.get('/api/stocks/:stocks', async function (req: Request, res: Response) {
        // Get an instance of the httpClient library, that's needed because we want to store the cache.
        const client = httpClient.getInstance();
        // get the stocks from the url
        const stocks = req.params.stocks.split(',');
        // Get the data from the API
        const data = await client.get(stocks);
        
        // return json
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
    });
    
    
    app.get('/:param', async function (req: Request, res: Response) {
        // Get an instance of the httpClient library, that's needed because we want to store the cache.
        const client = httpClient.getInstance();
        // Get the data from the API
        const data = await client.get([req.params.param]);
        const templateData = {
            cards: data,
            stocks: [req.params.param],
        };
    
        // This renders the Handlebars view at `views/home.handlebars`.
        res.render('single', templateData);
    });
}

/**
 * If not in a test environment where we don't need the server stared,
 * bind express to the port and start the server.
 */
if(process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Running at http://localhost:${port}!`));
}

/**
 * We export the app so that we can test it in `test/app.spec.js`.
 */
module.exports = app;
