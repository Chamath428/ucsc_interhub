import teamwork from '../../../assets/images/header-teamwork.svg';
import HomeNavBar from '../HomeNavBar/homeNavBar';
import PrimaryButton from '../PrimaryButton/primaryButtonClass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./homeHeaderStyles.css";


function HomeHeader() {
    return (
        <>
            <div className="hero">
            {/* <HomeNavBar></HomeNavBar> */}
            <Container>   
                <Row id="row"  className="pt-5 justify-content-md-center">
                    <Col lg="6" id="text-col" className="pt-3 d-flex flex-column justify-content-center align-items-start">
                        <div><h1>Welcome to UCSC InterHub</h1></div>
                        <div><p className="p-large">Best place to start your career</p></div>
                        <div><a href="#howDoesItWork"><PrimaryButton inside="DISCOVER"></PrimaryButton></a></div>
                    </Col>
                        
                    <Col lg="6">
                        <img className="pt-3 img-fluid" src={teamwork} alt="teamwork"/>
                    </Col>
                </Row>                
            </Container>
            </div>
        </>
      );
}

export default HomeHeader;