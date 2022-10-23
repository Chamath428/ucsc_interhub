import Button from 'react-bootstrap/Button';
import InfoCard from '../../component/Dashboard/InfoCard/infoCard'; 
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addDays } from 'date-fns';
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';

function StudentAvailability() {
  const [value, onChange] = useState(new Date());
  const [state, setState] = useState({
    selection1: {
        startDate: addDays(new Date(), 1),
        endDate: null,
        key: 'selection1'
    },
    selection2: {
        startDate: addDays(new Date(), 4),
        endDate: addDays(new Date(), 8),
        key: 'selection2'
    },
    selection3: {
        startDate: addDays(new Date(), 8),
        endDate: addDays(new Date(), 10),
        key: 'selection3',
        autoFocus: false
    }
    });
  return (
    <div>
        <div>

        <h3>Set Your Availability</h3><br />

          <Row>
            <Col sm={7}>
                {/* documentation: https://github.com/wojtekmaj/react-datetimerange-picker */}
                <DateTimeRangePicker onChange={onChange} value={value} />

                {/* <AvailabilityPicker
                onChange={item => setState({ ...state, ...item })}
                ranges={[state.selection1, state.selection2, state.selection3]}
                />; */}
              
            </Col>
            
            <Col sm={5} style={{width:'100%'}} >

              <Card body className='mx-2'>
                <Calendar onChange={onChange} value={value} className="w-100 border-0"/> 
              </Card>

              <div className='d-flex pt-4 justify-content-between' >

                  <InfoCard title='Total Callings' count='05' icon='calendar-event' cardWidth='12'></InfoCard> 

              </div>

              <div className='d-flex pt-4 justify-content-between' >
               
                  <InfoCard title='Callings in this week' count='05' icon='telephone-inbound-fill' cardWidth='12' className='border-1'></InfoCard> 
              </div>

            </Col>
          </Row>



      </div>
    </div>

  );
}

export default StudentAvailability;

