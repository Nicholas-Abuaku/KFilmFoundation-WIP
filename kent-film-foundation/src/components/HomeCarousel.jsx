import Carousel from 'react-bootstrap/Carousel';
import PlaceHolderIMG from '../assets/images/2.jpg';
import Carousel2 from '../assets/images/1.jpg';
import Carousel3 from '../assets/images/3.jpg';
import { LatestScreeningCard } from './LatestScreeningCard';
export const HomeCarousel = () => {

  return (
    <Carousel style={{ }}>
        <Carousel.Item >
            <LatestScreeningCard title="Picnic At Hanging Rock" date="January 25th" img="https://cdn.shopify.com/s/files/1/1801/0569/files/BDP.jpg?v=1490143747"/>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src={Carousel2}/>
        </Carousel.Item> */}
    </Carousel>
  )
}
