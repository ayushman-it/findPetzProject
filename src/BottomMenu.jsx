import { Link } from "react-router-dom";

const BottomMenu = () => {
    const profilePic = `https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`;

    return (
        <nav
            className="fixed-bottom bg-white border-top shadow-sm d-block d-md-none"
            style={{ height: "64px" }}
        >
            <ul className="d-flex w-100 h-100 m-0 p-0 list-unstyled">

                {/* Home */}
                <li className="flex-fill d-flex align-items-center justify-content-center">
                    <Link
                        to="/"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <i className="bi bi-house-door-fill fs-5"></i>
                        <span style={{ fontSize: "10px" }}>Home</span>
                    </Link>
                </li>

                {/* Categories */}
                <li className="flex-fill d-flex align-items-center justify-content-center">
                    <Link
                        to="/categories"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <i className="bi bi-grid-fill fs-5"></i>
                        <span style={{ fontSize: "10px" }}>Categories</span>
                    </Link>
                </li>

                {/* Hub */}
                <li className="flex-fill d-flex align-items-center justify-content-center">
                    <Link
                        to="/allShop"
                        className="text-decoration-none text-dark d-flex flex-column align-items-center justify-content-center"
                    >
                        <i className="bi bi-shop fs-5"></i>
                        <span style={{ fontSize: "10px" }}>FindPetzz Hub</span>
                    </Link>
                </li>

                {/* Cart */}
                <li className="flex-fill d-flex align-items-center justify-content-center">
                    <button
                        className="bg-transparent border-0 d-flex flex-column align-items-center justify-content-center"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartSheet"
                    >
                        <i className="bi bi-cart-fill fs-5"></i>
                        <span style={{ fontSize: "10px" }}>Cart</span>
                    </button>
                </li>


                {/* Account */}
                <li className="flex-fill d-flex align-items-center justify-content-center">
                    <button
                        className="bg-transparent border-0 d-flex flex-column align-items-center justify-content-center"
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                    >
                        <img
                            src={profilePic}
                            alt="Profile"
                            className="rounded-circle"
                            style={{ width: "30px", height: "30px", objectFit: "cover" }}
                        />
                        <span style={{ fontSize: "10px" }}>Account</span>
                    </button>
                </li>


            </ul>
            <div
                className="offcanvas offcanvas-bottom cart-sheet draggable-sheet"
                tabIndex="-1"
                id="cartSheet"
            >

                {/* Header */}
                <div className="offcanvas-header justify-content-between px-3">
                    <h6 className="fw-bold m-0">FindPetzz Cart</h6>
                    <button className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>

                {/* Body */}
                <div className="offcanvas-body p-3">

                    {/* Cart Item */}
                    <div className="cart-item d-flex align-items-center mb-3">
                        <img
                            src="https://placedog.net/80/80"
                            className="rounded"
                            width="60"
                            height="60"
                            alt=""
                        />
                        <div className="ms-3 flex-grow-1">
                            <h6 className="mb-1">Pet Grooming</h6>
                            <small className="text-muted">Home Service</small>
                        </div>
                        <strong>₹499</strong>
                    </div>

                    <div className="cart-item d-flex align-items-center mb-3">
                        <img
                            src="https://placedog.net/81/81"
                            className="rounded"
                            width="60"
                            height="60"
                            alt=""
                        />
                        <div className="ms-3 flex-grow-1">
                            <h6 className="mb-1">Vet Consultation</h6>
                            <small className="text-muted">Online</small>
                        </div>
                        <strong>₹299</strong>
                    </div>

                    <hr />

                    {/* Summary */}
                    <div className="d-flex justify-content-between">
                        <span>Subtotal</span>
                        <strong>₹798</strong>
                    </div>
                    <div className="d-flex justify-content-between">
                        <span>Service Fee</span>
                        <strong>₹50</strong>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between fs-5 fw-bold">
                        <span>Total</span>
                        <span>₹848</span>
                    </div>

                </div>

                {/* Footer */}
                <div className="cart-footer p-3 border-top">
                    <button className="btn btn-warning w-100 rounded-pill fw-bold py-2">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
            


        </nav>
    );
};

export default BottomMenu;
