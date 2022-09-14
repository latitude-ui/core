/* eslint-disable  */
import React from 'react'
import { createRoot } from 'react-dom/client';
import { Button, Radio, Input } from '../../src';


const container =  document.querySelector("#root");
const root = createRoot(container);

const App = () => {

    return <React.Fragment>
        <Button onClick={() => alert('eee')} label='helloss sssdworssssssssld'/>;
        <Radio />
    </React.Fragment>
};


root.render(<App />);
