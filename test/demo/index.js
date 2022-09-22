/* eslint-disable  */
import React from 'react'
import { createRoot } from 'react-dom/client';
import { Button, Radio, Input, Typography } from '../../src';


const container =  document.querySelector("#root");
const root = createRoot(container);

// const App = () => {

//     return <React.Fragment>
//         <Button onClick={() => alert('eee')} label='helloss sssdworssssssssld'/>;
//         <Radio />
//     </React.Fragment>
// };


const App = () => {

    return <>
        <Typography type="h1">Headline 1</Typography>
        <Typography type="h2">Headline 2</Typography>
        <Typography type="h3">Headline 3</Typography>
        <Typography type="h4">Headline 4</Typography>
        <Typography type="h5">Headline 5</Typography>
        <Typography type="h6">Headline 6</Typography>
    </>
}

root.render(<App />);
