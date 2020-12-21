import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe("<Event />", () => {
let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event Event={mockData[0]} />);
  });

  test('the data is correct', () => {
    expect(EventWrapper).toHaveLength(1);   
  });

  test("event wrapping div just shows event", () => {
    expect(EventWrapper.find(".event").children()).toHaveLength(0);
  });

  test("show/hide that details button is rendered", () => {
    expect(EventWrapper.find(".details-btn")).toHaveLength(0);
  });
});