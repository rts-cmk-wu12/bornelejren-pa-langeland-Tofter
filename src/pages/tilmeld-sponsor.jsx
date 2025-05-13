import Footer from "../components/footer";
import Form from "../components/form";
import Navigation from "../components/navigation";
import TilmeldTekst from "../components/tilmeld-tekst";

function TildmeldSponsor() {
    return (
        <>
            <Navigation />
            <TilmeldTekst/>
            <Form/>
            <Footer/>
        </>
    );
}

export default TildmeldSponsor;