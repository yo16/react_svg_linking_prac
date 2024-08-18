import { useState } from 'react';

import { MyElm1 } from './components/MyElm1';
import { MyElm2 } from './components/MyElm2';
import { MyElm3 } from './components/MyElm3';
import { MyElm4 } from './components/MyElm4';
import { MyElm5 } from './components/MyElm5';

import './App.css'

function App() {
    const [clickedCounter, setClickedCounter] = useState<number>(0);

    function handleOnClickElm1(_: React.MouseEvent<SVGElement>): void {
        setClickedCounter((n: number) => n+1);
    }

    return (
        <>
            <svg>
                <g
                    transform='translate(50, 50)'
                >
                    <MyElm1
                        onClick={handleOnClickElm1}
                    />
                </g>
                <g
                    transform='translate(100, 100)'
                >
                    <MyElm2
                        isSwitchOn={clickedCounter%2!==0}
                    />
                </g>
                <g
                    transform='translate(100, 150)'
                >
                    <MyElm3
                        isSwitchOn={clickedCounter%2!==0}
                    />
                </g>
                <g
                    transform='translate(50, 80)'
                >
                    <MyElm4
                        isSwitchOn={clickedCounter%2!==0}
                    />
                </g>
                <g
                    transform='translate(100, 300)'
                >
                    <MyElm5
                        isSwitchOn={clickedCounter%2!==0}
                    />
                </g>
            </svg>
        </>
    )
}

export default App
