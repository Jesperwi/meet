import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';
import { loadFeature, defineFeature } from 'jest-cucumber';



const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
        given('the list of events has been loaded', () => {
        AppWrapper = mount(<App />);
      });    
      when('the user did not click the Show Details yet', () => {
        AppWrapper = mount(<App />);
      });
  
      then('the event element content is not shown', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      });
    });
  
    test('User can open the event to see the content', ({ given, when, then }) => {
        let AppWrapper;
        given('the app is loaded', () => {
            AppWrapper = mount(<App />);
        });
    
        when('the user clicks the Show Details button', () => {
            AppWrapper.find('.details-btn').at(0).simulate('click');
          });
  
          then('the event content should show', () => {
            expect(AppWrapper.find('.event .info')).toHaveLength(2);
          });
    });

    test('User can hide the event details by pressing the button', ({ given, and, when, then }) => {
        let AppWrapper;
        given('the app is loaded', async () => {
          AppWrapper = await mount(<App />);
          AppWrapper.find('.city').at(1).simulate('change', { target: { value: 'Berlin' } });
        });
        and('event element is expanded and shows detail', () => {
            AppWrapper.update();
            AppWrapper.find('.details-btn').at(0).stimulate('click');
            expect(AppWrapper.find('.event .info')).toHaveLength(1);
          });
          when('the user clicks the Hide Details button', () => {
            AppWrapper.find('.event .details-btn').at(0).simulate('click');
          });
          then('the content of the event bar should be hidden', () => {
            expect(AppWrapper.find('.event .info')).toHaveLength(0);
          });
    });
});