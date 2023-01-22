import React from "react";

export enum SvgIcon {
    Burger0 = "cil:burger",
    Burger1 = "icon-park-twotone:hamburger",
    Burger2 = "majesticons:burger-line",
    Burger3 = "ph:hamburger",
    // Chicken = "icon-park-outline:chicken",
    // Sausage = "tabler:sausage",
    // Croissant = "lucide:croissant",
    // Coffee = "ant-design:coffee-outlined",
    // Banana = "lucide:banana",
}

export const DownCaret = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="#2d2424"
        viewBox="0 0 256 256"
    >
        <rect width="256" height="256" fill="none"></rect>
        <polyline
            points="208 96 128 176 48 96"
            fill="none"
            stroke="#2d2424"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        ></polyline>
    </svg>
);