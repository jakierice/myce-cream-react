import React from 'react';
import FlavorList from './FlavorList';
import FlavorsSummary from './FlavorsSummary';
import FlavorListFilters from './FlavorListFilters';

const DashboardPage = () => (
	<div>
		<FlavorsSummary />
		<FlavorList />
	</div>
);

export default DashboardPage;
