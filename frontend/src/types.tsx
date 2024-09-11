import React from "react";

interface ReactElementsArray extends Array<React.ReactElement> {}
export type ReactNode = React.ReactElement | ReactElementsArray | boolean | null | undefined;

export type navItem = { key: number, title: string, href: string, active: boolean };

