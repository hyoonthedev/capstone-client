import loadingImg from '../../assets/Images/Images/loading2.gif';
import { useNavigate } from 'react-router-dom';

function SuccessfulLogin() {
    
    const navigate = useNavigate();

    setTimeout(function(){
        navigate('/ingredients')
    }, 2000)

    return(
        <>
        <img src={loadingImg}/>
        <div>Loading</div>
        <div>You will be directed to main page</div>
        </>
    )
}

export default SuccessfulLogin;