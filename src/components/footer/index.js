import React from 'react'

export default function Footer() {
    return (
        <div className='bg-blue pt-5 text-white mt-5'>
            <div className='container'>
                <div className='row border-bottom pb-4'>
                    <div className='col-6 px-5'>
                        <i className="bi bi-house-heart mt-4 f-size-50"></i>
                        <h6 className='mt-1'>ONDEMANDSEV</h6>
                        <p className='mt-4 '>Ondemandsev, servicde is proud to have serve commercial and residential customers
                            worldwide since 1970.
                        </p>
                        <div className='mt-4'>
                            <i className="bi bi-facebook f-size-30"></i>
                            <i className="bi bi-twitter ms-3 f-size-30"></i>
                            <i className="bi bi-instagram ms-3 f-size-30"></i>
                            <i className="bi bi-pinterest ms-3 f-size-30"></i>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row ms-3 p-4'>
                            <div className='border border-white pt-3'>
                                <p>Subscribe our newsletter</p>
                                <div className='row d-flex flex-column gap-2'>
                                    <div className='form-group col-8 px-3'>
                                        <input
                                            className='form-control mt-2 border-0 border-bottom-1'
                                            placeholder='Enter the Email'
                                        />
                                    </div>
                                    <div className='d-flex justify-content-end mb-4 '>
                                        <button className='radious-30 text-white mt-2 col-4 '>Subscribe Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row mt-4 border-bottom pb-4'>
                    <div className='col-3'>
                        <h6>Company Link</h6>
                        <ul className="list-unstyled mt-3">
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                About
                            </li>
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                Help
                            </li>
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                Resource
                            </li>
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                Research
                            </li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <h6>Our Services</h6>
                        <ul className="list-unstyled mt-3">
                            <li>
                                <i className="bi bi-caret-right-fill text-warning p-2"></i>
                                Maintence and Repairs
                            </li>
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                AC Replacenents
                            </li>
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                Home Cleaning
                            </li>
                            <li>
                                <i class="bi bi-caret-right-fill text-warning p-2"></i>
                                Installation
                            </li>
                        </ul>
                    </div>
                    <div className='col-3'>
                        <h6>Follow Instagram</h6>
                        <div className='row mt-3'>
                            <div className='row'>
                                <img className='col-6 p-1' src='https://media.istockphoto.com/id/590277932/photo/nothing-is-better-than-team-work.jpg?s=612x612&w=0&k=20&c=ZU5PmR6RXaTp4PgwfUTmOuTJw00gLQ8PRGUQGRSzwbE=' alt='' height='70px' width={'70px'} />
                                <img className='col-6 p-1' src='https://www.shutterstock.com/image-photo/group-young-janitors-uniform-cleaning-260nw-1389199019.jpg' alt='' height='70px' width={'70px'} />
                            </div>
                            <div className='row'>
                                <img className='col-6 p-1' src='https://image.shutterstock.com/image-photo/woman-using-sponge-detergent-floor-260nw-1431968477.jpg' alt='' height='70px' width={'70px'} />
                                <img className='col-6 p-1' src='https://img.freepik.com/free-photo/disinfecting-home_155003-9129.jpg' alt='' height='70px' width={'70px'} />
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <h6>Contact Us</h6>
                        <p className='mt-3'>Lorem ipsum was purposefully
                            designed to have no meaning.
                        </p>
                        <div className='mt-2'>
                            <i className="bi bi-telephone-fill text-warning"></i>
                            <span className="ms-3">+9189345734</span>
                        </div>
                        <div className='mt-2'>
                            <i className="bi bi-geo-alt text-warning"></i>
                            <span className="ms-3">12,Chennai.</span>
                        </div>
                        <div className='mt-2'>
                            <i className="bi bi-envelope text-warning"></i>
                            <span className="ms-3">info@ondemandsev.com</span>
                        </div>
                    </div>
                </div>
                <div className='row mt-3 p-2'>
                    <p className='text-center'>Copyright @ 2023 ondemandsev. All rights reserved. powered by coderzbot.</p>
                </div>
            </div>
        </div>
    )
}
