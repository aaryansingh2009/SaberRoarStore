import './aboutus2.css';

const AboutUs2 = () => {
    return (    
        <div className="about-us">
            <div className="about-us-content">
                <h1 className="about-us-title">About Us</h1>
                <p className="about-us-text">
                    Welcome to the Saber Roar Store! We are a student-run store at Franklin High School, dedicated to providing our community with high-quality products and services. 
                    Our mission is to support our school and its programs while fostering a sense of pride and school spirit.  
                    The Roar Store was a name chosen by and voted on by students.
                    It is owned by Franklin Public Schools and was first established in 1995. 
                    The store is for the students, staff, and community of Franklin. 
                    The Roar Store's slogan is "Stocking Saber Spirit," as it provides students and staff with healthy snacks and drinks, and with basic school supplies, saber spirit wear, and handmade fleece blankets. 
                    The Roar Store is a non-profit business and is located in the front of the main Franklin High School building near the main office. 
                </p>
            </div>
            <picture className="cs-background">
                <img decoding="async" src="/images/aboutus-img.png" alt="" width="707" height="255" aria-hidden="true" />
            </picture>
        </div>
    );
}

export default AboutUs2;