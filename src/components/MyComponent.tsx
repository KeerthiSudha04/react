// components/AsyncComponent.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchData from '../actions/dataActions';
import withLoadingIndicator from '../HOC';

const AsyncComponent: React.FC = () => {
  const data = useSelector((state: any) => state.async.data);
  const loading = useSelector((state: any) => state.async.loading);
  const error = useSelector((state: any) => state.async.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
const MyComponentWithLoadingIndicator = withLoadingIndicator(AsyncComponent);

export default MyComponentWithLoadingIndicator;
