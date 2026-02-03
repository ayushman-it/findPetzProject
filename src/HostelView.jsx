import { useState } from "react";

const HostelView = () => {
  const [tab, setTab] = useState("about");

  return (
    <div className="container my-4">
      <div className="row g-4">

        {/* LEFT SIDE */}
        <div className="col-lg-8">

          {/* Gallery */}
          <div className="row g-2">
            <div className="col-6">
              <img src="https://picsum.photos/600/700?1" className="img-fluid rounded" />
            </div>
            <div className="col-6">
              <div className="row g-2">
                {[2,3,4,5].map(i=>(
                  <div className="col-6" key={i}>
                    <img src={`https://picsum.photos/300/300?${i}`} className="img-fluid rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="d-flex gap-4 border-bottom mt-4">
            <button className={`btn btn-sm ${tab==="about"?"fw-bold":""}`} onClick={()=>setTab("about")}>About</button>
            <button className={`btn btn-sm ${tab==="facilities"?"fw-bold":""}`} onClick={()=>setTab("facilities")}>Facilities</button>
            <button className={`btn btn-sm ${tab==="pricing"?"fw-bold":""}`} onClick={()=>setTab("pricing")}>Pricing</button>
          </div>

          {/* ABOUT */}
          {tab === "about" && (
            <>
              <h6 className="mt-3">About The Hostel</h6>
              <p className="small text-muted">
                We provide safe, hygienic and loving care for your pets with
                trained staff, CCTV monitoring and 24x7 supervision.
              </p>

              <h6 className="mt-3">Pets Accepted</h6>
              <div className="d-flex gap-4">
                <div className="text-center">
                  <img src="https://i.pravatar.cc/80?img=12" className="rounded-circle" />
                  <p className="small mt-1">Dogs</p>
                </div>
                <div className="text-center">
                  <img src="https://i.pravatar.cc/80?img=22" className="rounded-circle" />
                  <p className="small mt-1">Cats</p>
                </div>
              </div>
            </>
          )}

          {/* FACILITIES */}
          {tab === "facilities" && (
            <>
              <h6 className="mt-3">Facilities</h6>
              <div className="row g-3">
                {["24x7 Supervision", "AC Rooms", "Vet on Call", "CCTV", "Play Area", "Daily Cleaning"].map((f,i)=>(
                  <div className="col-6" key={i}>
                    <div className="border rounded p-2 small text-muted">
                      <i className="bi bi-check-circle text-success me-1"></i>{f}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* PRICING */}
          {tab === "pricing" && (
            <>
              <h6 className="mt-3">Pricing</h6>

              <div className="accordion" id="priceAcc">
                {[
                  {name:"Small Breed", price:"₹399/day"},
                  {name:"Medium Breed", price:"₹499/day"},
                  {name:"Large Breed", price:"₹599/day"},
                ].map((item,i)=>(
                  <div className="accordion-item" key={i}>
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#p${i}`}>
                        {item.name}
                        <span className="ms-auto text-warning fw-bold">{item.price}</span>
                      </button>
                    </h2>
                    <div id={`#p${i}`} className="accordion-collapse collapse">
                      <div className="accordion-body small">
                        Includes food, walking, cleaning & supervision.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-4">
          <div className="card p-3 shadow-sm">
            <h5>Happy Paws Hostel</h5>
            <p className="small text-muted">Whitefield, Bengaluru</p>

            <div className="mb-2">
              <strong>Address</strong>
              <p className="small mb-1">12th Cross, Whitefield, Bengaluru 560066</p>
              <a href="#" className="small text-warning">Check on map</a>
            </div>

            <div className="mb-2">
              <strong>Timings</strong>
              <p className="small text-warning">Open 24 Hours</p>
            </div>

            <button className="btn btn-dark w-100 mb-3">
              <i className="bi bi-whatsapp"></i> Enquire Now
            </button>

            {/* MAP */}
            <iframe
              src="https://maps.google.com/maps?q=whitefield&t=&z=13&ie=UTF8&iwloc=&output=embed"
              height="200"
              className="w-100 border rounded"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HostelView;
