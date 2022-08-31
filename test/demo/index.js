/* eslint-disable  */
import React from 'react'
import { createRoot } from 'react-dom/client';
import { Button } from '../../src';


const container =  document.querySelector("#root");
const root = createRoot(container);

const App = () => {

    return <Button onClick={() => alert('eee')} label='helloss sssdworssssssssld'/>;
};


root.render(<App />);
