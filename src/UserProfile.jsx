import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="container py-4">
      <div className="row">

        {/* LEFT SIDEBAR */}
        <div className="col-lg-3 mb-3">
          <div className="profile-menu shadow-sm">

            <MenuItem label="My Account" icon="bi-person" />
            <MenuItem label="My Orders" icon="bi-box" active />
            <MenuItem label="Addresses" icon="bi-geo-alt" />

            <hr />

            <MenuItem label="Contact Us" icon="bi-headset" />
            <MenuItem label="My Wishlist" icon="bi-heart" />
            <MenuItem label="My Wallet" icon="bi-wallet2" />
            <MenuItem label="Subscriptions" icon="bi-repeat" />

            <hr />

            {/* FINDPETZ BRAND */}
            <MenuItem label="FindPetz Stores & Spas" icon="bi-shop" />
            <MenuItem label="FindPetz Guides" icon="bi-journal" />
            <MenuItem label="FindPetz Foundation" icon="bi-heart-pulse" />

            <hr />

            <MenuItem label="FAQ" icon="bi-question-circle" />
            <MenuItem label="Return & Exchange Policy" icon="bi-arrow-left-right" />
            <MenuItem label="Our Story" icon="bi-book" />
            <MenuItem label="Privacy Policy" icon="bi-shield-lock" />
            <MenuItem label="T&C" icon="bi-file-earmark-text" />

            <hr />

            <MenuItem label="Logout" icon="bi-power" />

          </div>

          <p className="text-muted small mt-4 fw-bold">
            MADE FOR &<br />BY FINDPETZ
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-lg-9">
          <div className="profile-content shadow-sm p-4 text-center">

            <h5 className="fw-bold mb-3">Online Orders</h5>

            <p className="fw-bold">Sorry, We couldn't find any order</p>

            <img
              src="https://placedog.net/300/200"
              alt="No Orders"
              className="img-fluid my-3"
            />

            <button className="btn btn-warning px-4 rounded-pill fw-bold">
              Continue Shopping
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

const MenuItem = ({ label, icon, active }) => (
  <div className={`menu-item ${active ? "active" : ""}`}>
    <span>
      <i className={`bi ${icon}`}></i> {label}
    </span>
    <i className="bi bi-chevron-right"></i>
  </div>
);

export default UserProfile;
