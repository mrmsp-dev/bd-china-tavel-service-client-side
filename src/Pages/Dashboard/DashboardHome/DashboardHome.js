import * as React from 'react';
import { Button, Grid } from '@mui/material';

import Appointments from '../Appointments/Appointments';
const DashboardHome = () => {
	const [date, setDate] = React.useState(new Date());
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={5} >

			</Grid>
			<Grid item xs={12} md={7} >
				<Appointments date={date}></Appointments>
			</Grid>
		</Grid>
	);
};

export default DashboardHome;