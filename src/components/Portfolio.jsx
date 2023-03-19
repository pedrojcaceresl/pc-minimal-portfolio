import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "./data/portfolio";

const Portfolio = () => {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{portfolio.map((project) => {
					return <PortfolioItem
						imgUrl={project.imgUrl}
						link={project.link}
						stack={project.stack}
						title={project.title}
					/>;
				})}
			</div>
		</div>
	);
};

export default Portfolio;
