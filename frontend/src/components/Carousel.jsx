const Carousel = () => {
  return (
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
              <input
                className="form-control me-2 bg-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
            style={{filter:"brightness(30%)"}}
              src="https://source.unsplash.com/random/900×700/?burger"
              className="image-carousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
            style={{filter:"brightness(30%)"}}
              src="https://source.unsplash.com/random/900×700/?pizza"
              className="image-carousel"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
            style={{filter:"brightness(30%)"}}
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
  );
};

export default Carousel;
