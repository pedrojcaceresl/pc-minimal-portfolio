import React from 'react';


const Intro = () => {
    return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
				Hello, I'm Pedro!
			</h1>
			<p className="text-base md:text-xl mb-3 font-medium">
				Web Developer
			</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				Greetings! I'm Pedro Caceres, a web developer with
				nearly two years of experience crafting responsive and
				user-friendly websites. My skill set includes HTML, Tailwind
				CSS, JavaScript, TypeScript, Node.js, React, and Angular
				development.
				<br />
				<br />
				My passion for development drives me to constantly explore new
				technologies and adopt best practices. You can also find me
				sharing my insights through my{" "}
				<a
					className="text-blue-400"
					href="https://medium.com/@pedro.jcaceresl"
				>
					Medium blog
				</a>{" "}
				and hosting a{" "}
				<a
					className="text-blue-400"
					href="https://open.spotify.com/show/2kNjETgrswYSu4Eu6sLRDX"
				>
					Spanish-language podcast on Spotify
				</a>
				.
			</p>
		</div>
	);
}

export default Intro