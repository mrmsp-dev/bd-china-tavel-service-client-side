import React, { useEffect, useState } from 'react';
// import Service from '../Service/Service';
import { Spinner } from 'react-bootstrap';
import Service from '../../Home/Service/Service';
import MoreProduct from '../../MoreProduct/MoreProduct';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';


const MoreProducts = () => {
	const [services, setServices] = useState([])
	const [isFound, setIsFound] = useState(true);
	useEffect(() => {
		setIsFound(true);
		fetch('https://morning-harbor-87181.herokuapp.com/services')
			.then(res => res.json())
			.then(data => setServices(data))
			.finally(() => setIsFound(false));

	}, [])

	if (isFound) {
		return <Spinner animation="border" variant="danger" />
	}


	return (
		<div>

			<div className="container-fluid">
				<h1 className="text-primary mt-5 pb-2 title ">Our services</h1>


				<div className=" service-container ">
					{
						(services.slice(0, 5)).map(service => <Service
							key={service._id}
							service={service}
							short={service.description.slice(0.15)}
							isFound={isFound}
						></Service>)
					}
				</div>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
};
export default MoreProducts;