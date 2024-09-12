import React from "react";

interface ReactElementsArray extends Array<React.ReactElement> {}
export type ReactNode = React.ReactElement | ReactElementsArray | null | undefined;

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

export type OrderItem = Ad & { count: number; };

export const OrderStatus = {
    0: 'Created',
    1: 'Paid',
    2: 'Transport',
    3: 'DeliveredToThePoint',
    4: 'Received',
    5: 'Archived',
    6: 'Refund',
} as const;

export type Order = {
    id: string;
    status: typeof OrderStatus[keyof typeof OrderStatus];
    createdAt: string;
    finishedAt?: string;
    items: Array<OrderItem>;
    deliveryWay: string;
    total: number;
}