#Tesco NodeJS API

An simple precompiled ES6 Node wrapper to pull data from [Tesco](http://www.tesco.co.uk/) using Promises.

### Get API key
Head over to [Tesco Labs Dev Portal](https://devportal.tescolabs.com), sign up and subscribe to the API.

###Install
    > npm install --save tesco

###Usage (ES5/2016)
	// ES2016
    import TescoAPI from 'tesco';
    const Tesco = new TescoAPI('apikey');

    // Require
    var TescoAPI = require('tesco');
    var Tesco = new TescoAPI.default('apikey');

###TescoAPI.search([Query], [Options], [Callback]);


    Tesco.search('Kellogs Cornflakes', { <offset:Number>, <limit:Number> }, (err, response) => {
    	if (err) console.log(err);
    	console.log(response);
    });

### Rate limiting
120 calls/minute up to a maximum of 3000 calls/week.

### Is that it?

The API is quite small at the moment and is restricted to product searches. As the API begins to expand, I will update accordingly.

### PR & Contributions
I am open to pull requests/contributions! Fire them away.

###Issues
No known issues!

###License
MIT
