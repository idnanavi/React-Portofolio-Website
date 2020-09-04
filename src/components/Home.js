import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Home(){       
    
        return(
            <React.Fragment >
           
                <div className="headline" style={{marginTop:"80px"}}>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Image src={require('../assets/download.jpg')} rounded className="myphoto" />
                        </Col>
                        <Col md={8}>
                            <p className="mt-5 pt-4 text1">Hi,I am</p>
                            <h2 className="mb-4 text2" >Ivan Andi</h2>
                            <h3 className="jobtitle text3">Software Developer</h3>
                        </Col>
                    </Row>  
                </Container>
                </div>
                <div style={{backgroundColor:"#343A40",padding:"3px",marginTop:"80px"}} className="ido">
                <Container>
                <h1 style={{color:"#6DD5FA"}} className="activity">What I Do</h1>
                <hr/>
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <h3 style={{color:"white"}} className="activity">Software Development</h3>
                    <p className="activity" style={{color:"white"}}>My first Website that I created was my university lab project,I created simple website with HTML,CSS and a little Javascript code,since then I begin my interest in software development,I learn software development from my university,resources from internet,industrial experience and create my own project</p>    
                </Container>
                </div>
                <div className="who">
                    <Container>
                    <Row className="pl-5">
                    <Col md={6}>
                        <p className="text1">Who I am</p>
                        <h3 className="jobtitle">developer based on Jakarta</h3>
                        <p className="text3">Right now I majoring in Computer Science at Bina Nusantara University,I learn software development from my university and I always train my self with some project to enhance my skills in software development,also I have industrial experience at PT Bank Central Asia for joining internship program at my university</p>
                        <div className="social-links">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            <i className="fa fa-github" aria-hidden="true"></i>
                        </div>
                    </Col>
                        <Col md={6}>
                            <Image src={require('../assets/profile.jpg')} rounded className="myprofile" />
                        </Col>
                    </Row>
                    </Container>   
                </div>
                <div className="work" style={{backgroundColor:"#343A40",paddingLeft:"50px",paddingBottom:"50px"}}>
                <h1 style={{textAlign:"center",paddingBottom:"10px",color:"#6DD5FA"}}>My Work</h1>
                <hr/>
                   <Container>
                       <Row>
                           <Col md={4}>
                                <Card style={{ width: '18rem',backgroundColor:"lightgrey" }}>
                                    <Card.Img  variant="top" src={require('../assets/combo1.png')}/>
                                    <Card.Body>
                                        <Card.Title>The Special One</Card.Title>
                                        <Card.Text>
                                       Website for The Special One giftbox store,contain list of items and shopping cart system
                                        </Card.Text>
                                        <Button variant="secondary">Check out my project</Button>
                                    </Card.Body>
                                </Card>
                           </Col>
                           <Col md={4}>
                                <Card style={{ width: '18rem',backgroundColor:"lightgrey" }}>
                                    <Card.Img  variant="top"  src={require('../assets/combo2.png')} />
                                    <Card.Body>
                                        <Card.Title>Game Republica</Card.Title>
                                        <Card.Text>
                                        Website for Game Republica game store that help me run my own store
                                        </Card.Text>
                                        <Button variant="secondary">Check out my project</Button>
                                    </Card.Body>
                                </Card>
                           </Col>
                           <Col md={4}>
                                <Card style={{ width: '18rem',backgroundColor:"lightgrey" }}>
                                    <Card.Img variant="top" src={require('../assets/combo3.png')} />
                                    <Card.Body>
                                        <Card.Title>University Lab Project</Card.Title>
                                        <Card.Text>
                                            web that I created with HTML,CSS and a little of JavaScript for my lab university project purposes
                                        </Card.Text>
                                        <Button variant="secondary">Check out my project</Button>
                                    </Card.Body>
                                </Card>
                           </Col>
                       </Row>
                   </Container>
                </div>    
            </React.Fragment>
        );
}

export default Home;