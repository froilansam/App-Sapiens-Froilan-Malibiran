/**
 * This file is for header styles
 */
import { FC } from 'react';
import { Dimensions, TextProps, ViewProps } from 'react-native';

import styled from 'styled-components/native';

import normalize from '../../../utils/normalizeText';

import { THEME } from '../../theme';

const { width } = Dimensions.get('window');

export const HeaderView: FC<ViewProps> = styled.View`
	background-color: ${THEME.background};
	border-bottom-color: ${THEME.borderColor};
	border-bottom-width: 1px;
	width: ${width}px;
	height: ${normalize(40)}px;
	justify-content: flex-end;
	align-items: flex-start;
	padding: 10px;
`;

export const HeaderTitle: FC<TextProps> = styled.Text`
	font-size: ${normalize(20)}px;
	color: ${THEME.textColor};
	font-weight: bold;
`;
