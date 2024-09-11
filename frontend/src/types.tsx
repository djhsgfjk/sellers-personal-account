import React from "react";

interface ReactElementsArray extends Array<React.ReactElement> {}
export type ReactNode = React.ReactElement | ReactElementsArray | boolean | null | undefined;

export type NavItem = { key: number, title: string, href: string, active: boolean };

export type Ad = {
    id: string,
    name: string,
    description?: string,
    price: number,
    createdAt: string,
    views: number,
    likes: number,
    imageUrl?: string,
};
