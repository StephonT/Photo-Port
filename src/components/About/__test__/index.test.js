import React from 'react';

//Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
//The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import About from '..';

//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('About component', () => {
    //first test
    it('renders', ()=> {
        render(<About />);   
    });
    it('matches snapshot DOM node structure', () => {
     //asFragment function returns a snapshot of the About component   
        const { asFragment } = render(<About />); 
        expect(asFragment()).toMatchSnapshot();
    })
})