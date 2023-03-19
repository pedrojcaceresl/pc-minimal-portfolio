import React from 'react';


const Intro = () => {
    return (
		<div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
			<h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
				Pedro
			</h1>
			<p className="text-base md:text-xl mb-3 font-medium">
				Web Developer
			</p>
			<p className="text-sm max-w-xl mb-6 font-bold">
				Hi, I’m Pedro, a web developer with one year of experience in
				creating responsive and user-friendly websites. I specialize in
				HTML, TawilwindCSS, JavaScript, TypeScript, Node and Angular development.
                 {/* I have worked on projects for various clients... */}
                <br/>
                I’m passionate about web design and always strive
				to learn new technologies and best practices. I also have a blog on medium
                and a podcast in Spanish on Spotify.
			</p>
		</div>
	);
}

export default Intro