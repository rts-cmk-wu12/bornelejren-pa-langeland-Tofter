import '../styles/scss/footer.scss';
import Logo from '../assets/Logo/logo.svg'

function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div>
                <h2 className='footer__heading'>Børnelejren på Langeland</h2>
                <img src={Logo} alt="" />
                </div>
                <div className="footerContainer__tekst">
                <div>
                    <p>Knud Bro Alle 1, st. mf., 3660 Stenløse</p>
                    <p>Telefon: 38711260</p>
                    <p>Email: info@lejren.dk</p>
                </div>
                <div>
                    <h2>Lejren:</h2>
                    <p>Søgåard Hovedgård</p>
                    <p>Søgårdsvej 8A</p>
                    <p>5935 Bagenkop</p>
                </div>
                </div>
            </div>
        </>
    );
}

export default Footer;