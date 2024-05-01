import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram} from 'react-icons/bs';

function Footer() {
  return (
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 alig-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className='mb-0 text-white'>Sing Up for News Letter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Your Email Address" 
                  aria-label="Your Email Address" 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div className='footer-links d-flex flex-column'>
                <address className="text-white fs-6">
                  Fontibon <br /> Bogota DC <br /> Colombia <br />
                  Postal Code: 110911
                </address>
                <a href="tel: +573180000" className="mt-3 b-block mb-1 text-white">
                  +573180000
                </a>
                <a href="mailto:enrojass04@gmail.com" className="mt-2 b-block m-0 text-white">
                  enrojass04@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsGithub className='fs-4'/>
                  </a>
                  <a className='text-white' href="">
                    <BsYoutube className='fs-4'/>
                  </a>
                </div>                
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Term & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About US</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}, Powered by enrojass
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer