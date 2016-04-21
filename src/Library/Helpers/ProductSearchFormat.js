class ProductSearchFormat {
	constructor(obj) {
		this.data = obj;
		return this.formatData(this.data);
	}

	formatData(data) {
		return {
			products    : data.results,
			total       : data.totals.all,
			suggestions : data.suggestions,
			pagination  : data.pagination
		};
	}
}

export default ProductSearchFormat;
