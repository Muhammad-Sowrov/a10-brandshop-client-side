import React from 'react';
import { useLoaderData } from 'react-router-dom';

const One = () => {
    fetch(`https://blushly-server-f746xt7d5-muhammad-sowrov.vercel.app/products`)
    .then(res=> res.json())
    .then(data => {
        console.log(data);
    })
    return (
        <div>
            hey

        </div>
    );
};

export default One;