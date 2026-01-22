import { useState } from "react";
import { Link } from "react-router-dom";

const dogCats = [
  { title: "Dog Food", img: "https://www.pedigree.in/files/styles/webp/public/2024-03/2_new.jpg.webp", slug: "dog-food" },
  { title: "Dry Food", img: "https://www.petfoodinstitute.org/wp-content/uploads/2020/12/pet-food-types.jpg", slug: "dry-food" },
  { title: "Wet Food", img: "https://www.unitedpetfood.eu/uploads/Products/WET/_540xAUTO_crop_center-center_none/8996/Wet-pet-food-POUCH_2021-06-29-143611_vjgx.webp", slug: "wet-food" },
  { title: "Sara’s Wholesome", img: "https://curlytales.com/wp-content/uploads/2024/08/dog-food-430x242.jpg", slug: "wholesome" },
  { title: "Puppy Food", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5vFvooJoblUwnsZb1UZ1FbOSJ3UFmxXzIQQ&s", slug: "puppy-food" },
  { title: "Veterinary Food", img: "https://www.petfoodinstitute.org/wp-content/uploads/2024/06/pet-food-solid-background.jpg", slug: "vet-food" },
];

const eoss = [
  { title: "Sweaters", img: "https://www.poochmate.com/cdn/shop/products/26A6AAC1-F66E-4F89-B211-1190ADC87CC0.jpg?v=1636384729", slug: "sweaters" },
  { title: "Beds", img: "https://sleepycat.in/cdn/shop/files/Dog-Bed-original-Grey-PDP-Img-1.jpg?v=1755455028", slug: "beds" },
  { title: "Mats", img: "https://www.poochmate.com/cdn/shop/files/Grey_Cloud_Mat_2.png?v=1721208784", slug: "mats" },
];

export default function Categories() {
  const [tab, setTab] = useState("dogs");

  return (
    <div className="category-page">

      {/* SEARCH */}
      <div className="search-bar">
        <i className="bi bi-search"></i>
        <input type="text" placeholder="Search FindPetz" />
      </div>

      {/* LOCATION */}
      <div className="deliver">
        <i className="bi bi-geo-alt"></i>
        Deliver to <strong>560034</strong>
        <span>Change</span>
      </div>

      {/* TABS */}
      <div className="tabs">
        <button className={tab==="dogs"?"active":""} onClick={()=>setTab("dogs")}>Dogs</button>
        <button className={tab==="cats"?"active":""} onClick={()=>setTab("cats")}>Cats</button>
      </div>

      {/* FOOD ESSENTIALS */}
      <h6 className="section-title">Food Essentials</h6>
      <div className="card-grid">
        {dogCats.map((item, i) => (
          <Link to={`/category/${item.slug}`} className="cat-card" key={i}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>

      {/* EOSS */}
      <h6 className="section-title">FindPetz EOSS – Up To 60% Off</h6>
      <div className="card-grid">
        {eoss.map((item, i) => (
          <Link to={`/category/${item.slug}`} className="cat-card" key={i}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
