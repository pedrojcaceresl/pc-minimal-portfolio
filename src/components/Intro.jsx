import React from 'react';


const Intro = () => {
    return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
				Hi! I'm Pedro
			</h1>
			<p className="text-base md:text-xl mb-3 font-medium">
				Full Stack Developer
			</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				Hi, I’m Pedro Juan Caceres, a full stack developer with one year
				of experience in creating responsive and user-friendly websites.
				I specialize in HTML, Tailwind, JavaScript, TypeScript, Node
				and Angular development.
				{/* I have worked on projects for various clients... */}
				<br/><br/>
				I’m passionate about developement and always strive to learn new
				technologies and best practices. I also have a{" "}
				<a className='text-blue-400' href="https://medium.com/@pedro.jcaceresl">blog on medium </a>
				and a{" "}
				<a
					className="text-blue-400"
					href="https://open.spotify.com/show/2kNjETgrswYSu4Eu6sLRDX"
				>
					podcast in Spanish on Spotify
				</a>
				.
			</p>
		</div>
	);
}

export default Intro