import './MainPage.scss';

function MainPage({ userInfo }) {
    if(!userInfo) {
        return(
            <div>no user</div>
        )
    }
    return(
        <div>this is main for {userInfo}</div>
    )
}

export default MainPage;