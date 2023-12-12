import videoHomePage from "../../assets/video-homepage.mp4"

const Home = (props) => {
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
                        <button >Get started. it's free</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;