import { shallow, mount } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import HomeComponent from '../'; 

enzyme.configure({ adapter: new Adapter() })
const mockStore = configureMockStore();
const store = mockStore({});

describe('HomeComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <HomeComponent></HomeComponent>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});