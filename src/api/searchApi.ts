import { useCallback, useEffect, useState } from 'react';

export interface FetchOptions {
	method: string;
}

export default function useFetch(url: string, options: FetchOptions, immediate = true) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	/* Fetch the data, update the state. */
	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setData(null);

			const response = await fetch(url, options);
			const data = await response.json();

			setLoading(false);
			setData(data);
			setError(false);

			console.log(data);
		} catch (error) {
			setLoading(false);
			setError(true);
			setData(null);

			console.error(error);
		}
	}, [url, options]);

	useEffect(() => {
		/* Option to conditionally call the fetchData function, e.g. from an event listener. */
		if (immediate) {
			fetchData();
		}
	}, [fetchData, immediate]);

	/* Expose the fetchData function and the component state. */
	return { fetchData, loading, error, data };
}
