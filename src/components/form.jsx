import '../styles/scss/form.scss';

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            amount: event.target.city.value,
            address: event.target.address.value,
            phone: event.target.phone.value,
            supportType: event.target.støttetype.value,
        };

        
        const existingDonaters = JSON.parse(localStorage.getItem('donaters')) || [];
        
        existingDonaters.push(formData);
        
        localStorage.setItem('donaters', JSON.stringify(existingDonaters));

        
        
    };

    return ( 
        <>
        <div className='formContainer'>
        <h1>Tilmeld som sponsor</h1>
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
                <label htmlFor="name">Firmanavn</label>
                <input type="text" name="name" id="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />

                <label htmlFor="city">Beløb</label>
                <input type="text" name="city" id="city" required />
            </div>
            
            <div className="form__container">
                <label htmlFor="address">Adresse</label>
                <input type="text" name="address" id="address" required />

                <label htmlFor="phone">Telefon</label>
                <input type="tel" name="phone" id="phone" required />

                <label htmlFor="støttetype">Støttetype</label>
                <select name="støttetype" id="støttetype" required>
                    <option value="Børnesponsorat">Børnesponsorat</option>
                    <option value="Lejrsponsorat">Lejrsponsorat</option>
                    <option value="Støtte til foreningen">Støtte til foreningen</option>
                </select>
            </div>
            <button className='form__button' type='submit'>Doner</button>
        </form>
        </div>
        </>
     );
}

export default Form;