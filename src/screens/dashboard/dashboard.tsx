import React from 'react';

import Header from '../../global/components/header/header';
import { NavigationInterface } from '../../global/interfaces/navigation-interface';
import { DASHBOARD } from '../../global/route-names';

import {
	DashboardSafeAreaView,
	DashboardScrollView,
	DashboardView,
} from './dashboard.styled-components';
import Accounts from './accounts/accounts';
import Records from './record/record';

/**
 * @description Dashboard component
 * @memberof AppSapiens
 */
const Dashboard = ({ navigation }: NavigationInterface): JSX.Element => {
	return (
		<DashboardSafeAreaView>
			<Header headerTitle={DASHBOARD} />
			<DashboardScrollView>
				<DashboardView>
					<Accounts navigation={navigation} />
					<Records navigation={navigation} />
				</DashboardView>
			</DashboardScrollView>
		</DashboardSafeAreaView>
	);
};

export default Dashboard;
