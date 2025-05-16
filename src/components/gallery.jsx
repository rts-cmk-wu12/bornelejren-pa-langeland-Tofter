import Image1 from '../assets/Fotos/13226644_958660240918611_3434291679470295660_n.jpg';
import Image2 from '../assets/Fotos/13255943_958660250918610_4280467747354417614_n.jpg';
import Image3 from '../assets/Fotos/420605_371193742998600_251405456_n.jpg';
import Image4 from '../assets/Fotos/57325198_2075682595883031_8842221344629194752_n.jpg';
import Image5 from '../assets/Fotos/65597_371193986331909_1972008760_n.jpg';
import Image6 from '../assets/Fotos/935231_371193959665245_700749190_n.jpg';
import Image7 from '../assets/Fotos/936700_371193732998601_1760819839_n.jpg';
import '../styles/scss/gallery.scss';

function Gallery() {
    return (
        <>
            <div className="galleryContainer">
                <img src={Image1} alt="" />
                <img src={Image2} alt="" />
                <img src={Image3} alt="" />
                {/* <img src={Image4} alt="" /> */}
                <img src={Image5} alt="" />
                <img src={Image6} alt="" />
                <img src={Image7} alt="" />
            </div>
        </>
    );
}

export default Gallery;