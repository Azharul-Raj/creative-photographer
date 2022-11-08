import React, { useEffect, useState } from 'react';
import ServiceCard from '../HomePage/Services/ServiceCard';

const AllServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
        .catch(err=>console.error(err))
    },[])
    return (
        <div className='grid grid-cols-3 gap-5 mx-10 my-20'>
            {
                services.map(service=><ServiceCard key={service._id} service={service}/>)
            }
        </div>
    );
};

export default AllServices;