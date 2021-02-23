import React from 'react';

import { HeaderTitle, HeaderView } from './header.styled-components';
import { HeaderInterface } from './header.interfaces';

/**
 * @description - A functional component for Header
 * @memberof AppSapiens
 */
const Header = ({ headerTitle }: HeaderInterface): JSX.Element => {
	return (
		<HeaderView>
			<HeaderTitle>{headerTitle}</HeaderTitle>
		</HeaderView>
	);
};

export default Header;
