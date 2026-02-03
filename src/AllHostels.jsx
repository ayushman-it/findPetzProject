import { useState } from "react";
import hostels from "./hostelsData";

const AllHostels = () => {

  const [city, setCity] = useState("Bengaluru");
  const [pincode, setPincode] = useState("");
  const [dog, setDog] = useState(true);
  const [cat, setCat] = useState(true);
  const [search, setSearch] = useState("");

  const filtered = hostels.filter((h) => {
    return (
      h.city === city &&
      (pincode === "" || h.pincode.includes(pincode)) &&
      h.name.toLowerCase().includes(search.toLowerCase()) &&
      ((dog && h.pets.includes("Dog")) || (cat && h.pets.includes("Cat")))
    );
  });

  return (
    <div className="container my-3 px-3">

      {/* FILTER BAR */}
      <div className="d-flex flex-wrap gap-2 mb-3 align-items-center">

        <input
          className="form-control form-control-sm w-auto"
          value={city}
          onChange={(e)=>setCity(e.target.value)}
          placeholder="City"
        />

        <input
          type="number"
          placeholder="Pincode"
          className="form-control form-control-sm w-auto"
          value={pincode}
          onChange={(e)=>setPincode(e.target.value)}
        />

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={dog}
            onChange={()=>setDog(!dog)}
          />
          <label className="form-check-label small">Dog</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={cat}
            onChange={()=>setCat(!cat)}
          />
          <label className="form-check-label small">Cat</label>
        </div>

        <input
          type="text"
          placeholder="Search Hostel"
          className="form-control form-control-sm w-auto"
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-sliders"></i> Filters
        </button>
      </div>

      <h5 className="fw-bold mb-3">
        Best Pet Hostels In {city}
      </h5>

      <div className="row g-2">

        {/* LEFT LIST */}
        <div className="col-lg-5">

          {filtered.map((h) => (
            <div key={h.id} className="card mb-3 shadow-sm border-0">
              <div className="row g-0">

                <div className="col-4">
                  <img
                    src={h.img}
                    className="img-fluid h-100 object-fit-cover"
                    alt={h.name}
                  />
                </div>

                <div className="col-8 p-2">

                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">{h.name}</h6>
                    <i className="bi bi-heart"></i>
                  </div>

                  <p className="small text-muted mb-1">{h.address}</p>
                  <p className="small mb-1 text-danger">
                    {h.status} · {h.time}
                  </p>

                  <div className="d-flex gap-2 small text-muted">
                    <span>24x7 Care</span>
                    <span>Veterinary Support</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold text-warning">
                      ₹ {h.price}/day
                    </span>
                    <button className="btn btn-sm btn-warning">
                      Book Now →
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT MAP */}
        <div className="col-lg-7">
          <div className="rounded overflow-hidden shadow-sm" style={{height:"85vh"}}>
            <iframe
              src={`https://maps.google.com/maps?q=${city}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              className="w-100 h-100 border-0"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AllHostels;
