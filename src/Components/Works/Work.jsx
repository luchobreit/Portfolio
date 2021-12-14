import "./work.scss"
import  Carousel  from "react-bootstrap/Carousel"
function Work() {
    return (
        <div className="work" id="works">
            <Carousel    className="carou">
                <Carousel.Item className="citem" interval={5000}>
                    <img
                    className="img-c"
                    src="/img/work1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="citem" interval={5000}>
                    <img
                    className="img-c"
                    src="/img/work2.png"
                    alt="Second slide"
                    /> 
                    
                </Carousel.Item>
                <Carousel.Item className="citem" interval={5000}>
                    <img
                    className="img-c"
                    src="/img/work3.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel> 
        </div>
    )
}

export default Work
