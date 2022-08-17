import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MockAppComponent from '../__mocks__/App';
import * as Redux from '../redux/MostRecent/MostRecent';
import '@testing-library/jest-dom';
import mostRecent from '../__mocks__/mostRecent';

jest.spyOn(Redux, 'fetchMostRecentHotels')
  .mockImplementation(() => (Redux.success(mostRecent)));

describe('Render App', () => {
  test('Assert snapshot', () => {
    const appSnap = renderer.create(
      <BrowserRouter>
        <MockAppComponent />
      </BrowserRouter>,
    ).toJSON();
    expect(appSnap).toMatchSnapshot();
  });
});
