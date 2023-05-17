import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from '../components/Pages/Profile';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('tests for profile file', () => {
  test('snapshot test for profile component', () => {
    const component = render(
      <BrowserRouter>
        <Provider store={store}>
          <Profile />
        </Provider>
      </BrowserRouter>,
    );

    expect(component).toMatchSnapshot();
  });
});
