import React from 'react';

function SvgContainer({ dimensions }: { dimensions: { width: number; height: number } }) {
    const { width, height } = dimensions;
    const baseY = height * .1

    const rightCurve = width * .75

    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            style={{ border: '2px solid red' }}
        >
            <line x1={width * .5} y1={baseY} x2={width * .75} y2={baseY} stroke="black" strokeWidth="3" />
            <path
                d={`M ${width * 0.75} ${baseY} C ${rightCurve + 200} ${baseY}, ${rightCurve + 300} ${baseY + 240}, ${rightCurve} ${baseY + 240}`}
                stroke="black"
                fill="transparent"
                strokeWidth="3"
            />
            <path d={`M0.298828 2.67529C223.365 2.67529 241.676 308.701 0.298828 308.701`} stroke="black" fill='none' stroke-width="4"/>
            <path d="M176.663 2.70117C-46.4032 2.70117 -64.7146 308.727 176.663 308.727" stroke="black"fill='none' stroke-width="4"/>

            {/*
            <line x1={width * .2} y1={height * .4} x2={width * .65} y2={height * .4} stroke="black" strokeWidth="3" />

            <path
                d={`M ${width * 0.2} ${height * 0.4}
     C ${width * 0.05} ${height * 0.38}, 
       ${width * 0.05} ${height * 0.73}, 
       ${width * 0.2} ${height * 0.7}`}
                stroke="black"
                fill="transparent"
                strokeWidth="3"
            />

            <line x1={width * .2} y1={height * .7} x2={width * .8} y2={height * .7} stroke="black" strokeWidth="3" />


            <path
                d={`M ${width * 0.65} ${height * 0.1}
     C ${width * 0.80} ${height * 0.09}, 
       ${width * 0.80} ${height * 0.41}, 
       ${width * 0.65} ${height * 0.4}`}
                stroke="black"
                fill="transparent"
                strokeWidth="3"
            />
            <path
                d={`M ${width * 0.65} ${height * 0.7}
     C ${width * 0.80} ${height * 0.09}, 
       ${width * 0.80} ${height * 0.41}, 
       ${width * 0.65} ${height * 0.9}`}
                stroke="black"
                fill="transparent"
                strokeWidth="3"
            /> */}


            <text x="10" y="30" fill="black">Height: {height}px</text>
            <text x="10" y="50" fill="black">Width: {width}px</text>
        </svg>
    );
}

export default SvgContainer;
