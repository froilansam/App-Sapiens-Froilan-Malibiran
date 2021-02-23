import React from 'react';

import { SHOW_MORE } from './show-more.config';
import { ShowMoreText, ShowMoreView } from './show-more.styled-components';

/**
 * @description A component for show more component
 * @memberof AppSapiens
 */
const ShowMore = ({ onPress }: { onPress: () => void }): JSX.Element => {
	return (
		<ShowMoreView onPress={onPress}>
			<ShowMoreText>{SHOW_MORE}</ShowMoreText>
		</ShowMoreView>
	);
};

export default ShowMore;
