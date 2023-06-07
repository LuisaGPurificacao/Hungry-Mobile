import React from 'react';
import { StyledText } from './styles';

const Text = (props) => {
    const {style, children, key} = props

    return (
        <StyledText style={style} key={key}>
            {children}
        </StyledText>
    )
}

export default Text;