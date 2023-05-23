import React from 'react';
import './Home.css';
import { Card } from '../../components';
import { getAll } from '../../lib/httpClient';
import {
  useQuery,
} from "@tanstack/react-query";


const Home = () => {
  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["getAll"],
    queryFn: () => getAll()
                    .then(res => res.data)
                    .then(res => res.data)
                    .then(res => res.items),
    cacheTime: 60000,
  });

  if (isLoading || isFetching) return <>Loading...</>;

  if (error) return <>An error has occurred: {error}</>;

  return (
    <>
      <header>
          <h1>Financial Times</h1>
      </header>
      <main>
        <div className='cards'>
          {data?.map((item: any, i: number) => (
            <Card key={i} 
                  symbol={item.symbolInput} 
                  percent={item.quote?.change1DayPercent} 
                  name={item.basic?.name}
                  price={item.quote?.openPrice}
                  new_price={item.quote?.lastPrice} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;

