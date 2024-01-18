import Carousel from 'react-bootstrap/Carousel';
import PlaceHolderIMG from '../assets/images/2.jpg';
import Carousel2 from '../assets/images/1.jpg';
import Carousel3 from '../assets/images/3.jpg';
export const HomeCarousel = () => {

  return (
    <Carousel>
        <Carousel.Item>
            <img src={PlaceHolderIMG} width={1775} height={400}/>
            <Carousel.Caption>
                
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={Carousel2}/>
        </Carousel.Item>
        <Carousel.Item>
            <img src={Carousel3}/>
        </Carousel.Item>
    </Carousel>
  )
}
