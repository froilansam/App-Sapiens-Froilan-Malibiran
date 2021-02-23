/**
 * This file is for header styles
 */
import { FC } from 'react';
import { Dimensions, TextProps, ViewProps } from 'react-native';

import styled from 'styled-components/native';

import normalize from '../../../utils/normalizeText';
import { ThemePropsInterface } from '../../interfaces/theme-interface';

const { width } = Dimensions.get('window');

export const HeaderView: FC<ViewProps & ThemePropsInterface> = styled.View`
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.background};
	border-bottom-color: ${({ theme }: ThemePropsInterface): string =>
		theme.borderColor};
	border-bottom-width: 1px;
	width: ${width}px;
	height: ${normalize(40)}px;
	justify-content: space-between;
	align-items: flex-end;
	flex-direction: row;
	padding: 10px;
`;

export const HeaderTitle: FC<TextProps & ThemePropsInterface> = styled.Text`
	font-size: ${normalize(20)}px;
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
	font-weight: bold;
`;
