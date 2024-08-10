import { useState } from "react";

interface MyElm1Props {
    onClick: (e: React.MouseEvent<SVGElement>) => void
}

export function MyElm1({
    onClick,
}: MyElm1Props) {
    // ボタンの背景色
    const [fillColor, setFillColor] = useState<string>("#CBE2B5");

    function handleOnClick(e: React.MouseEvent<SVGElement>) {
        console.log("Elm1 clicked!");
        onClick(e);
    }
    function hnadleMouseEnter() {
        setFillColor("#BAC1A4");
    }
    function handleMouseLeave() {
        setFillColor("#CBE2B5");
    }
    function handleMouseDown() {
        setFillColor("#A9B093");
    }
    function handleMouseUp() {
        setFillColor("#BAC1A4");
    }

    return (
        <>
            <g
                onClick={handleOnClick}
                onMouseEnter={hnadleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                cursor="pointer"
            >
                <rect
                    x={0}
                    y={0}
                    width={150}
                    height={30}
                    rx={8}
                    ry={8}
                    fill={fillColor}
                />
                <text
                    x={12}
                    y={21}
                    fill={"#363"}
                >Elm1: Click Me!</text>
            </g>
        </>
    );
};
