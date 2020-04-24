import React from 'react'
import {Link} from 'react-router-dom'
import Testimonials from '../components/testimonials/Testimonials'
import '../assets/css/custom.css'
import Navbar from '../components/widgets/navbar/Transparent-nav'

const Home=()=> {
    return (
        <div>
        <header id="home">
          <div className="overlay" />
          <Navbar />
            <div className="tophead">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7  ">
                  <h1 className="title-main wow fadeInLeft text-white" data-wow-duration="1.5s">Guarantees for the if in life.</h1>
                  <h3 className="subtitle-main wow fadeInUp text-white" data-wow-duration="1.1s">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus.</h3>
                  <div className="top-btn-block wow fadeInUp">
                    <Link to="/signup" className="btn-explore text-white">Create Account</Link>
                  </div>
                </div>
              </div>
            </div>
            </div>
          
          
          <div className="sesgoabajo" />
        </header>
        <main>
          <section id="stats" className="pt-3">
            <section className="overview-wrap" id="overview">
              <div className="container shadow-none">
                <div className="contenedor">
                  <h2 className="title-overview wow fadeInUp">Overview</h2>
                  <p className="subtitle-overview wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</p>
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3  wow bounceInUp" data-wow-duration="1.4s">
                      <div className="overview-box mx-auto">
                        <div className="features-icons-icon ">
                          <h1 className="text-voilet text-center"><b>200</b></h1>
                        </div>
                        <h5>CLIENTS</h5>
                        <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                      <div className="overview-box mx-auto">
                        <div className="features-icons-icon">
                          <h1 className="text-voilet text-center"><b>20</b></h1>
                        </div>
                        <h5>INTERMEDIARIES</h5>
                        <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                      <div className="overview-box mx-auto">
                        <div className="features-icons-icon">
                          <h1 className="text-voilet text-center"><b>30</b></h1>
                        </div>
                        <h5>UNDERWRITERS</h5>
                        <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 wow bounceInUp" data-wow-duration="1.4s">
                      <div className="overview-box mx-auto">
                        <div className="features-icons-icon">
                          <h1 className="text-voilet text-center"><b>80</b></h1>
                        </div>
                        <h5>CLOSED DEALS</h5>
                        <p className=" mb-0">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo ornare!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="testimonials-wrap" id="testimonials">
              <div className="sesgoarriba" />
              <div className="container shadow-none">
                <div className="contenedor">
                  <h2 className="title-testimonials wow fadeInUp">Happy Clients</h2>
                  <h3 className="subtitle-testimonials wow fadeInUp">Lorem ipsum dolor sit amet consectetur adipiscing elit proin leo leo ornare nec vulputate tempus velit nam id purus tellus hendrerit mi dapibus</h3>
                  </div>
                  
                  {/* banner starts */}
                  <Testimonials/>
                </div>
              
            </section>
          </section></main>
        <footer id="footer" className="footer text-white text-left">
          {/* Footer Widgets */}
          <div className="footer-widgets">
            <div className="footer-widgets__inner pt-5">
              <div className="container shadow-none">
                <div className="row ">
                  <div className="col-sm-6 col-md-3">
                    <div className="footer-col-inner">
                      {/* Footer Logo */}
                      <div className="footer-logo footer-logo--has-txt">
                      </div>
                      {/* Footer Logo / End */}
                      {/* Widget: Contact Info */}
                      <div className="widget widget--footer widget-contact-info">
                        <div className="widget__content">
                          <div className="footer-logo__heading">
                            <h5 className="footer-logo__txt">
                              <a href="index.html" className="text-white"><span className="text-white">Nexus</span>Insurance</a></h5>
                          </div>
                          <div className="widget-contact-info__desc pt-3">
                            <p>Lorem ipsum dolor sit amet, consectetur cing elit, sed do eiusmod tempor incididunt uten labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                          </div>
                          <div className="widget-contact-info__body info-block">
                            <div className="info-block__item">
                            </div>
                            <div className="info-block__item">
                              <div className="footer-logo footer-logo--has-txt">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Widget: Contact Info / End */}
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 ">
                    <div className="footer-col-inner">
                      {/* Widget: Popular Posts / End */}
                      <div className="widget widget--footer widget-popular-posts">
                        <h5 className="widget__title text-white">Visit Us</h5>
                        <div className="widget__content">
                          <ul className="social-links d-flex pt-3">
                            <li className="social-links__item mr-3">
                              <a href="#" className="social-links__link">
                                {/*?xml version="1.0" encoding="UTF-8"?*/}
                                <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  {/* Generator: Sketch 58 (84663) - https://sketch.com */}
                                  <title>Youtube</title>
                                  <desc>Created with Sketch.</desc>
                                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Homepage" transform="translate(-490.000000, -4224.000000)">
                                      <g id="Youtube" transform="translate(490.352055, 4224.000000)">
                                        <rect id="BG" fill="#FE0000" x={0} y={0} width="39.0720391" height="39.0720391" rx={4} />
                                        <path d="M17.1433994,21.5384615 L17.1428571,16.8498168 L21.8315018,19.2022222 L17.1433994,21.5384615 Z M27.5282051,15.86181 C27.5282051,15.86181 27.3676923,14.7134493 26.8758974,14.207754 C26.2517949,13.5437359 25.5523077,13.5406111 25.2317949,13.502072 C22.9353846,13.3333333 19.4907692,13.3333333 19.4907692,13.3333333 L19.4835897,13.3333333 C19.4835897,13.3333333 16.0389744,13.3333333 13.7425641,13.502072 C13.4215385,13.5406111 12.7225641,13.5437359 12.0979487,14.207754 C11.6061538,14.7134493 11.4461538,15.86181 11.4461538,15.86181 C11.4461538,15.86181 11.2820513,17.2106781 11.2820513,18.5590254 L11.2820513,19.8235242 C11.2820513,21.1723923 11.4461538,22.5207396 11.4461538,22.5207396 C11.4461538,22.5207396 11.6061538,23.6691003 12.0979487,24.1747956 C12.7225641,24.8388137 13.5425641,24.8179817 13.9076923,24.8872479 C15.2205128,25.0153644 19.4871795,25.0549451 19.4871795,25.0549451 C19.4871795,25.0549451 22.9353846,25.0497371 25.2317949,24.8809984 C25.5523077,24.8419385 26.2517949,24.8388137 26.8758974,24.1747956 C27.3676923,23.6691003 27.5282051,22.5207396 27.5282051,22.5207396 C27.5282051,22.5207396 27.6923077,21.1723923 27.6923077,19.8235242 L27.6923077,18.5590254 C27.6923077,17.2106781 27.5282051,15.86181 27.5282051,15.86181 L27.5282051,15.86181 Z" fill="#FFFFFF" />
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </li>
                            <li className="social-links__item mr-3">
                              <a href="#" className="social-links__link">
                                {/*?xml version="1.0" encoding="UTF-8"?*/}
                                <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  {/* Generator: Sketch 58 (84663) - https://sketch.com */}
                                  <title>Facebook</title>
                                  <desc>Created with Sketch.</desc>
                                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Homepage" transform="translate(-435.000000, -4224.000000)">
                                      <g id="Facebook" transform="translate(435.000000, 4224.000000)">
                                        <rect id="BG" fill="#3b5998" x={0} y={0} width="39.0720391" height="39.0720391" rx={4} />
                                        <g id="logo-fb-simple" transform="translate(14.536020, 11.536020)" fill="#fff" fillRule="nonzero">
                                          <path d="M3.02293,16 L3,9 L0,9 L0,6 L3,6 L3,4 C3,1.3008 4.67151,0 7.07938,0 C8.23277,0 9.22406,0.08587 9.51294,0.12425 L9.51294,2.94507 L7.84296,2.94583 C6.53343,2.94583 6.27987,3.5681 6.27987,4.48124 L6.27987,6 L10,6 L9,9 L6.27986,9 L6.27986,16 L3.02293,16 Z" id="Shape" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </li>
                            <li className="social-links__item mr-3">
                              <a href="#" className="social-links__link">
                                {/*?xml version="1.0" encoding="UTF-8"?*/}
                                <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  {/* Generator: Sketch 58 (84663) - https://sketch.com */}
                                  <title>instagram</title>
                                  <desc>Created with Sketch.</desc>
                                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Homepage" transform="translate(-545.000000, -4224.000000)">
                                      <g id="instagram" transform="translate(545.704111, 4224.000000)">
                                        <rect id="BG" fill="#3A3C4C" x={0} y={0} width="39.0720391" height="39.0720391" rx={4} />
                                        <g id="logo-instagram" transform="translate(11.536020, 11.536020)" fill="#fff" fillRule="nonzero">
                                          <circle id="Oval" cx="12.145" cy="3.892" r={1} />
                                          <path d="M8,12 C5.794,12 4,10.206 4,8 C4,5.794 5.794,4 8,4 C10.206,4 12,5.794 12,8 C12,10.206 10.206,12 8,12 Z M8,6 C6.897,6 6,6.897 6,8 C6,9.103 6.897,10 8,10 C9.103,10 10,9.103 10,8 C10,6.897 9.103,6 8,6 Z" id="Shape" />
                                          <path d="M12,16 L4,16 C1.944,16 0,14.056 0,12 L0,4 C0,1.944 1.944,0 4,0 L12,0 C14.056,0 16,1.944 16,4 L16,12 C16,14.056 14.056,16 12,16 Z M4,2 C3.065,2 2,3.065 2,4 L2,12 C2,12.953 3.047,14 4,14 L12,14 C12.935,14 14,12.935 14,12 L14,4 C14,3.065 12.935,2 12,2 L4,2 Z" id="Shape" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </li>
                            <li className="social-links__item mr-3">
                              <a href="#" className="social-links__link">
                                {/*?xml version="1.0" encoding="UTF-8"?*/}
                                <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                  <title>Twitter</title>
                                  <desc>Created with Sketch.</desc>
                                  <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <g id="Homepage" transform="translate(-601.000000, -4224.000000)">
                                      <g id="Twitter" transform="translate(601.056166, 4224.000000)">
                                        <rect id="BG" fill="#1DA1F2" x={0} y={0} width="39.0720391" height="39.0720391" rx={4} />
                                        <g id="logo-twitter" transform="translate(11.536020, 12.536020)" fill="#fff" fillRule="nonzero">
                                          <path d="M16,2 C15.4,2.3 14.8,2.4 14.1,2.5 C14.8,2.1 15.3,1.5 15.5,0.7 C14.9,1.1 14.2,1.3 13.4,1.5 C12.8,0.9 11.9,0.5 11,0.5 C9.3,0.5 7.8,2 7.8,3.8 C7.8,4.1 7.8,4.3 7.9,4.5 C5.2,4.4 2.7,3.1 1.1,1.1 C0.8,1.6 0.7,2.1 0.7,2.8 C0.7,3.9 1.3,4.9 2.2,5.5 C1.7,5.5 1.2,5.3 0.7,5.1 C0.7,5.1 0.7,5.1 0.7,5.1 C0.7,6.7 1.8,8 3.3,8.3 C3,8.4 2.7,8.4 2.4,8.4 C2.2,8.4 2,8.4 1.8,8.3 C2.2,9.6 3.4,10.6 4.9,10.6 C3.8,11.5 2.4,12 0.8,12 C0.5,12 0.3,12 0,12 C1.5,12.9 3.2,13.5 5,13.5 C11,13.5 14.3,8.5 14.3,4.2 C14.3,4.1 14.3,3.9 14.3,3.8 C15,3.3 15.6,2.7 16,2 Z" id="Shape" />
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Widget: Popular Posts / End */}
                    </div>
                  </div>
                  <div className="clearfix visible-sm" />
                  <div className="col-sm-6 col-md-3 ">
                    <div className="footer-col-inner">
                      {/* Footer Logo */}
                      <div className="footer-logo__heading">
                        <h5 className="footer-logo__txt text-white">Contact Us</h5>
                      </div>
                      {/* Footer Logo / End */}
                      {/* Widget: Contact Info */}
                      <div className="widget widget--footer widget-contact-info">
                        <div className="widget__content">
                          <div className="widget-contact-info__desc pt-3">
                            <p>Call: 0790 000 090</p>
                            <p>Email: Nexus Insurance@test.com</p>
                          </div>
                        </div>
                      </div>
                      {/* Widget: Contact Info / End */}
                    </div>
                  </div>
                  <div className="clearfix visible-sm" />
                  <div className="col-sm-6 col-md-3">
                    <div className="footer-col-inner">
                      {/* Widget: Featured News / End */}
                      <div className="widget widget--footer widget-featured-posts">
                        <h5 className="widget__title text-white">Sign Up to our Newsletter</h5>
                        <div className="widget__content pt-3">
                          <div className="form-group form-group--xs">
                            <input type="email" className="form-control input-sm" id="contact-form-email" placeholder="Your email address..." />
                          </div>
                        </div>
                      </div>
                      {/* Widget: Featured News / End */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
          {/* Sponsors / End */}
          {/* Footer Widgets / End */}
          {/* Footer Secondary */}
          <div className="footer-secondary small">
            <div className="container shadow-none">
              <div className="footer-secondary__inner pt-3">
                <div className="row">
                  <div className="col-md-4">
                    <div className="footer-copyright text-white"><a href className="text-white">© Nexus Inc</a> 2020 &nbsp; | &nbsp; All Rights Reserved</div>
                  </div>
                  <div className="col-md-8 ml-auto">
                    <ul className="footer-nav footer-nav--right d-flex footer-nav--condensed footer-nav--sm float-right">
                      <li className="footer-nav__item mr-3 "><a href className="text-white">Terms and Conditions</a></li>
                      <li className="footer-nav__item "><a href className="text-white">Privacy Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Secondary / End */}
        </footer>
            
        </div>
    )
}

export default Home