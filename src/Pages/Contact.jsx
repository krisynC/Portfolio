import { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
    const carouselRef = useRef(null);

    // AUTO SCROLL CAROUSEL
    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({
                    left: 240,
                    behavior: "smooth",
                });

                // reset loop
                if (
                    carouselRef.current.scrollLeft +
                        carouselRef.current.clientWidth >=
                    carouselRef.current.scrollWidth
                ) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    // COPY FUNCTION
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied: " + text);
    };

    const openWhatsApp = () => {
        window.open("https://wa.me/919110193724", "_blank");
    };

    return (
        <div className="contactPage">

            {/* FLOATING BACKGROUND GLOW */}
            <div className="glow glow1"></div>
            <div className="glow glow2"></div>

            <div className="contactCard">

                <h1>📩 Contact Me</h1>

                <p>
                    Open for frontend roles, internships & freelance projects.
                </p>

                {/* CAROUSEL */}
                <div className="contactInfo" ref={carouselRef}>

                    <div className="contactItem">
                        <h3>📧 Email</h3>
                        <p onClick={() => copyText("syn7ray@gmail.com")}>
                            syn7ray@gmail.com
                        </p>
                    </div>

                    <div className="contactItem">
                        <h3>📞 Phone</h3>
                        <p onClick={() => copyText("9110193724")}>
                            +91 9110193724
                        </p>
                    </div>

                    <div className="contactItem">
                        <h3>📍 Location</h3>
                        <p>Pune, India</p>
                    </div>

                </div>

                {/* ACTION BUTTONS */}
                <div className="contactActions">

                    <button onClick={openWhatsApp}>
                        WhatsApp Me
                    </button>

                </div>

                <div className="contactFooter">
                    Let’s build something amazing 🚀
                </div>

            </div>

        </div>
    );
};

export default Contact;