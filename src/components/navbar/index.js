import React from 'react'

export default function NavBar() {
    return (
        <div className='container-fluid mb-5'>
            <div className='row text-white'>
                <div className='col-8 bg-blue pt-3 pb-2'>
                    <p className='ms-5'>Your Trusted 24 Hours Service Provider!</p>
                </div>
                <div className='col-4 bg-warning pt-3 pb-2'>
                    <i className="bi bi-telephone ms-4 "></i>
                    <span className='ms-3'>Talk To Expert : 0 (142) 873 6428</span>
                </div>
            </div>
            <div className='row bg-grey p-5'>
                <div className='col-4'>
                    <div className='text-center' style={{marginTop:'-30px'}}>
                        <i className="bi bi-house-heart mt-4 f-size-50"></i>
                        <h5 className='fw-bolder'>ONDEMANDSEV</h5>
                    </div>
                </div>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='mt-2 d-flex align-center'>
                                <i className="bi bi-geo-alt text-warning mx-3 mt-1 f-size-30 fa-lg"></i>
                                <div>
                                    <h6 className='fw-bolder'>Call Us</h6>
                                    <span>(142) 873 6428</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='mt-2 d-flex align-center'>
                                <i className="bi bi-envelope text-warning mx-3 mt-1 f-size-30 fa-lg"></i>
                                <div>
                                    <h6 className='fw-bolder'>Email</h6>
                                    <span >info@ondemandsev.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='mt-2 d-flex align-center'>
                                <i className="bi bi-telephone-fill text-warning mx-3 mt-1 f-size-30 "></i>
                                <div>
                                    <h6 className='fw-bolder'>Address</h6>
                                    <span >xyz,chennai.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
