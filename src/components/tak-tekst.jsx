import '../styles/scss/tak-tekst.scss';
import { useEffect, useState } from 'react';

function TakTekst() {
    const [donaters, setDonaters] = useState([]);

    useEffect(() => {
        
        const storedDonaters = JSON.parse(localStorage.getItem('donaters')) || [];
        setDonaters(storedDonaters);
    }, []);

    return ( 
        <>
        <div className='wrapper'>
            <div className='viTakker'>
                <p>Børnelejren på Langeland takker alle, der på den ene eller anden måde, har støttet
                    foreningens arbejde med at sende dårligt stillede børn på et ophold på Søgård Hovedgård
                    - det være sig ved naturaliesponsorater eller økonomisk støtte fra støttemedlemmer,
                    virksomhedssponsorer og donationer fra fonde. </p>
                <h4>En særlig tak til:</h4>
                <div className="viTakker__liste">
                    {donaters.map((donater, index) => (
                        <div key={index} className="donater">
                            <h3>{donater.name}</h3>
                            <p>Beløb: {donater.amount} kr</p>
                            <p>Støttetype: {donater.supportType}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
     );
}

export default TakTekst;