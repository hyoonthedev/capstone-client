import './AddIngredientsPage.scss'

function AddIngredientsPage() {
    return(
        <>
            <section className="ingredients-add__container">
                <label className="ingredients-add__title">Ingredient Name</label>
                <input className="ingredients-add__input-name" type="text" placeholder="Input Ingredient Name"></input>
                <label className="ingredients-add__title">Date Purchased</label>
                <input className="ingredients-add__input-timestamp" type="number" placeholder="DD/MM/YYYY"></input>
                <button className="ingredients-add__submit">Submit</button>
            </section>
        </>

    )
}

export default AddIngredientsPage;