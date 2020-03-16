const jwt = require('jsonwebtoken');
const APP_SECRET = 'GraphQL-is-g00d';

const getUserId = context => {
	const Authorization = context.request.get('Authorization');
	if (Authorization) {
		const token = Authorization.replace('Barear', '');
		const { userId } = jwt.verify(token, APP_SECRET);
		return userId;
	}
	throw new Error('Not Authenticated');
};

module.exports = {
	APP_SECRET,
	getUserId,
};
