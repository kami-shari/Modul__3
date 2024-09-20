import CardsItems from "./components/CardsItems";
import imgCoco from './assets/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg'
import imgCam from './assets/photo-1526170375885-4d8ecf77b99f.avif'
import imgGreen from './assets/25ebdc_11569a061f824bc99cda2e6b1ac6348b~mv2.webp'
import '../src/index.css'


function App() {
    return (<>
    <div className="photo-card"><img src={imgCoco} alt="coco oil"/></div>
    <CardItems />
    <button>Buy Now</button>

    
    
    
    </>)
}