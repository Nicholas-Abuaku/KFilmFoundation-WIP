import Carousel from 'react-bootstrap/Carousel';
import PlaceHolderIMG from '../assets/images/2.jpg';
import Carousel2 from '../assets/images/1.jpg';
import Carousel3 from '../assets/images/3.jpg';
import { LatestScreeningCard } from './LatestScreeningCard';
export const HomeCarousel = () => {

  return (
    <Carousel style={{ width:'100%' }}>
        <Carousel.Item >
            <LatestScreeningCard title="My Old School" date="January 25th" img="https://i.ytimg.com/vi/km6bVJgiJbs/maxresdefault.jpg"/>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src={Carousel2}/>
        </Carousel.Item> */}
    </Carousel>
  )
}
