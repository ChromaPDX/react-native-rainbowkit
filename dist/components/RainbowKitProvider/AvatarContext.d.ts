import React from 'react';
export declare type AvatarComponentProps = {
    address: string;
    ensImage?: string | null;
    size: number;
};
export declare type AvatarComponent = React.FunctionComponent<AvatarComponentProps>;
export declare const defaultAvatar: React.FunctionComponent<AvatarComponentProps>;
export declare const AvatarContext: any;
