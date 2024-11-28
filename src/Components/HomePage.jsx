import LanguageToggle from "./LanguageToggle";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { LangContext } from "../Contexts/LangContext";
import MenuBar from './MenuBar';

export default function HomePage() {
    let floatingElements = [];
    for (let i = 0; i < 25; i++)
        floatingElements.push(<div key={i} className="box" style={{ animationDelay: `${i * 0.35}s` }}></div>);

    return (
        <main className="home-page">
            <div className="overlay"></div>
            <Header />
            <section>
                {/* {floatingElements} */}
                <Link to="/agency">
                    <Department
                        dep="agency"
                        depImgSrc={require("../Images/agency.png")}
                        iconSrc={require("../Images/agencyIcon.png")}
                    />
                </Link>
                <Link to="/academy">
                    <Department
                        dep="academy"
                        depImgSrc={require("../Images/academy.png")}
                        iconSrc={require("../Images/academyIcon.png")}
                    />
                </Link>
            </section>
            <Footer />
        </main>
    );
}

function Header() {
    let [aboutClicked, setAboutClicked] = useState(false);
    let [newsClicked, setNewsClicked] = useState(false);
    let [contactClicked, setContactClicked] = useState(false);
    let language = useContext(LangContext);
    return (
        <header>
            <LanguageToggle />
            <MenuBar />
            <nav>
                <ul>
                    <li
                        className="nav-link hover-element"
                        onClick={() => {
                            setAboutClicked(true);
                        }}
                    >
                        {language.lang === "en" ? "About Us" : "نبذة عنّا"}
                    </li>
                    {/* <li>|</li> */}
                    <li
                        className="nav-link hover-element"
                        onClick={() => {
                            setNewsClicked(true);
                        }}
                    >
                        {language.lang === "en" ? "News" : "الأخبار"}
                    </li>
                    {/* <li>|</li> */}
                    <li
                        className="nav-link hover-element"
                        onClick={() => {
                            setContactClicked(true);
                        }}
                    >
                        {language.lang === "en" ? "Contact Us" : "تواصل معنا"}

                    </li>
                </ul>
            </nav>
            {/* <ThemeToggle /> */}
            <Collapse show={aboutClicked} setShow={setAboutClicked} />
            <Collapse show={newsClicked} setShow={setNewsClicked} />
            <Collapse show={contactClicked} setShow={setContactClicked} />
        </header>
    );
}

function Footer() {
    const currentYear = new Date().getFullYear();
    let language = useContext(LangContext);

    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <a  href="mailto:mohammed.ashraf.zwam@gmail.com">
                            <MarkunreadOutlinedIcon className="hover-element"/>
                        </a>
                    </li>
                    <li>
                        <a href="tel:01115793826">
                            <LocalPhoneIcon className="hover-element"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohammed-ashraf-2992512a7/">
                            <LinkedInIcon className="hover-element"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100084698750118">
                            <FacebookIcon className="hover-element"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/+201115793826">
                            <WhatsAppIcon className="hover-element"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mohammed0__0zwam/">
                            <InstagramIcon className="hover-element"/>
                        </a>
                    </li>
                </ul>
            </nav>
            <p>
                &copy; {currentYear}
                {
                    language.lang === "en" ?
                        ` All Rights Reserved | PixelWave Group` :
                        ` PixelWave Group | كل الحقوق محفوظة لدَى `
                }

            </p>
        </footer>
    );
}

function Department({ dep, depImgSrc, iconSrc }) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const icons = document.querySelectorAll(`.${dep} img`);
            icons.forEach((icon) => {
                const speed = 4;
                const x = (window.innerWidth - e.pageX * speed) / 100;
                const y = (window.innerHeight - e.pageY * speed) / 100;
                icon.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        if (isHovered) {
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            const icons = document.querySelectorAll(`.${dep} img`);
            icons.forEach((icon) => {
                icon.style.transform = 'translateX(0px) translateY(0px)';
            });
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [dep, isHovered]);

    return (
        <div
            className={`${dep} dep-container hover-element`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={depImgSrc} alt="" className="hover-element" />
            <img src={iconSrc} alt="" className="dep-icon hover-element" />
        </div>
    );
}


function Collapse({ show, setShow }) {
    return (
        <div
            className="custom-collapse"
            style={{ height: show ? "100%" : "0%" }}
        >
            <div
                className="close-icon hover-element"
                onClick={() => {
                    setShow(false);
                }}
            >
                <CloseIcon />
            </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to
                make a type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
            </p>
        </div>
    );
}
