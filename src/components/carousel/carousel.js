import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

function ProductCarousel() {
  return (
    <div className="carousel-containe">
        <div className="left column">
            <h1>Hours</h1>
        </div>
        <div className="carousel-header column">
            <h1 className="carousel-header__title">Coming Soon</h1>
            <Carousel className="product-carousel">
            <Carousel.Item>
                <img
                className="product-carousel__image"
                src="/images/food/chips.png"
                alt="Assorted bags of chips"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="product-carousel__image"
                src="/images/food/gatorade.png"
                alt="Assorted Gatorade drinks"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="product-carousel__image"
                src="/images/food/gum.png"
                alt="Assorted packs of chewing gum"
                />
            </Carousel.Item>
            </Carousel>
        </div>
    </div>
  );
}

export default ProductCarousel;