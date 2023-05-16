import img1 from '../../../assets/images/about_us/person.jpg'
import img2 from '../../../assets/images/about_us/parts.jpg'


const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 pt-2 lg:pt-0">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={img1} className="w-3/4 rounded-lg  shadow-2xl" />
                    <img src={img2} className="w-1/2 right-9 top-1/2 rounded-lg border-8 border-white absolute shadow-2xl" />
                </div>
                <div className='lg:w-1/2 pt-5 lg:pt-0'>
                    <h1 className="text-3xl font-bold pb-5 text-orange-500">About Us</h1>
                    <h1 className="text-7xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="pt-5 pb-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className="pb-5">The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn bg-orange-500 hover:bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;