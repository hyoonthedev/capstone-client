import chevronIcon from '../../assets/Images/Icons/chevron_right.svg';

import './PleaseChoose.scss';

function PleaseChoose() {
    return(
        <div className="please-choose">
            <img className="please-choose__chevron" src={chevronIcon} alt="chevron icon"/>
            <p className="please-choose__body">Please Select an Ingredient from your panTree</p>
        </div>
    )
}

export default PleaseChoose;