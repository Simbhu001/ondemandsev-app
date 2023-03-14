import React from 'react'
import ImgOne from '../../assets/image-one.png'
import Ac from '../../assets/ac.png'
import ImgTwo from '../../assets/image-two.png'
import UserImg from '../../assets/user.jpeg'
import GrayImg from '../../assets/gray.jpeg'
import YellowImg from '../../assets/yellow.jpeg'

export default function Home() {

    const cards = [
        {
            title: 'A Filter Service',
            des: 'Who use indoor Air quality monitoring service came to us for that reason',
            path: 'https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg'
        },
        {
            title: 'A Filter Service',
            des: 'Who use indoor Air quality monitoring service came to us for that reason',
            path: 'https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg'
        },
        {
            title: 'A Filter Service',
            des: 'Who use indoor Air quality monitoring service came to us for that reason',
            path: 'https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg'
        },
    ];

    return (
        <>
            <div className='container mb-3 card top-nav-shadow' style={{ marginTop: '-80px', height: '80px', width: '70%' }}>
                <div className='row'>
                    <div className='col-12'>
                        <ul className="d-flex justify-content-around align-items-center list-unstyled mt-3 ">
                            <li>
                                <a className="nav-link " href="##" >Services</a>
                            </li>
                            <li>
                                <a className="nav-link" href="##">Help</a>
                            </li>
                            <li>
                                <a className="nav-link" href="##">Register As Professional</a>
                            </li>
                            <li>
                                <a className="nav-link " href="##" >Login/SignUp</a>
                            </li>
                            <li>
                                <i className='bi bi-search'></i>
                            </li>
                            <li>
                                <button className=' radious-30'>Appointment</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-7 p-5'>
                        <div className='row mx-5'>
                            <h1>Home Service, On Demand</h1>
                        </div>
                        <form>
                            <div className='row mx-5 mt-5'>
                                <div className='col-md-2'>
                                    <select className='form-control input-shadow'>
                                        <option selected={true}>INDIA</option>
                                        <option>US</option>
                                        <option>Two</option>
                                        <option>Four</option>
                                    </select>
                                </div>
                                <div className='col-md-10' style={{ position: 'relative' }}>
                                    <input className='form-control input-shadow' placeholder='    Search for services' />
                                    <i className='bi bi-search' style={{ margin: '-30px 0px 0px 10px', position: 'absolute' }}></i>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-5'>
                        <img src={ImgOne} alt='' width="80%" className='img-thumbnail' />
                    </div>
                </div>
            </div>
            <br /><br />
            <div className='container bg-light'>
                <div className='row mx-5'>
                    <div className='col-md-3  p-4 bg-warning'>
                        <div className='row '>
                            <div className='col-md-4 text-center fw-bolder f-size-50 '>25</div>
                            <div className='col-md-8 text-start pt-2 mt-2 fw-bolder'>Years <br /> of experience </div>
                        </div>
                    </div>
                    <div className='col-md-9 bg-blue text-white p-4'>
                        <h5 className='fw-bold mb-3'>
                            Have questions? +1(245) 254 695 325
                        </h5>
                        <p>
                            Our 24 x 7 desk always available into your help.
                            You can Have solutions ofyour all kind quires related to our product and services.
                            Rather you can leave email.
                        </p>
                    </div>
                </div>
            </div>
            <div className='container bg-light p-4'>
                <div className='row'>
                    <div className='row text-center p-5'>
                        <div className='col-2'></div>
                        <div className='col-8'>
                            <h5 className='mt-3'>ABOUT OUR WORKS</h5>
                            <h4 className='mt-3'>Advanced Conditioning Services</h4>
                            <p className='mt-3'>We are running conditioning firm since five decades.As time passes we are going getting  more
                                advanced as technology is changing everyday.
                            </p>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div className='row '>
                        {
                            cards.map((card, index) => {
                                return (
                                    <div className='col-md-4 d-flex align-center justify-content-center' key={index}>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={card.path} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title  text-warning">{card.title}</h5>
                                                <p className="card-text">{card.des}</p>
                                                <a href='*' className='text-dark text-decoration-none fw-bold'>Learn More <i className="bi bi-arrow-right-circle-fill text-warning"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='container mt-5 bg-light p-4'>
                <div className='row'>
                    <div className='col-6 pt-5 text-start '>
                        <div className='border-bottom pb-4'>
                            <h4 className='fw-bold mt-3'>WHY CHOOOSE US?</h4>
                            <h6 className='fw-bold mt-4'>Heating & Air Conditioning Repair & Initiallation Company</h6>
                            <p className=' mt-4'>
                                we are expecting servicing heating and air  conditioniing also foundars of this Elite Directory
                                we mathch property owners with the top local, well verified neighbourhood cooling company.
                            </p>
                        </div>
                        <div className='row  d-flex '>
                            <div className='col-6 pb-4 border-bottom d-flex mt-4 '>
                                <img src={Ac} alt='' className='color-warning' />
                                <div className='ms-2 fw-bold'>
                                    <h6 className=' fw-bold'>Online Scedule</h6>
                                    <h5 className=' fw-bold'>Power Solutions</h5>
                                </div>
                            </div>
                            <div className='col-6 pb-4 border-bottom d-flex mt-4'>
                                <img src={Ac} alt='' className='color-warning' />
                                <div className='ms-2 fw-bold'>
                                    <h6 className=' fw-bold'>Online Scedule</h6>
                                    <h5 className=' fw-bold'>Power Solutions</h5>
                                </div>
                            </div>
                        </div>
                        <div className='row  d-flex '>
                            <div className='col-6 pb-4 d-flex flex-column mt-4 '>
                                <p>some times an old air  conditioning unit needs to be replavced for cost,
                                    efficiency,or other reasons.
                                </p>
                                <a href='*' className='btn btn-outline-secondary text-dark text-decoration-none fw-bold mt-5'>Learn More <i className="bi bi-arrow-right-circle-fill text-warning"></i></a>
                            </div>
                            <div className='col-6 pb-4 d-flex mt-4'>
                                <p>some times an old air  conditioning unit needs to be replavced for cost,
                                    efficiency,or other reasons.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 '>
                        <img src={ImgTwo} alt='' height={'100%'} width='100%' className='mx-3' />
                    </div>
                </div>
            </div>
            <div className='container mt-5 bg-light p-4'>
                <div className='row'>
                    <div className='col-md-3'>
                        <i className="bi bi-people-fill f-size-100 icon-opacity"></i>
                        <div style={{ marginTop: '-100px' }}>
                            <h1>758</h1>
                            <h6>Happy Clients</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <i className="bi bi-person-hearts f-size-100 icon-opacity"></i>
                        <div style={{ marginTop: '-100px' }}>
                            <h1>1230</h1>
                            <h6>Customers</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <i className="bi bi-buildings-fill f-size-100 icon-opacity"></i>
                        <div style={{ marginTop: '-100px' }}>
                            <h1>101</h1>
                            <h6>Our Branches</h6>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <i className="bi bi-check-circle-fill f-size-100 icon-opacity "></i>
                        <div style={{ marginTop: '-100px' }}>
                            <h1>2507</h1>
                            <h6>Successfully</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-blue'>
                <div className='row mt-5 text-white p-5'>
                    <div className='col-5'></div>
                    <div className='col-7'>
                        <h6 className='mt-4'>Test Monials</h6>
                        <h5 className='mt-4 fw-bold'>Happy Clients say's About Our Company</h5>
                        <p className='mt-4'>Experiance how easy it is to hire safe, Quality proffesitionals to solves
                            all your servies installation needs. Look what they say.
                        </p>
                    </div>
                </div>
            </div>
            <div className='ms-5' style={{ marginTop: '-150px', position: 'relative', width: '90%' }}>
                <img src='https://media.istockphoto.com/id/590277932/photo/nothing-is-better-than-team-work.jpg?s=612x612&w=0&k=20&c=ZU5PmR6RXaTp4PgwfUTmOuTJw00gLQ8PRGUQGRSzwbE=' alt='' width={'400px'} />
                <div className="card shadow-lg p-5" style={{ position: 'absolute', left: '40%', right: '0%', top: '100px', with: '600px' }}>
                    <h1>Wonderful Experience</h1>
                    <p>They were very thorough and did not mind answering my questions about the new units.
                        I will recommend One Hour Heating & Air Conditioning to my friends. I enjoyed the crew
                        and the teamwork they displayed was unmatched.</p>
                </div>
            </div>
            <br />
            <br />
            <div className='text-center mt-5'>
                <h1>Meet Our OndemandServ Experts</h1>
                <p style={{ maxWidth: '600px', margin: 'auto' }}>
                    Our firm is blessed with the best support and front team, Skilled professionals and technician
                    is all way ready to help clients with their best efforts. They run our firm.
                </p>
            </div>
            <br /> <br />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='card text-center' style={{ margin: 'auto', position: 'relative', height: '300px', width: "250px", backgroundColor: 'whitesmoke' }}>
                            <img src={UserImg} alt='' height='100' width='100' style={{ margin: 'auto', marginTop: '50px' }} />
                            <div style={{ position: 'absolute', top: '60%', left: '40%', zIndex: '1000' }}>
                                <h6 className='text-dark fw-bold'>RAJESH</h6>
                                <h6 className='text-secondary'>Founder</h6>
                            </div>
                            <img src={GrayImg} alt='' height='80' width='150' style={{ bottom: '0', right: '0', position: 'absolute' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card text-center' style={{ margin: 'auto', position: 'relative', height: '300px', width: "250px", backgroundColor: 'whitesmoke' }}>
                            <img src={UserImg} alt='' height='100' width='100' style={{ margin: 'auto', marginTop: '50px' }} />
                            <div style={{ position: 'absolute', top: '60%', left: '40%', zIndex: '1000' }}>
                                <h6 className='text-dark fw-bold'>RAJESH</h6>
                                <h6 className='text-secondary'>Co - Founder</h6>
                            </div>
                            <img src={YellowImg} alt='' height='80' width='150' style={{ bottom: '0', right: '0', position: 'absolute' }} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='card text-center' style={{ margin: 'auto', position: 'relative', height: '300px', width: "250px", backgroundColor: 'whitesmoke' }}>
                            <img src={UserImg} alt='' height='100' width='100' style={{ margin: 'auto', marginTop: '50px' }} />
                            <div style={{ position: 'absolute', top: '60%', left: '40%', zIndex: '1000' }}>
                                <h6 className='text-dark fw-bold'>RAJESH</h6>
                                <h6 className='text-secondary'>Founder</h6>
                            </div>
                            <img src={YellowImg} alt='' height='80' width='150' style={{ bottom: '0', right: '0', position: 'absolute' }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
