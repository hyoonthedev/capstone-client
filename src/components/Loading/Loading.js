import loadingGif from '../../assets/Images/Images/loading2.gif';
import './Loading.scss'

function Loading() {
    return(
        <section className="loading">
            <h3 className="loading__main-title">Loading...</h3>
            <img className="loading__image"src={loadingGif} alt="chopping carrots"/>
            <h3 className="loading__title">Preparing your Recipe</h3>
        </section>
    )
}

export default Loading;