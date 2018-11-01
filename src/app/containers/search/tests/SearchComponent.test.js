import { shallow, mount } from 'enzyme';
import * as enzyme from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import chai from 'chai';
import { expect as chaiExpect } from 'chai'
import chaiEnzyme from 'chai-enzyme'

import SearchComponent from '../'; 
import TableWrapper from '../../../shared/components/stateless/TableWrapper'

enzyme.configure({ adapter: new Adapter() })
const mockStore = configureMockStore();
const store = mockStore({});

describe('SearchComponent', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SearchComponent></SearchComponent>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders three <TableWrapper> components', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <SearchComponent></SearchComponent>
      </Provider>
    );
    chaiExpect(wrapper.find(TableWrapper)).to.have.lengthOf(0);
  })
});

chai.use(chaiEnzyme()) 