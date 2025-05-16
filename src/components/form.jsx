import '../styles/scss/form.scss';

function Form() {
    return ( 
        <>
        <div className='formContainer'>
        <h1>Tilmeld som sponsor</h1>
        <form className="form" action="" method="post">
            <div className="form__container">
                <label htmlFor="name">Firmanavn</label>
                <input type="text" name="name" id="name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="city">Beløb</label>
                <input type="text" name="city" id="city" />
                
            </div>
            
            <div className="form__container">
                <label htmlFor="address">Adresse</label>
                <input type="text" name="address" id="address" />

                <label htmlFor="phone">Telefon</label>
                <input type="tel" name="phone" id="phone" />

                <label htmlFor="støttetype" >Støttetype</label>
                <select name="" id="">
                    <option value="1">Børnesponsorat</option>{/* 4000kr */}
                    <option value="2">Lejrsponsorat</option>{/* 2000kr */}
                    <option value="3">Støtte til foreningen</option>{/* 1000kr for diplom */}
                </select>
            </div>
            <button className='form__button' type='submit'>Doner</button>
        </form>
        </div>
        </>
     );
}

export default Form;