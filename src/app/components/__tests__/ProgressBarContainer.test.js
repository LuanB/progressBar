import React from 'react';

import { shallow, mount, render } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ProgressBarContainer from '../ProgressBarContainer';

const mockStore = configureMockStore();
const store = mockStore({});

describe('ProgressBarContainer component to render', () => {
  it('should render without throwing an error', () => {
    const wrapper = shallow(
      <Provider store={store}>
                      <ProgressBarContainer />
                     </Provider>
             );
          expect(wrapper).toHaveLength(1);

  });
});
