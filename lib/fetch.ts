import * as https from 'https';

/**
 * Copy and paste the library you built at home into this file.
 */

// Creating oldfashioned singleton
const httpClient = (function () {
  // Private variables
  let instance: any;
  // Last time we updated the cache
  let lastUpdated: any = {};
  // Used for caching the request
  let cachedElements: any = {};

  // When the instance is created, we create the object with the methods available
  const createInstance = () => {
    let object = {
      getCachedElements(byIndex: string) {
        return cachedElements[byIndex];
      },
      get
    };

    return object;
  }

  // Default method to get the instance
  const getInstance = () => {
    if(!instance) {
      instance = createInstance();
    }
    return instance;
  }

  const get = (params: string[]) => {
    const joinedParams: string = params.join(',');

    // Returning a promise or we won't be able to use async/await in the app.js
    return new Promise((resolve, reject) => {

      // Should be updated so we can track the time of every request and not just the last one
      const isFreshCache = lastUpdated[joinedParams] && (new Date().getMilliseconds() - lastUpdated[joinedParams].getMilliseconds()) < 60000;
      if (isFreshCache  && cachedElements?.[joinedParams]?.length > 0) {
        // Just to check if the cache is working
        console.log(`[${joinedParams}]  Using cached elements`);
        // Resolver
        resolve(cachedElements[joinedParams]);
        return;
      }

      // Using the default https library
      let req = https.request({
        host: 'markets-data-api-proxy.ft.com',
        path: '/research/webservices/securities/v1/quotes?symbols=' + joinedParams
      }, (res) => {
        let data = '';
        res.setEncoding('utf8');

        // Getting the data from the response by chunks
        res.on('data', (chunk) => {
          data += chunk;
        });

        // When the response is finished, we parse the data and resolve the promise
        res.on('end', () => {
          const objData = JSON.parse(data);
          if (!objData?.data?.items) return;
          // Updating the cache and the last updated time
          lastUpdated[joinedParams] = new Date();
          cachedElements[joinedParams] = objData?.data?.items;
          resolve(cachedElements[joinedParams]);
        });
      }).end();

      // If there's an error, we reject the promise
      req.on('error', (e) => {
        console.error(e);
        reject(e);
      });
    });
  }

  return {
    getInstance
  };
})();

module.exports = httpClient;