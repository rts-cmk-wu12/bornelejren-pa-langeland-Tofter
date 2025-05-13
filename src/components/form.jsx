function Form() {
    return ( 
        <>
        <form action="">
            <div>
                <label htmlFor="name">Navn</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="phone">Telefon</label>
                <input type="tel" name="phone" id="phone" />
            </div>
            <div>
                <label htmlFor="address">Adresse</label>
                <input type="text" name="address" id="address" />
            </div>
            <div>
                <label htmlFor="city">By</label>
                <input type="text" name="city" id="city" />
            </div>
            <div>
                <label htmlFor="zip">Postnummer</label>
                <input type="text" name="zip" id="zip" />
            </div>
        </form>
        </>
     );
}

export default Form;