import './home.css';
import beachVideo from '../../assets/video/rolling-hills.mp4';
import Fade from 'react-reveal/Fade';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { HiUserGroup } from "react-icons/hi";
import { FaHandHoldingHeart, FaBriefcaseMedical } from "react-icons/fa";
import BottomContact from '../Bottom-Contact/bottom-contact';

function Home() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="home-page">
            <div id="home-splash">
            <video src={beachVideo} autoPlay muted loop playsInline className='video-bg' /> 
                <Fade up>
                    <div id="splash-text">
                    <h2>Recovery. Healing. Strength.</h2>
                    <button id="cta-btn">
                        <Link to="/contact" onClick={scrollToTop}>Get started</Link>
                    </button>  
                    </div>  
                </Fade>
            </div>
            <div id="our-services">
                <Fade>
                    <div id="our-services-header">
                        <h3>What We Can Provide</h3>
                    </div>
                </Fade>
                <Fade up>
                    <div id="our-services-cards">
                        <Card>
                            <HiUserGroup className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Therapy and support groups for either addiction or mental health disorders
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaHandHoldingHeart className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Compassionate staff that is dedicated to your success
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <FaBriefcaseMedical className="service-icon" />
                            <Card.Body>
                                <Card.Text>
                                    Evidence-based practices that give you the best chance of recovery
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <button id="learn-more-btn" onClick={scrollToTop}>
                        <Link to="/mission">Learn More</Link>
                    </button>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Home;