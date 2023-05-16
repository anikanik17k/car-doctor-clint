import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full rounded-xl" />
                <div className="w-full h-full p-5 lg:p-24 rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute transform">
                    <div className='lg:w-1/4 lg:pt-5 text-white space-y-7'>
                        <h2 className='font-bold text-2xl lg:text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='lg:flex'>
                            <button className="btn bg-orange-500 mr-5 hover:bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-warning  sm:mb-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide6" className="btn btn-circle mr-5 hover:bg-orange-500"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle hover:bg-orange-500"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full rounded-xl" />
                <div className="w-full h-full p-5 lg:p-24 rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute transform">
                    <div className='lg:w-1/4 lg:pt-5 text-white space-y-7'>
                        <h2 className='font-bold text-2xl lg:text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='lg:flex'>
                            <button className="btn bg-orange-500 mr-5 hover:bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-warning  sm:mb-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 hover:bg-orange-500"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle hover:bg-orange-500"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full rounded-xl" />
                <div className="w-full h-full p-5 lg:p-24 rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute transform">
                    <div className='lg:w-1/4 lg:pt-5 text-white space-y-7'>
                        <h2 className='font-bold text-2xl lg:text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='lg:flex'>
                            <button className="btn bg-orange-500 mr-5 hover:bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-warning  sm:mb-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 hover:bg-orange-500"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle hover:bg-orange-500"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full rounded-xl" />
                <div className="w-full h-full p-5 lg:p-24 rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute transform">
                    <div className='lg:w-1/4 lg:pt-5 text-white space-y-7'>
                        <h2 className='font-bold text-2xl lg:text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='lg:flex'>
                            <button className="btn bg-orange-500 mr-5 hover:bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-warning  sm:mb-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5 hover:bg-orange-500"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide5" className="btn btn-circle hover:bg-orange-500"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={img5} className="w-full rounded-xl" />
                <div className="w-full h-full p-5 lg:p-24 rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute transform">
                    <div className='lg:w-1/4 lg:pt-5 text-white space-y-7'>
                        <h2 className='font-bold text-2xl lg:text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='lg:flex'>
                            <button className="btn bg-orange-500 mr-5 hover:bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-warning  sm:mb-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5 hover:bg-orange-500"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide6" className="btn btn-circle hover:bg-orange-500"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={img6} className="w-full rounded-xl" />
                <div className="w-full h-full p-5 lg:p-24 rounded-xl flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] absolute transform">
                    <div className='lg:w-1/4 lg:pt-5 text-white space-y-7'>
                        <h2 className='font-bold text-2xl lg:text-7xl'>Affordable Price For Car Servicing</h2>
                        <p className='font-semibold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='lg:flex'>
                            <button className="btn bg-orange-500 mr-5 hover:bg-orange-600">Discover More</button>
                            <button className="btn btn-outline btn-warning  sm:mb-2">Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle  mr-5 hover:bg-orange-500"><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle hover:bg-orange-500"><FaArrowRight></FaArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Header;