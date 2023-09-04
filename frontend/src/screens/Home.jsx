import { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  const [search, setSearch] = useState("");
  const [foodData, setFoodData] = useState();
  const [cat, setCat] = useState();

  const loadData = async () => {
    try {
      const response = await fetch("/api/fooddata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //console.log(json[0]);
      setFoodData(json[0]);
      setCat(json[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  //useEffect(()=>{console.log(state)},[state])
  return (
    <>
      <Navbar />
      <div className="">
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            style={{ objectFit: "contain !important" }}
          >
            <div className="carousel-inner" style={{ maxHeight: "500px" }}>
              <div
                className="carousel-caption d-none d-md-block"
                style={{ zIndex: "1000" }}
              >
                <form className="d-flex" role="search">
                  <label className="fs-4 me-3 fw-bold">Search</label>
                  <input
                    className="form-control me-2 bg-dark text-white"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="carousel-item active">
                <img
                  style={{ filter: "brightness(30%)" }}
                  src="https://source.unsplash.com/random/900×700/?burger"
                  className="image-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ filter: "brightness(30%)" }}
                  src="https://source.unsplash.com/random/900×700/?pizza"
                  className="image-carousel"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ filter: "brightness(30%)" }}
                  src="https://source.unsplash.com/random/900×700/?momos"
                  className="image-carousel"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <div className="w-75">
            {cat &&
              cat.map((category) => {
                return (
                  <div key={category._id} className="mb-3">
                    <div className="fs-3 m-3 row">
                      {category.CategoryName}
                      <hr />
                      {foodData &&
                        foodData
                          .filter(
                            (item) =>
                              item.CategoryName == category.CategoryName &&
                              item.name
                                .toLowerCase()
                                .includes(search.toLocaleLowerCase())
                          )
                          .map((filteredItem) => {
                            return (
                              <div
                                key={filteredItem._id}
                                className="col-12 col-md-6 col-lg-3 mb-3"
                              >
                                <Card
                                  id={filteredItem._id}
                                  foodName={filteredItem.name}
                                  options={filteredItem.options[0]}
                                  imgSrc={filteredItem.img}
                                />
                              </div>
                            );
                          })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
