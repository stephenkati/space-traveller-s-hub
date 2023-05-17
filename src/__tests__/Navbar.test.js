import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('tests for Navigation menu', () => {
  test('snapshot for Navbar component', () => {
    const component = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
