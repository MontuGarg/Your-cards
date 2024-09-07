import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Home.css'; // Ensure you have this CSS file for styling

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4',
    imageUrl: 'https://via.placeholder.com/300x200',
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to My Website</h1>
      <Splide
        options={{
          type: 'loop',
          perPage: 1,
          pagination: false,
          arrows: true, // Display arrows for forward and backward controls
          autoplay: true, // Enable auto sliding
          interval: 3000, // 3 seconds for each slide
          pauseOnHover: true, // Pause on mouse hover
          pauseOnFocus: true, // Pause when slider is in focus
          speed: 1000, // Transition speed (1 second)
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img src="https://5.imimg.com/data5/ANDROID/Default/2024/4/413136661/DW/IN/ZT/92710850/product-jpeg.jpg" alt="Slide 1" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://finance.adityabirlacapital.com/-/media/Feature/ABCL/ABFL/Product-Banner-Images/Aditya-Birla-SBI-card-banner.ashx" alt="Slide 2" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://foujiadda.in/admin/uploads//news/image1670737906.png" alt="Slide 3" />
        </SplideSlide>
        <SplideSlide>
          <img src="https://via.placeholder.com/1000x500" alt="Slide 4" />
        </SplideSlide>
      </Splide>

      <section className="products">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="product-buttons">
                  <button className="btn apply-now"><a href='https://bitli.in/i1ASRtA' target="_blank" rel="noopener noreferrer">Apply Now</a></button>
                  <button className="btn get-details">Get Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
