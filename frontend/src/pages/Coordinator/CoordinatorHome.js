import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import CoordinatorCard from '../../component/Dashboard/CoordinatorCard/coordinatorCard';
import '../../styles/CoordinatorHome.css'


class CoordinatorHome extends Component {

    render() {
        return (
            <div className='cart-contain'>
                <div>
                    <CoordinatorCard cardPara='285 registered' cardTitle='View Students'></CoordinatorCard>

                </div>
                <div>
                    <CoordinatorCard cardPara='50 registered' cardTitle='View Companies'></CoordinatorCard>

                </div>
                <div>
                    <CoordinatorCard cardPara='240 enrolled' cardTitle='Manage Interns'></CoordinatorCard>

                </div>
                <div>
                    <CoordinatorCard cardPara='6 posts' cardTitle='Post announcement'></CoordinatorCard>

                </div>
            </div>




        );
    }

}

export default CoordinatorHome;