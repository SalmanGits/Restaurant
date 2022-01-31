import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="text-center font-bold color-white mb-8">Special Meals</h1>{" "}
      <br />
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.dinneratthezoo.com/wp-content/uploads/2017/12/meal-prep-burrito-bowls-500x500.jpg"
              class="d-flex m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.rockrecipes.com/wp-content/uploads/2012/12/Party-Food-Ideas-Photo-Collage-with-title-text-copy-500x500.jpg"
              class="d-flex m-auto"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://thegirlonbloor.com/wp-content/uploads/2019/01/Meal-Prep-Egg-and-Sausage-McMuffin-4-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://therealfooddietitians.com/wp-content/uploads/2021/02/Easy-Skillet-Lasagna-10-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://recipe52.com/wp-content/uploads/2020/09/Kadhi-Pakora-15-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://betterfoodguru.com/wp-content/uploads/2021/12/Winter-Kale-and-Farro-Salad-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://familystylefood.com/wp-content/uploads/2018/02/mushroom-pappardelle-familystylefood-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://rainbowplantlife.com/wp-content/uploads/2021/06/sausage-pasta-lazy-meals-1-of-3-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://cdn.loveandlemons.com/wp-content/uploads/2021/07/corn-recipes-500x500.jpg"
              class="d-flex m-auto h-70"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Home;
