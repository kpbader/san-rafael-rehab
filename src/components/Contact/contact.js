import './contact.css';
import Fade from 'react-reveal/Fade';
// import { BsEnvelope, BsTelephone } from 'react-icons/bs';
// import { SlLocationPin } from "react-icons/sl";
import ContactForm from '../Contact-Form/contact-form';

function Contact() {

    return (
        <section id="contact-page">
            <div id="cp-contact-container">
                <Fade left>
                    <ContactForm />
                </Fade>
                <Fade right>
                    <div id="info-and-map">
                        {/* <div id="contact-info">
                            <div className="contact-info-line">
                                <BsEnvelope />
                                <p>nkhashe@9silver.biz</p>
                            </div>
                            <div className="contact-info-line">
                                <BsTelephone />
                                <p>(949) 633-1245</p>
                            </div>
                            <div className="contact-info-line">
                                <SlLocationPin />
                                <p>17682 Beach Blvd. Units 203-204, Huntington Beach, California 92647</p>
                            </div>
                        </div> */}
                        
                            <iframe id="cp-google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.1282419134686!2d-117.99284860788327!3d33.7056303818455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd26eebbbc61a1%3A0x905e876fb37add72!2s17682%20Beach%20Blvd%2C%20Huntington%20Beach%2C%20CA%2092647!5e0!3m2!1sen!2sus!4v1668552255488!5m2!1sen!2sus" title="map" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        
                    </div>
                </Fade>
            </div>
        </section>
    )
};

export default Contact;