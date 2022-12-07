import loadingGif from '../../assets/Images/Images/loading.gif';
import Header from '../../components/Header/Header';

function LoadingPage() {
    return(
        <section className="loading-page">
            <Header />
            <img src={loadingGif}/>
        </section>
    )
}

export default LoadingPage;