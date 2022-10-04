/* eslint-disable  */
import React from 'react'
import { createRoot } from 'react-dom/client';
import { Button, Radio, Input, Text, Container, LatitudeProvider, makeStyle } from '../../src';


const container =  document.querySelector("#root");
const root = createRoot(container);

// const App = () => {

//     return <React.Fragment>
//         <Button onClick={() => alert('eee')} label='helloss sssdworssssssssld'/>;
//         <Radio />
//     </React.Fragment>
// };


// const App = () => {

//     return <>
//         <Text type="h1">Headline 1</Text>
//         <Text type="h2">Headline 2</Text>
//         <Text type="h3">Headline 3</Text>
//         <Text type="h4">Headline 4</Text>
//         <Text type="h5">Headline 5</Text>
//         <Text type="h6">Headline 6</Text>
//         <Text type="body1">body 1</Text>
//         <Container />
//     </>
// }


const App = () => {

    makeStyle();

    return <LatitudeProvider>
        <h1>hello world</h1>
    </LatitudeProvider>
}

root.render(<App />);