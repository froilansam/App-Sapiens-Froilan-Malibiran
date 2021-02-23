import React from 'react';

import {
	CardTitleView,
	CardTitle as CardTitleText,
} from './card-title.styled.components';
import { CardTitleInterface } from './card-title.interfaces';

/**
 * @description A component for Card Title
 */
const CardTitle = ({ title }: CardTitleInterface): JSX.Element => {
	return (
		<CardTitleView>
			<CardTitleText>{title}</CardTitleText>
		</CardTitleView>
	);
};

export default CardTitle;
