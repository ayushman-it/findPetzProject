import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Service from "./Service";
import Grooming from "./Groooming";
import About from "./About";
import Logo from "./assets/logo.png";
import Footer from "./Footer";
import BottomMenu from "./BottomMenu";
import AllProduct from "./AllProduct";
import ProductView from "./ProductView";
import ShopView from "./ShopView";
import AllStore from "./AllStore";
import UserProfile from "./UserProfile";
import Categories from "./Categories";


function Nav() {
    return (
        <>
            <div className="position-sticky top-0 z-1">
                <div className="py-1 text-center bg-orange text-light">
                    <p className="mb-0 fw-semibold"><small>FindPetz Wholesome – Pure Nutrition. Happy Pets.</small></p>
                </div>
                <nav className="navbar shadow-sm navbar-expand-lg bg-white ">
                    <div className="container">
                        <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/"><img src={Logo} alt="" style={{ width: "22px" }} /> FindPetz</Link>


                        <div className="d-flex gap-0 align-items-center">
                            {/* Mobile Location Bar */}
                            <div className="mobile-location d-lg-none">
                                <button
                                    className="btn w-100 d-flex align-items-center justify-content-center gap-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#nearbyModal"
                                >
                                    <i className="bi bi-geo-alt text-warning"></i>
                                    <span>560034</span>
                                </button>
                            </div>
                            <Link to="/allShop"
                                className="navbar-toggler border-0 d-lg-none"
                                type="button"

                            >
                                <i className="bi bi-shop fs-4"></i>
                            </Link>
                            {/* Mobile Toggle */}
                            <button
                                className="navbar-toggler border-0 d-lg-none"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#mobileMenu"
                            >
                                <i className="bi bi-grid fs-4"></i>
                            </button>
                        </div>


                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/grooming" className="nav-link">Grooming</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/service" className="nav-link">Services</Link>
                                </li>
                            </ul>

                            <div className="d-flex align-items-center gap-4 ms-auto nav-actions">

                                {/* Pincode */}
                                <button
                                    className="btn btn-light nav-icon-btn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#nearbyModal"
                                >
                                    <i className="bi bi-geo-alt"></i>
                                    <span>560034</span>
                                </button>

                                {/* Wishlist */}
                                <button className="btn btn-light nav-icon-btn">
                                    <i className="bi bi-heart"></i>
                                    <span>Wishlist</span>
                                </button>

                                {/* Cart */}
                                <button className="btn btn-light nav-icon-btn">
                                    <i className="bi bi-bag"></i>
                                    <span>Cart</span>
                                </button>

                                {/* Login */}
                                <button
                                    className="btn login-pill"
                                   data-bs-toggle="modal"
                                    data-bs-target="#loginModal"
                                >
                                    <i className="bi bi-person"></i>
                                    Login / Sign Up
                                </button>

                            </div>

                        </div>
                    </div>
                </nav>
            </div>
            <div className="modal fade login-popup" id="loginModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content login-card">

                        {/* Close */}
                        <button
                            className="btn-close position-absolute top-0 end-0 m-3"
                            data-bs-dismiss="modal"
                        ></button>

                        {/* Header */}
                        <div className="text-center text-white p-4 login-hero">
                            <h5 className="fw-bold">WELCOME TO FINDPETZ!</h5>
                            <p className="small">Register to avail the best deals!</p>

                            <div className="badge-pill mt-2">
                                ⭐ Exclusive Deals & Discounts
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-4">

                            <h6 className="fw-bold text-center mb-3">Login / Signup</h6>

                            <div className="input-group mb-3">
                                <span className="input-group-text">🇮🇳 +91</span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter Mobile Number"
                                />
                            </div>

                            <div className="form-check mb-3">
                                <input type="checkbox" className="form-check-input" id="notify" />
                                <label className="form-check-label" htmlFor="notify">
                                    Notify me for any updates & offers
                                </label>
                            </div>

                            <Link to="/userProfile" className="btn btn-dark w-100 rounded-pill py-2">
                                Submit
                            </Link>

                            <p className="small text-muted text-center mt-3">
                                I accept that I have read & understood FindPetz
                                <span className="text-decoration-underline mx-1">Privacy Policy</span>
                                &
                                <span className="text-decoration-underline ms-1">T&Cs</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
                <Route path="/grooming" element={<Grooming></Grooming>} />
                <Route path="/service" element={<Service></Service>} />
                <Route path="/products" element={<AllProduct></AllProduct>} />
                <Route path="/productView" element={<ProductView></ProductView>} />
                <Route path="/shopView" element={<ShopView></ShopView>} />
                <Route path="/allShop" element={<AllStore></AllStore>} />
                <Route path="/userProfile" element={<UserProfile></UserProfile>} />
                <Route path="/categories" element={<Categories />} />

            </Routes>

            {/* MOBILE OTP BOTTOM SHEET */}
            <div
                className="offcanvas offcanvas-bottom login-sheet"
                tabIndex="-1"
                id="loginSheet"
            >
                <div className="offcanvas-header justify-content-center">
                    <span className="sheet-handle"></span>
                    <button
                        type="button"
                        className="btn-close position-absolute end-0 me-3"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body text-center">

                    <p className="text-warning fw-bold mb-1">GOOD TO SEE YOU!</p>
                    <h4 className="fw-bold mb-3">WELCOME TO HAPPY PET</h4>

                    <div className="mb-3 text-start">
                        <label className="form-label">Mobile Number*</label>
                        <input
                            type="tel"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                        />
                    </div>

                    <button className="btn btn-warning w-100 rounded-pill py-2 fw-bold">
                        Continue
                    </button>

                    <p className="small text-muted mt-3">
                        By continuing, you agree to the
                        <a href="#" className="mx-1">Terms</a> &
                        <a href="#" className="ms-1">Privacy Policy</a>
                    </p>

                    <div className="mt-4 text-start">
                        <h6 className="fw-bold text-center mb-3">What Awaits You Inside</h6>
                        <p>✔ Find the best pet services around you.</p>
                        <p>✔ Discover helpful articles & tips.</p>
                        <p>✔ Find shelters & rescues across India.</p>
                    </div>

                </div>
            </div>



            <div className="modal fade" id="nearbyModal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Location</h5>
                            <button className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <input className="form-control mb-2" placeholder="Enter Pincode" />
                            <button className="btn btn-primary w-100">Update</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="mobileMenu"
            >
                <div className="offcanvas-header">
                    <h5 className="fw-bold">FindPetz</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <ul className="navbar-nav gap-2">

                        <li className="nav-item">
                            <Link to="/" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-house me-2"></i> Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-info-circle me-2"></i> About
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/grooming" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-scissors me-2"></i> Grooming
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/service" className="nav-link" data-bs-dismiss="offcanvas">
                                <i className="bi bi-briefcase me-2"></i> Services
                            </Link>
                        </li>

                        <hr />

                        <button className="btn btn-light w-100 mb-2">
                            <i className="bi bi-heart me-2"></i> Wishlist
                        </button>

                        <button className="btn btn-light w-100 mb-2">
                            <i className="bi bi-bag me-2"></i> Cart
                        </button>

                        <button
                            className="btn btn-warning w-100"
                            data-bs-toggle="modal"
                            data-bs-target="#signupModal"
                        >
                            <i className="bi bi-person me-2"></i> Login / Sign Up
                        </button>

                    </ul>
                </div>
            </div>


            <BottomMenu />
            <Footer />
        </>
    )
}

export default Nav;