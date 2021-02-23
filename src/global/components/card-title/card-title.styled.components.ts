/**
 * This file is for card title styles
 */
import { FC } from 'react';
import { TextProps, ViewProps } from 'react-native';
import styled from 'styled-components/native';

import normalize from '../../../utils/normalizeText';
import { ThemePropsInterface } from '../../interfaces/theme-interface';

export const CardTitleView: FC<ViewProps & ThemePropsInterface> = styled.View`
	border-bottom-color: ${({ theme }: ThemePropsInterface): string =>
		theme.borderColor};
	border-bottom-width: 1px;
	padding-vertical: 10px;
	width: 100%;
`;

export const CardTitle: FC<TextProps & ThemePropsInterface> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
	font-size: ${normalize(15)}px;
	font-weight: bold;
`;
