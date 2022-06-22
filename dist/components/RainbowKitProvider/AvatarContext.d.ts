import React from 'react';
export declare type AvatarComponentProps = {
    address: string;
    ensImage?: string | null;
    size: number;
};
export declare type AvatarComponent = React.FunctionComponent<AvatarComponentProps>;
export declare const defaultAvatar: any;
export declare const AvatarContext: import("react").Context<any>;
