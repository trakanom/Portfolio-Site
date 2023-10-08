// src\components\projects\ProjectPreview.jsx
import { Link } from 'react-router-dom';

const ProjectPreview = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`}>
            <img src={project.img} alt={project.title} />
            <h2>{project.title}</h2>
            <h3>{project.short_description}</h3>
            <h3>Technologies:{project.technology}</h3>
            {/* Other preview info... */}
        </Link>
    );
};

export default ProjectPreview;
