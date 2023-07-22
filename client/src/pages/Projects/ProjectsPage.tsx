import React, {useState} from 'react';
import AddProject from './components/AddProject';
import ListProjects from './components/ListProjects';

import './projects.css';
import ProjectsProvider from '../../context/ProjectsProvider';

function ProjectsPage() {
  const [showNew, setShowNew] = useState(false);
  return (
    <main className='projects-page'>
      {!showNew && (
        <>
          <ListProjects />
          <button onClick={() => setShowNew(true)}>Add new project</button>
        </>
      )}
      {showNew && <AddProject />}
    </main>
  );
}

export default ProjectsPage;
