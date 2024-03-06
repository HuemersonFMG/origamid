import React, { useEffect, useState } from 'react'
import UseFetch from './UseFetch';

const Index = () => {
  const baseUrl = 'https://ranekapi.origamid.dev/json/api/produto/';
  const {request, data, loading, error} = UseFetch();
  
  useEffect(() => {
    async function fetchData(){
      const {response, json} = await request(baseUrl);
    }
    fetchData();
  }, [request]);
  
  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>
  if(data){  
    return (
      <section className='section09'>
        <div className='container'>
          {data.map((product) => (
            <div key={product.id}>
              <h1>{product.nome}</h1>
            </div>
          ))}
        </div>
      </section>
    )
  } else {
    return null;
  }
}

export default Index
