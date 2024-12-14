/* eslint-disable jsx-a11y/iframe-has-title */

// COMPONENTS & ICONS
import Slider from "./Slider";
import Title from "./Title";
import Testimonials from './Testimonials';
import ToTopButton from "../ToTopButton";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import CallMadeIcon from '@mui/icons-material/CallMade';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LanguageToggle from "../LanguageToggle";
import MenuBar from '../MenuBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import Alert from '@mui/material/Alert';

// HOOKS & LIBRARIES
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useContext } from "react";
import { motion } from "framer-motion";
import { LangContext } from "../Contexts/LangContext";

// STYLES
import "./AgencyPageStyles.css";


export default function Agency() {
    let language = useContext(LangContext);
    let [isFirstSession, setIsFirstSession] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const progBar = document.querySelector('.agency-page .prog-bar');
            if (progBar) {
                const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
                progBar.style.width = `${scrollPercentage}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        if (sessionStorage.getItem("isFirstSession") === null) {
            setIsFirstSession(true);
            sessionStorage.setItem("isFirstSession", JSON.stringify(false));
        } else {
            setIsFirstSession(false);
        }
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="agency-page">
            {/* Fixed Elements */}
            <div className="prog-bar"></div>
            <ToTopButton />
            <a href="https://wa.me/+201115793826" target="blank" className="whats-icon hover-element">
                <WhatsAppIcon className="hover-element" />
            </a>
            {
                isFirstSession &&
                <div
                    className="popup-container"
                    onClick={(e) => {
                        if (e.target.classList.contains("popup-container")) {
                            e.target.style.opacity = '0';
                            setTimeout(() => {
                                e.target.style.display = 'none';
                            }, 220);
                        }
                    }}
                >
                    <div className="popup">
                        <h1>Need expert advice ?</h1>
                        <p>Click below to get free consulting now !</p>
                        <Button className="btn" variant="contained" endIcon={<CallMadeIcon />}>get now </Button>
                    </div>
                </div>
            }
            <Alert className="alert" variant="filled" severity="success">{language.lang === "en" ? "The email sent successfully" : "أرسل البريد الإلكتروني بنجاح"}</Alert>



            <Header />
            <Slider />
            <AboutSection />
            <CoreValues />
            <OurServices />
            <TestimonialsContainer />
            <ContactUs />
            <Footer />
        </div>
    );

}

function Header() {
    let language = useContext(LangContext);
    return (
        <header>
            <div className="menu-bar">
                <MenuBar />
            </div>
            <img className="logo" src={require("../Images/logo-col2.png")} alt="logo" />
            <nav>
                <ul>
                    <li className="nav-link hover-element">
                        <a className="hover-element" href="#about-us">{language.lang === "en" ? "About Us" : "نبذة عنّا"}</a>
                    </li>
                    <li>|</li>
                    <li className="nav-link hover-element">
                        <a className="hover-element" href="#our-services">{language.lang === "en" ? "Our Services" : "خدماتنا"}</a>
                    </li>
                    <li>|</li>
                    <li className="nav-link hover-element">
                        <a className="hover-element" href="#blog">{language.lang === "en" ? "Blog" : "مدونة"}</a>
                    </li>
                    <li>|</li>
                    <li className="nav-link hover-element">
                        <a className="hover-element" href="#contact-us">{language.lang === "en" ? "Contact Us" : "تواصل معنا"}</a>
                    </li>
                </ul>
            </nav>
            <LanguageToggle />
        </header>
    );
}

function AboutSection() {
    let aboutInfo = [
        {
            title: "mission",
            description: "To be the destination where our clients can realize the full potential of digital marketing, in all its craziness, to both increase their revenue and put their brand on a very well-tailored map.",
            iconSrc: require('../Images/mission.png'),
            x: -300,
            y: 0
        },
        {
            title: "goals",
            description: "To be the destination where our clients can realize the full potential of digital marketing, in all its craziness, to both increase their revenue and put their brand on a very well-tailored map.",
            iconSrc: require('../Images/goals.png'),
            y: 100,
            x: 0
        },
        {
            title: "vision",
            description: "To be the destination where our clients can realize the full potential of digital marketing, in all its craziness, to both increase their revenue and put their brand on a very well-tailored map.",
            iconSrc: require('../Images/vision.png'),
            x: 300,
            y: 0
        },
    ]
    return (
        <div id={"about-us"} className="about-sec page-section">
            <div className="container">
                <Title txt={"about us"} />
                <div className="about-items">
                    {
                        aboutInfo.map((item, i) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, x: item.x, y: item.y }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    transition={{
                                        x: { duration: 0.4, type: "tween", ease: "linear" },
                                        y: { duration: 0.4, type: "tween", ease: "linear" },
                                        opacity: { duration: 0.4, delay: 0.2, type: "tween", ease: "linear" },
                                    }}
                                    key={"aboutItem" + i}
                                    className="about-item hover-element"
                                >
                                    <div className="icon"><img src={item.iconSrc} alt={item.title} /></div>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );

}

function CoreValues() {
    let coreValues = [
        "Team work makes the dream work",
        "Integrity",
        "Working smart & hard",
        "Continuous learning",
        "Solutions-focused attitude",
    ];
    return (
        <div id={"our-values"} className="coreValues-sec page-section">
            <Title txt={"our values"} />
            <div className="secContent">
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        x: { duration: 0.5, type: "tween", ease: "linear" },
                        y: { duration: 0.5, type: "tween", ease: "linear" },
                        opacity: { duration: 0.5, delay: 0.2, type: "tween", ease: "linear" },
                    }}
                    className="coreValues-img"
                >
                    <img src={require('../Images/core-values.jpg')} alt="core values img" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{
                        x: { duration: 0.5, type: "tween", ease: "linear" },
                        y: { duration: 0.5, type: "tween", ease: "linear" },
                        opacity: { duration: 0.5, delay: 0.2, type: "tween", ease: "linear" },
                    }}
                    className="coreValues-info"
                >
                    <p>Considering that our birth year is the very recent 2012, we have quickly grown to become one of the leading agencies in Egypt and the Middle East serving a diverse range of brands both regionally and abroad. How come, you may be wondering… Well, simply put, we can do everything! We specialize in building social media & digital strategies across different platforms, which includes: digital research, content creation, community management, media planning & buying, E-commerce, digital PR, web & mobile development and digital analytics.</p>
                    <ul>
                        {
                            coreValues.map((item, i) => {
                                return (
                                    <li key={"coreValueItem" + i}>
                                        <span>{i + 1}</span>
                                        <span>{item}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}

function OurServices() {
    let statisticsList = [
        {
            title: "Clients",
            counter: 148,
            iconSrc: require("../Images/clients.png"),
        },
        {
            title: "Video views",
            counter: 506,
            iconSrc: require("../Images/video-views.png"),
        },
        {
            title: "Media spend",
            counter: 2000,
            iconSrc: require("../Images/media-spend.png"),
        },
        {
            title: "Impressions",
            counter: 1450,
            iconSrc: require("../Images/impressions.png"),
        },
    ];

    let servicesList = [
        {
            title: "Video Production & Motion Graphics",
            description: "The video production process or consists of 3 main steps: pre-production, which is the planning stage for mapping out your strategy and script for the video, production is the phase in which the video is shot, and finally post-production, which involves editing the video, adding music and other effects.",
            imgSrc: require('../Images/video-editing.png')
        },
        {
            title: "Digital Marketing",
            description: "Reaching Thousands of people who interested in your ( Services / Products ) is easier with our social media campaigns & strategies; Or you can keep your brand name updated & in a fabulous look.",
            imgSrc: require('../Images/digital-marketing.png')
        },
        {
            title: "Events Management",
            description: "Organizing your ( Corporate Event / Fun Day ) in a professional steps with exact of time.",
            imgSrc: require('../Images/events.png')
        },
        {
            title: "Media Buying",
            description: "Media buying is a process used in paid marketing efforts. The goal is to identify and purchase ad space on channels that are relevant to the target audience at the optimal time, for the least amount of money.",
            imgSrc: require('../Images/social-media.png')
        },
        {
            title: "Branding",
            description: "Branding your name could be such a ( Brand Name, Logo Design, Corporate Identity, PDF Manual and Brand Guidelines",
            imgSrc: require('../Images/branding.png')
        },
    ];

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);

    return (
        <div id={"our-services"} className="page-section services-sec">
            <section className="spikes"></section>

            <Title txt={"our services"} />
            <div className="container">
                <div className="services-items">
                    {
                        servicesList.map((item, i) => {
                            return (
                                <motion.div
                                    initial={{ opacity: 0, x: ((i + 1) % 2 === 0) ? 300 : -300 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        x: { duration: 0.4, ease: "linear" },
                                        opacity: { duration: 0.4, delay: 0.2, ease: "linear" },
                                    }}
                                    key={`services-item-${i}`}
                                    className={`services-item r${i + 1}`}
                                >
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <div className="serv-icon">
                                        <img src={item.imgSrc} alt="" />
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>


                <ul className="stat-sec">
                    {statisticsList.map((item, i) => {
                        const setValue = [setValue1, setValue2, setValue3, setValue4][i];
                        const value = [value1, value2, value3, value4][i];

                        return (
                            <motion.li
                                key={"stat-item-" + i}
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    x: { duration: 0.4, type: "tween", ease: "linear" },
                                    y: { duration: 0.4, type: "tween", ease: "linear" },
                                    opacity: { duration: 0.4, delay: 0.2, type: "tween", ease: "linear" },
                                }}
                                className="stat-item"
                            >
                                <div className="stat-icon">
                                    <img src={item.iconSrc} alt="icon" />
                                </div>
                                <div className="stat-info">
                                    <h2>{item.title}</h2>
                                    <motion.p
                                        initial={{ value: 0 }}
                                        whileInView={{
                                            value: item.counter,
                                            transition: { duration: 3, delay: 0.4 },
                                        }}
                                        onUpdate={(latest) => {
                                            setValue(Math.round(latest.value));
                                        }}
                                    >
                                        {Math.round(value)}
                                    </motion.p>
                                </div>
                            </motion.li>
                        );
                    })}
                </ul>
            </div>

        </div>
    );
}

function ContactUs() {
    const [formErrors, setFormErrors] = useState({});
    const formRef = useRef();
    const [isValid, setIsValid] = useState(false);

    const validateForm = () => {
        const errors = {};
        const form = formRef.current;

        // Name validation (not empty, only letters)
        if (!form['from_name'].value.trim() || !/^[A-Za-z\s]+$/.test(form['from_name'].value)) {
            errors.name = 'Please enter a valid name (letters only)';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form['from_email'].value.trim() || !emailRegex.test(form['from_email'].value)) {
            errors.email = 'Please enter a valid email';
        }

        // Phone validation (not empty, only digits, length 10-15)
        if (!form['from_phone'].value.trim() || !/^\d{10,15}$/.test(form['from_phone'].value)) {
            errors.phone = 'Please enter a valid phone number (10-15 digits)';
        }

        // Message validation (not empty)
        if (!form['message'].value.trim()) {
            errors.message = 'Please enter a message';
        }

        // Subject validation (not empty)
        if (!form['subject'].value.trim()) {
            errors.subject = 'Please enter a subject';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsValid(true);
        let submitBtn = document.querySelector("button[type='submit']");
        if (submitBtn) {
            submitBtn.classList.add('send-mail');
        }
        let alertDom = document.querySelector(".alert");
        setTimeout(() => {
            if (alertDom)
                alertDom.style.opacity = '1';
        }, 2000)
        setTimeout(() => {
            if (alertDom)
                alertDom.style.opacity = '0';
        }, 4000);
    };
    let inputStyles = {
        width: "100%",
        '& .MuiInputBase-input': {
            color: 'var(--bg-second-col)',
        },
        '& .MuiInputLabel-root': {
            color: 'var(--bg-second-col)',
            fontWeight: 'bold'
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: 'var(--bg-second-col)',
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: 'var(--bg-second-col)',
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "var(--bg-second-col)",
        },
        display: 'block',
        '& input:-webkit-autofill': {
            backgroundColor: 'transparent !important',
            WebkitTextFillColor: 'var(--bg-second-col)',
            transition: 'background-color 5000s ease-in-out 0s',
        },
    };
    return (
        <div id={"contact-us"} className="contact-sec page-section">
            <section className="spikes"></section>
            <Title txt={"contact us"} />
            <div className="container">
                <div className="contact-form">
                    <motion.iframe
                        initial={{ opacity: 0, x: 400 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            x: { duration: 0.5, ease: "linear" },
                            y: { duration: 0.5, ease: "linear" },
                            opacity: { duration: 0.5, delay: 0.2, ease: "linear" },
                        }}
                        className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.6120148033656!2d31.287120924656506!3d30.076653917044325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581aa0476faf15%3A0x61a1e5a21354321a!2z2KzYp9mF2LnYqSDYudmK2YYg2LTZhdiz!5e0!3m2!1sar!2seg!4v1733793071824!5m2!1sar!2seg"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></motion.iframe>

                    <motion.form
                        initial={{ opacity: 0, x: -400 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{
                            x: { duration: 0.5, ease: "linear" },
                            y: { duration: 0.5, ease: "linear" },
                            opacity: { duration: 0.5, delay: 0.2, ease: "linear" },
                        }}
                        ref={formRef}
                        onSubmit={sendEmail}
                    >
                        <TextField
                            name='from_name'
                            id="Name"
                            label="Name"
                            variant="standard"
                            fullWidth
                            sx={inputStyles} margin="normal"
                            error={!!formErrors.name}
                            helperText={formErrors.name}
                        />

                        <TextField
                            name='from_email'
                            id="Email"
                            label="Email"
                            variant="standard"
                            fullWidth
                            sx={inputStyles} margin="normal"
                            error={!!formErrors.email}
                            helperText={formErrors.email}
                        />

                        <TextField
                            name='from_phone'
                            id="Phone"
                            label="Phone"
                            variant="standard"
                            fullWidth
                            sx={inputStyles} margin="normal"
                            error={!!formErrors.phone}
                            helperText={formErrors.phone}
                        />

                        <TextField
                            name='subject'
                            id="Subject"
                            label="Subject"
                            variant="standard"
                            helperText={formErrors.subject}
                            error={!!formErrors.subject}
                            fullWidth
                            sx={inputStyles} margin="normal"
                        />

                        <TextField
                            name='message'
                            id="Message"
                            label="Message"
                            multiline
                            rows={8}
                            variant="standard"
                            fullWidth
                            sx={inputStyles} margin="normal"
                            error={!!formErrors.message}
                            helperText={formErrors.message}
                        />

                        <button type="submit" disabled={isValid}>
                            <span className="txt">Submit</span>
                            <span className="txt2">Sent!</span>
                            <span className="loader-container">
                                <span className="loader"></span>
                            </span>
                        </button>
                    </motion.form>
                </div>

                <ul className="contact-info">
                    <li>
                        <div className="icon-cont">
                            <LocationOnIcon />
                        </div>
                        <div>
                            <span>Address: </span>
                            <a href="https://www.google.com/maps/place/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9+%D8%B9%D9%8A%D9%86+%D8%B4%D9%85%D8%B3%E2%80%AD/@30.0766539,31.2871209,17z/data=!3m1!4b1!4m6!3m5!1s0x14581aa0476faf15:0x61a1e5a21354321a!8m2!3d30.0766493!4d31.284546!16zL20vMDZibms1?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D">Lorem ipsum dolor sit amet</a>
                        </div>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <PhoneIcon />
                        </div>
                        <div>
                            <span>Phone: </span>
                            <a href="tel: 01115793286">01115793826</a>
                        </div>
                    </li>
                    <li>
                        <div className="icon-cont">
                            <MailIcon />
                        </div>
                        <div>
                            <span>Email: </span>
                            <a href="mailto:mohammed.ashraf.zwam@gmail.com">mohammed.ashraf.zwam@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function TestimonialsContainer() {
    return (
        <div className="testimonials-sec page-section">
            <section className="spikes"></section>
            <Title txt={"testimonials"} />
            <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{
                    x: { duration: 0.5, ease: "linear" },
                    y: { duration: 0.5, ease: "linear" },
                    opacity: { duration: 0.5, delay: 0.2, ease: "linear" },
                }}
                className="container">
                <Testimonials />
            </motion.div>
        </div>
    );
}

function Footer() {
    let language = useContext(LangContext);
    const currentYear = new Date().getFullYear();

    const [email, setEmail] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(validateEmail(value));
    };

    const handleSendEmail = async () => {
        if (!isValid || email === "") return;
        let alertDom = document.querySelector(".alert");
        setIsSending(true);
        setTimeout(() => {
            setIsSending(false);
            setEmail("");
            if (alertDom)
                alertDom.style.opacity = '1';
        }, 2000)
        setTimeout(() => {
            if (alertDom)
                alertDom.style.opacity = '0';
        }, 4000);
    };


    return (
        <footer>
            <div className="container">
                <div className="inner-container">
                    <div className="info">
                        <img src={require("../Images/logo-col2.png")} alt="logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h2 className="title">company</h2>
                        <ul className="quick-links">
                            <li>
                                <Link to="/">
                                    <FontAwesomeIcon className="link-icon" icon={faAnglesRight} />
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/academy">
                                    <FontAwesomeIcon className="link-icon" icon={faAnglesRight} />
                                    <span>Academy</span>
                                </Link>
                            </li>
                            <li>
                                <FontAwesomeIcon className="link-icon" icon={faAnglesRight} />
                                <a href="#about-us"><span>about us</span></a>
                            </li>
                            <li>
                                <FontAwesomeIcon className="link-icon" icon={faAnglesRight} />
                                <a href="#our-services"><span>our services</span></a>
                            </li>
                            <li>
                                <FontAwesomeIcon className="link-icon" icon={faAnglesRight} />
                                <a href="#contact-us"><span>contact us</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className="news">
                        <h2 className="title">Newsletter</h2>
                        <form className="send-container">
                            <TextField
                                name="from_email"
                                id="Email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={email}
                                onChange={handleInputChange}
                                error={!isValid && email !== ""}
                                helperText={!isValid && email !== "" ? "Please enter a valid email address." : ""}
                                color="var(--bg-main-col)"
                                className="email-field hover-element"
                            />
                            <Button
                                className="send-icon hover-element"
                                variant="outlined"
                                color="var(--bg-main-col)"
                                disabled={!isValid || email === "" || isSending}
                                onClick={handleSendEmail}
                                startIcon={
                                    isSending ? (
                                        <FontAwesomeIcon className="hover-element" icon={faSpinner} spin />
                                    ) : (
                                        <FontAwesomeIcon className="hover-element" icon={faPaperPlane} />
                                    )
                                }
                            >
                            </Button>
                        </form>
                        <p className="description">Sign up for our latest news & articles. We won’t give you spam mails.</p>
                    </div>
                </div>

                <ul className="contact-methods">
                    <li>
                        <a href="mailto:mohammed.ashraf.zwam@gmail.com">
                            <MarkunreadOutlinedIcon className="hover-element" />
                        </a>
                    </li>
                    <li>
                        <a href="tel:01115793826">
                            <LocalPhoneIcon className="hover-element" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohammed-ashraf-2992512a7/">
                            <LinkedInIcon className="hover-element" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100084698750118">
                            <FacebookIcon className="hover-element" />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+201115793826">
                            <WhatsAppIcon className="hover-element" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mohammed0__0zwam/">
                            <InstagramIcon className="hover-element" />
                        </a>
                    </li>
                </ul>

                <p className="rights">
                    &copy; {currentYear}
                    {
                        language.lang === "en" ?
                            ` All Rights Reserved | PixelWave Group` :
                            ` PixelWave Group | كل الحقوق محفوظة لدَى `
                    }
                </p>
            </div>
        </footer >
    );
}