import videoHomePage from "../../assets/video-homepage.mp4"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";
const Home = (props) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);
    const doingQuiz =()=>{
        navigate('/users');
    }
    return (
        <>
            <div className="homepage-container">
                <video autoPlay muted loop>
                <source src={videoHomePage} type = 'video/mp4'/>
                </video>
                <div className="homepage-content">
                    <div className="title-1">There is the test quiz</div>
                    <div className="title-two">Get more data—like signups, feedback, and <br/>
                    anything else—with forms<br/> designed to be refreshingly different.</div>
                    <div className="title-three">
                        {isAuthenticated===false?
                         <button onClick={()=>navigate('login')}>Get started. it's free</button>
                        : <button onClick={()=>doingQuiz()}>Doing quiz now</button>
                        }
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;