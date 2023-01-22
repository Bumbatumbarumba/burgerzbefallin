import React, { useEffect, useState } from "react";
import { Icon } from '@iconify/react';
import { RainDropProps, SvgIcon } from "../definitions";
import * as d3 from "d3";

export const RainDrop = (props: RainDropProps) => {
    const { windowDimensions, timerFunction } = props;
    const minWidth = 100;
    const maxHeight = 3;

    //#region helper functions
    const randomIcon = (): SvgIcon => {
        const enumValues = Object.values(SvgIcon);
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        const randomEnumValue = enumValues[randomIndex];
        return randomEnumValue;
    };

    const randomIntFromInterval = (min: number, max: number) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const formatProp = (val: number, unit: string): string => {
        return val.toString() + unit;
    };

    function iterateRain() {
        setTop(top => {
            const speed = (initHeight * 1.5);
            if (top > (windowDimensions.height - 100)) {
                top = randomIntFromInterval(-200, 0);
                setInitLeftPos(randomIntFromInterval(minWidth, windowDimensions.width - minWidth));
            }
            else {
                top += speed;
            }
            return top;
        });

    };
    //#endregion

    //#region hooks
    const [initLeftPos, setInitLeftPos] = useState(randomIntFromInterval(minWidth, windowDimensions.width - minWidth));
    const [top, setTop] = useState(randomIntFromInterval(-100, 0));// change to be negative
    // this refers to the height of the svg, not its starting height (top); that will always be zero
    const [initHeight, setInitHeight] = useState(randomIntFromInterval(1, maxHeight));
    const [initIcon, setInitIcon] = useState(randomIcon());

    useEffect(() => {
        const t = d3.timer(iterateRain);
        return () => t.stop();
    }, []);
    //#endregion


    return (
        <div style={{ position: "absolute", left: formatProp(initLeftPos, "px"), top: formatProp(top, "px"), zIndex: initHeight }}>
            <Icon height={formatProp(initHeight, "em")} icon={initIcon} />
        </div>
    );
};