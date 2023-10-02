import React, { FC } from "react";
import { ButtonProps, ButtonWrapProps } from "./button.types";
import {styled} from '@stitches/react';

 const ButtonWrap = styled('button', {
    paddingLeft: 'var(--padding)',
    variants:{
        color: {
            red: {
                backgroundColor: "red"
            },
            green: {
                backgroundColor: "LightGreen"
            },
            
        }
    }
 });

const Button:FC<ButtonProps> = props => {
    const { label, color} = props;
    return <ButtonWrap css={{'--padding': '10px'}} color={color}> { label } </ButtonWrap>;
}

export default Button;