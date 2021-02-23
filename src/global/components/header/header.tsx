import React, { useContext, useEffect, useState } from 'react';

import { HeaderTitle, HeaderView } from './header.styled-components';
import { HeaderInterface } from './header.interfaces';
import { Switch } from 'react-native';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../../store/root-store';

/**
 * @description - A functional component for Header
 * @memberof AppSapiens
 */
const Header = observer(
	({ headerTitle }: HeaderInterface): JSX.Element => {
		// ThemeStore
		const { themeStore } = useContext(RootStoreContext);
		const { theme, toggleTheme } = themeStore;

		const toggleSwitch = (): void => {
			toggleTheme({ isDay: !theme.isDay });
		};

		return (
			<HeaderView>
				<HeaderTitle>{headerTitle}</HeaderTitle>
				<Switch
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={theme.isDay ? '#f5dd4b' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={theme.isDay}
				/>
			</HeaderView>
		);
	},
);

export default Header;
