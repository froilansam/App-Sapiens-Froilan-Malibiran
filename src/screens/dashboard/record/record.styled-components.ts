import { FC } from 'react';
import {
	Dimensions,
	TextProps,
	TouchableOpacityProps,
	ViewProps,
} from 'react-native';

import styled from 'styled-components/native';

import { ColorInterface } from '../../../global/interfaces/color-interface';
import { ThemePropsInterface } from '../../../global/interfaces/theme-interface';
import { THEME } from '../../../global/theme';
import normalize from '../../../utils/normalizeText';

const { width } = Dimensions.get('window');

export const RecordView: FC<ViewProps> = styled.View`
	flex: 1;
	padding-horizontal: 25px;
`;

export const RecordCard: FC<ViewProps> = styled.View`
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.cardColor};
	border-radius: 10px;
	margin-vertical: 10px;
	align-items: flex-start;
	justify-content: flex-start;
	padding-horizontal: 10px;
`;

export const RecordListsView: FC<ViewProps> = styled.View`
	padding-vertical: 10px;
	align-items: center;
	justify-content: center;
`;

export const RecordItemView: FC<TouchableOpacityProps> = styled.TouchableOpacity`
	flex-direction: row;
	margin-vertical: 10px;
`;
export const RecordIconFlex: FC<ViewProps> = styled.View`
	justify-content: center;
	align-items: center;
	width: 10%;
`;

export const RecordIconView: FC<ViewProps & ColorInterface> = styled.View`
	width: ${normalize(30)}px;
	height: ${normalize(30)}px;
	background-color: ${({ color }: ColorInterface) => color || 'lightblue'};
	border-radius: ${normalize(15)}px;
	justify-content: center;
	align-items: center;
`;

export const RecordCategoryFlex: FC<ViewProps> = styled.View`
	justify-content: center;
	align-items: flex-start;
	width: 45%;
	padding-left: 10px;
`;

export const RecordCategoryText: FC<TextProps> = styled.Text`
	font-size: ${normalize(11)}px;
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
`;
export const RecordDetailsFlex: FC<ViewProps> = styled.View`
	justify-content: flex-start;
	align-items: flex-end;
	width: 45%;
`;

export const RecordMoney: FC<TextProps & { income: boolean }> = styled.Text`
	color: ${({
		income,
		theme,
	}: { income: boolean } & ThemePropsInterface): string =>
		income ? theme.incomeColor : theme.expenseColor};
	font-size: ${normalize(12)}px;
	font-weight: bold;
`;

export const RecordDate: FC<TextProps> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
	font-size: ${normalize(9)}px;
`;
