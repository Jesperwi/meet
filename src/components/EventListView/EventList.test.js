import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../../mock-data'
import EventList from './EventList';
import Event from '../EventsView/Event';

describe('<EventList /> component', () => {
    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={[{ id: 1 }, { id: 2 }]} />
            );
        expect(EventListWrapper.find(Event)).toHaveLength(2);
    });
    
    test('render correct number of event', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
      });
});
