import { FC } from 'react';
import { ScrollViewProps, ViewProps } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

import { ThemePropsInterface } from '../../../../global/interfaces/theme-interface';

export const RecordListSafeAreaView: FC<
	SafeAreaViewProps & ThemePropsInterface
> = styled.SafeAreaView`
	flex: 1;
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.background};
`;

export const RecordListScrollView: FC<ScrollViewProps> = styled.ScrollView`
	flex: 2;
	padding-horizontal: 10px;
`;
export const RecordListView: FC<ViewProps> = styled.View`
	flex: 2;
	padding-vertical: 10px;
	align-items: center;
	justify-content: center;
`;
