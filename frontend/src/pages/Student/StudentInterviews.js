import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Card from 'react-bootstrap/Card';
import { Accordion } from 'react-bootstrap';
import AccordionItem from '../../component/Accordion/accordion';

function StudentInterviews() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <div className='container pt-5'>


        <h2>Your Interview Schedule</h2><br />

          <Card body>
            <Calendar onChange={onChange} value={value} className="w-100 border-0"/>
          </Card><br/>

          <AccordionItem Header='Synopsys' body='Details about the calling'></AccordionItem>
          <AccordionItem Header='WSO2' body='Details about the calling'></AccordionItem>

      </div>
    </div>

  );
}




export default StudentInterviews;
