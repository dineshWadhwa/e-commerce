import React from 'react'

const Footer = () => {
    return (
        <>
            <hr />
            <div className="container-fluid text-center">
                <div className="row">
                    <div className="col-4"><h5>CUSTOMER SERVICE</h5><br />
                    <h6>Contact Us</h6>
                    <h6>Sell With Us</h6>
                    <h6>Shipping</h6>
                    {/* <div className="ver"></div> /} */}
                    </div>
                    <div className="col-4"><h5>LINKS</h5><br />
                    <h6>Contact Us</h6>
                    <h6>Sell With Us</h6>
                    <h6>Shipping</h6>
                    </div>
                    <div className="col-4"><h5>NEWSLETTER</h5><br />
                    <h6>Sign Up for Our Newsletter</h6>
                    <input  className='px-2' type="text" placeholder='please enter your email' />
                    </div>
                    <div className="container text-center">
                         &copy;  2022 MERN Store <br />
                         {/* {/ <h2><i class="fa-brands fa-facebook"></i></h2>
                         <h2><i className="fa-brands fa-instagram"></i></h2> */}
                         <div class="d-flex flex-row bd-highlight mb-3 justify-content-center">
                        <div class="p-2 bd-highlight"><h2><i class="fa-brands fa-facebook"></i></h2></div>
                        <div class="p-2 bd-highlight"><h2><i className="fa-brands fa-instagram"></i></h2></div>
                        <div class="p-2 bd-highlight"><h2><i class="fa-brands fa-pinterest"></i></h2></div>
                        <div class="p-2 bd-highlight"><h2><i class="fa-brands fa-twitter"></i></h2></div>
                        </div>



                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer