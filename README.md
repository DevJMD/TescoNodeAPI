#Tesco NodeJS API

A simple precompiled ES6 Node wrapper to pull data from the [Tesco](http://www.tesco.co.uk/) API using Promises.

### Get API key
Head over to [Tesco Labs Dev Portal](https://devportal.tescolabs.com), sign up and subscribe to the API.

###Install
    > npm install --save tesco

###Usage (ES5/2016)

    ```javascript
    // ES2016
    import TescoAPI from 'tesco';
    const Tesco = new TescoAPI('apikey');

    // Require
    var TescoAPI = require('tesco');
    var Tesco = new TescoAPI.default('apikey');
    ```

###TescoAPI.search([Query], [Options], [Callback]);

You can pass two parameters: `offset` (default: 0) and `limit` (default: 10).

    ```javascript
    // ES2016
    Tesco.search('Kellogs Cornflakes', { offset: 0, limit: 10 }, (err, response) => {
    	if (err) console.log(err);
    	console.log(response);
    });

    // ES5
    Tesco.search('Kellogs Cornflakes', { offset: 0, limit: 10 }, function(err, response) {
    	if (err) console.log(err);
    	console.log(response);
    });
    ```
    
### Rate limiting
120 calls/minute up to a maximum of 3000 calls/week.

### Is that it?

The API is quite small at the moment and is restricted to product searches. As the API begins to expand, I will update accordingly.

### PR & Contributions
I am open to pull requests/contributions! Fire them away.

###Issues
If there is an issue with the returned results (i.e. broken URL's from the returned data), this is an issue with the API, not the wrapper itself. Head over to Tesco's [Issues List](https://devportal.tescolabs.com/issues) and submit an issue there. 

###License
MIT
