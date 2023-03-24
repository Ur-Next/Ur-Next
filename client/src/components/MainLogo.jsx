import background1 from '../img/bg_colors.png'
import background2 from '../img/logo_circles.png'


function MainLogo () {
    return (
        <>
            <div id="mainlogo"
                style = {{ backgroundImage: `url(${background1})`,
                height: '800px',
                width: '800px' }}>
            </div>
            <h4>Login</h4>
        </>
    )
};

export default MainLogo;