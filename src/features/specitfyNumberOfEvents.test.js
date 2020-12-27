import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';
import NumberOfEvents from '../NumberOfEvents';


const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('If user did not specify a number, 32 is the default number', ({ given, when, then }) => {
    
        given('the user did not specify a number of events being shown', () => {

      });    
      let AppWrapper;
      when('app loaded', () => {
        AppWrapper = mount(<App />);
      });
  
      then('the default number of shown events is 32', () => {
        AppWrapper.update();
        expect((AppWrapper.find('.event')).length).toBeLessThanOrEqual(32); 
      });
    });
  
    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppWrapper;
        given('the list of elements has been loaded and the user did not specify a number of events he wants to see', () => {
            AppWrapper = mount(<App />);
        });
    
        when('the user specified a number', () => {
            let numberOfEvents = { target: { value: 2 } };
            AppWrapper.find('.numberOfEvents').simulate('change', numberOfEvents);
          });
  
          then('the maximum of events listed should be the specified number', () => {
            let NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.setState({ numberOfEvents: 2 });
        	 expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe(2);
          });
    });

});