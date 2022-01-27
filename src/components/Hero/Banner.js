import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';


const content = [
	{
		title: 'Explore Bangladesh Tour',
		description:
		'Hello guys, Explore Bangladesh Tour. I am senior art director and founder.fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Book Tour',
		image: 'https://www.travelmate.com.bd/wp-content/uploads/2019/06/sajekvalley.jpg',
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Cox’s Bazar Tour: The Beach Holiday',
		description:
		'Cox’s Bazar Tour: The Beach Holiday id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: 'https://www.travelmate.com.bd/wp-content/uploads/2019/06/Sajek-768x450.jpg',
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'The Adventure in Hill Tract',
		description:
		'Bandarban is located in the south-eastern part of Bangladesh on consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Book tour',
		image: 'https://www.travelmate.com.bd/wp-content/uploads/2019/06/Sajek-Valley.jpg',
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];
const Banner = () => {
    return (
        <div>
		
		<Slider autoplay={3000}
		
		className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content w-full"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1 >{item.title}</h1>
						<p>{item.description}</p>
						<button className="hero-slider">{item.button}</button>
					</div>
					{/* <section className="flex ">
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
		</Slider>
	</div>
    );
};

export default Banner;
render(<Banner />, document.getElementById('root'));