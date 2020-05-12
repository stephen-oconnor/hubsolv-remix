import { useCallback, useEffect, useState } from 'react';

export interface UseFetch {
	fetchData: () => Promise<void>;
	loading: boolean;
	error: boolean;
	data: any;
}

export default function useFetch(url: string, options: any, immediate = true): UseFetch {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState({});

	/* Fetch the data, update the state. */
	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setData({});

			const response = await fetch(url, options);
			const data = await response.json();

			if (data.error) {
				throw data.error;
			}

			setLoading(false);
			setData(data);
			setError(false);
		} catch (error) {
			setLoading(false);
			setError(true);
			setData({});

			console.error(`${error.type}: ${error.message}`);
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
