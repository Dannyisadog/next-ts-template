import axios from 'axios';

interface fetchDataParams {
  path: string;
  method: string;
  data: object;
}

const getBaseUrl = () => {
	switch (process.env.NODE_ENV) {
	case 'development':
		return 'http://localhost:3000';
	case 'test':
		return 'http://localhost:3000';
	case 'production':
		return 'http://localhost:3000';
	default:
		return 'http://localhost:3000';
	}
};

export const fetchData = ({
	path,
	method,
	data,
}: fetchDataParams): Promise<any> => {
	const url = getBaseUrl() + path;
	return new Promise((resolve, reject) => {
		axios({
			url,
			method,
			data,
		})
			.then((resp) => {
				resolve(resp.data.data);
			})
			.catch((err) => {
				reject(err);
			});
	});
};
