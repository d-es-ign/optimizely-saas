import queryString from 'query-string';
import { useState } from 'react';

interface IListingComponentState<TData> {
  readonly data: TData;
  readonly loading: boolean;
  readonly error: string;
}

// Extend the hook definition with TData for the data structure
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useListingComponentData = <TFormData extends Record<string, any>, TData>(
  apiEndpoint: string,
  initialData: TData
) => {
  const [state, setState] = useState<IListingComponentState<TData>>({
    data: initialData,
    loading: false,
    error: '',
  });

  const fetchData = async (formData: TFormData) => {
    try {
      setState({ ...state, loading: true, error: '' });
      const requestQueryString = `?${queryString.stringify(formData, {
        skipEmptyString: true,
        arrayFormat: 'comma',
      })}`;

      const response = await fetch(`${apiEndpoint}${requestQueryString}`);
      const currentUrl = new URL(window.location.href);
      const searchParams = currentUrl.searchParams;

      // Iterate over formData using keyof TFormData to ensure type safety
      (Object.keys(formData) as Array<keyof TFormData>).forEach((key) => {
        const value = formData[key];
        searchParams.set(key?.toString(), value?.toString());
      });

      window.history.pushState({}, '', currentUrl.href);

      const data = await response.json();

      setState({ ...state, data, loading: false });
    } catch (error) {
      setState({ ...state, loading: false, error: 'Error fetching data' });
    }
  };

  return { fetchData, state };
};

export default useListingComponentData;
