import { useState } from 'react';

import { MyElm1 } from './components/MyElm1';
import { MyElm2 } from './components/MyElm2';

import './App.css'

function App() {
    const [elm2Counter, setElm2Counter] = useState<number>(0);

    function handleOnClickElm1(_: React.MouseEvent<SVGElement>): void {
        setElm2Counter((n: number) => n+1);
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
                        clickedCounter={elm2Counter}
                    />
                </g>
            </svg>
        </>
    )
}

export default App
