/**
 * This file is for show more styles
 */
import styled from 'styled-components/native';

import { THEME } from '../../../global/theme';
import normalize from '../../../utils/normalizeText';

export const ShowMoreView = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 10px;
	width: 100%;
	margin-bottom: 10px;
`;

export const ShowMoreText = styled.Text`
	color: ${THEME.linkColor};
	font-size: ${normalize(12)}px;
	font-weight: bold;
`;
