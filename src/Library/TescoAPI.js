import Request from 'request-promise';
import ProductSearchFormat from './Helpers/ProductSearchFormat';

class TescoAPI {
	constructor(key) {

		if (!key) {
			throw new Error('You need to provide an API key. Go to https://devportal.tescolabs.com/ and grab one.');
		}

		this.baseURL = 'https://dev.tescolabs.com';
		this.request = {
			uri: this.baseURL,
			json: true,
			resolveWithFullResponse: true,
			headers: {
				'Ocp-Apim-Subscription-Key': key
			},
			qs: {
				query:  String,
				offset: Number,
				limit:  Number
			}
		};
	}

	search(query, props, cb) {

		if (!query) {
			throw new Error('You must pass a query string parameter.');
		}

		// At this moment in time, the API only accepts a subscription
		// to the Grocery Product Search API.
		// This will need case switching/split in to modules to in
		// order to define what the URL will be.
		this.request.uri = `${this.baseURL}/grocery/products/`;
		this.request.qs.query = query;

		// If nothing is passed to the props object, we still need to
		// set them in order to return data.
		if (!props.limit) props.limit = 10;
		if (!props.offset) props.offset = 0;

		// Merge the request query string with the props.
		Object.assign(this.request.qs, props);

		let res, err;

		// Send request.
		Request(this.request)

		.then((response) => {

			const products = response.body.uk.ghs.products;

			// Build pagination URL's.
			const Pagination = {};
			const URI = response.request.uri;

			Pagination.next     = `${URI.protocol}//${URI.host}/?query=${query}&offset=${(props.offset + 1)}&limit=${props.limit}`;
			Pagination.previous = `${URI.protocol}//${URI.host}/?query=${query}&offset=${(props.offset > 0 ? props.offset - 1 : props.offset)}&limit=${props.limit}`;

			// Set Pagination inside response.
			products.pagination = Pagination;

			// Format that lovely data.
			res = new ProductSearchFormat(products);
		})

		.catch((error)   => err = error)
		.then(()         => cb(err, res));
	}
}

export default TescoAPI;
