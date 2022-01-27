import React from 'react';
import Fade from 'react-reveal/Fade';
// import about from '../../image/car-1.png';

const About = () => {
    const service = [
        { id: 1, text: 'ORDER WITH SPREAD PAYMENTS', image: '../../../assets/smartph.png' },
        { id: 2, text: 'SLEEP & TRAVEL IN COMFORT', image: '../../../assets/travel.png' },
        { id: 3, text: 'FULLY LICENSED TOUR OPERATOR', image: '../../../assets/sleep.png' },
    ]
    return (
        <section className="max-w-screen-xl mx-auto px-8">
            {/* heading  */}
            <Fade left>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-logo text-gray-800 text-3xl font-semibold">About Us</h1>
                    <div className="h-1 w-24 bg-red-400 rounded-full">
                    </div>
                </div>
            </Fade>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-8">
                {/* left side image  */}
                <Fade left>
                    <div className="flex justify-center lg:justify-start">
                        <img src="https://kundutirthoovraman.com/wp-content/uploads/2018/11/bangladesh-tourist-banner.jpg" alt="about" />
                    </div>
                </Fade>
                {/* right side description  */}
                <Fade right>
                    <div className="flex flex-col items-center lg:items-start space-y-3">
                        {/* description  */}

                        
                        <h1 className="mt-4 font-primary text-gray-600 text-xl font-semibold">Welcome to Bangladesh: The Land of Rivers</h1>
                        <h1 className="mt-4 font-primary text-gray-900 text-xl font-semibold">We are Trusted Travelmate brings you the places to visit in Dhaka as well as the places to visit in Bangladesh.</h1>
                        <p className="text-gray-500 text-sm font-primary">Travelmate brings you the places to visit in Dhaka as well as the places to visit in Bangladesh. We will guide you for visiting the tourist’s spots, historical places in Bangladesh, ecotourism sites in Bangladesh and World Heritage Sites in Bangladesh. Travel Mate Team is here to make your journey affordable, enjoyable and memorable. If you are a tourist or foreign citizen, just get in touch with us and we will take the work to handle your Visa Processing, Air-Ticketing, Hotel-Booking, Tourist Transport and tour-package planning that will be suitable for you.</p>

                        {/* heading  */}
                        <h1 className="mt-4 font-primary text-gray-800 text-xl font-semibold">Why Choose Us</h1>

                        {/* services  */}
                        <div className="flex flex-col space-y-5 my-4">
                            {service.map(item => (
                                <div className="flex items-center space-x-3" key={item.id}>
                                    <img className="w-12" src={item.image} alt={item.text} />
                                    <span className="w-36 text-gray-500 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default About;