import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {

    it('renders', () => {
        const { getByTestId } = render(<Contact />);
      expect(getByTestId('contactH1Tag')).toHaveTextContent('Contact me')
      expect(getByTestId('submitButton')).toHaveTextContent('Submit')
    });

    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
          expect(asFragment()).toMatchSnapshot();
      });
})

