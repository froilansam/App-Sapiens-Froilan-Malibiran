/**
 * This file is for dashboard styles
 */
import { FC } from 'react';
import { Dimensions, ScrollViewProps, ViewProps } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import styled from 'styled-components/native';
import { ThemePropsInterface } from '../../global/interfaces/theme-interface';

import { THEME } from '../../global/theme';

const { height } = Dimensions.get('window');

export const DashboardSafeAreaView: FC<
	SafeAreaViewProps & ThemePropsInterface
> = styled.SafeAreaView`
	flex: 1;
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.background};
`;

export const DashboardScrollView: FC<ScrollViewProps> = styled.ScrollView`
	flex: 2;
`;
export const DashboardView: FC<ViewProps & ThemePropsInterface> = styled.View`
	flex: 2;
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.background};
	height: ${height};
`;
