import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

describe("Contact component", () => {
    it('renders', () => {
        render(<Contact />)
    });
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />)
        expect(asFragment()).toMatchSnapshot()
      });
})

afterEach(cleanup);