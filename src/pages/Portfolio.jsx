
import '../assets/Portfolio.css';

const Portfolio = () => {
    const projects = [
        { title: "Project 1", description: "A great React project.", link: "#" },
        { title: "Project 2", description: "A responsive web design.", link: "#" },
        { title: "Project 3", description: "An e-commerce platform.", link: "#" },
    ];

    return (
        <div className="portfolio-page">
            <h1>My Portfolio</h1>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
