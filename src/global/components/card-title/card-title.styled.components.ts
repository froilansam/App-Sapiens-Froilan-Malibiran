/**
 * This file is for card title styles
 */
import { FC } from 'react';
import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

import { THEME } from '../../../global/theme';
import normalize from '../../../utils/normalizeText';

export const CardTitleView: FC<ViewProps> = styled.View`
	border-bottom-color: ${THEME.borderColor};
	border-bottom-width: 1px;
	padding-vertical: 10px;
	width: 100%;
`;

export const CardTitle: FC<TextProps> = styled.Text`
	color: ${THEME.textColor};
	font-size: ${normalize(15)}px;
	font-weight: bold;
`;
