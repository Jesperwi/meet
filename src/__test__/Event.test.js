import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../mock-data';
import Event from '../Event';

describe("<Event /> component", () => {
let EventWrapper;

  beforeAll(() => {
    EventWrapper = shallow(<Event Event={mockData[0]} />);
  });

  test('the data is correct', () => {
    expect(EventWrapper).toHaveLength(1);   
  });

  test("event wrapping event div is rendered", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("event wrapping div just shows event", () => {
    expect(EventWrapper.find(".event").children()).toHaveLength(1);
  });

  test("eventContainer children are rendered", () => {
    expect(EventWrapper.find(".eventContainer").children()).toHaveLength(3);
  });

  test("eventContent--desc children are rendered", () => {
    EventWrapper.setState({
      opened: true,
    });
    expect(EventWrapper.find(".eventContent--desc")).toHaveLength(1);
  });

  test("show/hide that details button is rendered", () => {
    expect(EventWrapper.find(".eventButton")).toHaveLength(1);
  });

  test("click on button should show details", () => {
    EventWrapper.setState({
      opened: false,
    });
    EventWrapper.find(".eventButton").simulate("click");
    expect(EventWrapper.state("opened")).toBe(true);
  });
});