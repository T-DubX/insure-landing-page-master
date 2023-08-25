import React from 'react';
import iconSprite from '../../assets/images/iconSprite.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
}
export const Icon = (props: IconPropsType) => {
    return (
        <svg width={`${props.width || "50"}`} height={`${props.height || "50"}`}  fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
    );
};
