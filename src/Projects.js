import './Projects.css';

const projects_data = [
    { title: "Rules 2.0", type: "Migration", company: "Relevantz Technology Services", client: "Athenahealth", technologies: "Perl, Java, FEEL Expression, and DMN", desc: "Migrate existing rules which were written in Perl into Java based Decision Model Notation using FEEL Expression and Java" },
    { title: "Copy-editing & Pre-editing Automation Tool", type: "Windows Desktop Application", company: "Nova Techset Private Limited", client: "Nova Techset Private Limited", technologies: "Visual Basic for Applications (VBA), VSTO C#", desc: "Automatically identifies the elements of author’s manuscript. Crosslinking of floating objects and references. Validates references against online repositories like Crossref, Pubmed etc. Contains utilities to reduce the manual work and increase the quality" }
  ]

function Projects() {
    return (
        <div className="Projects">
          <h1>My Key Projects</h1>
              {
                projects_data.map((value, key) => {
                  return (
                    <table className="styled-table">
                        <tbody>
                            <tr className='title-row'>
                                <td >Project Title</td>
                                <td>{value.title}</td>
                            </tr>
                            <tr>
                                <td>Project Type</td>
                                <td>{value.type}</td>
                            </tr>
                            <tr>
                                <td>Organization</td>
                                <td>{value.company}</td>
                            </tr>
                            <tr>
                                <td>Client</td>
                                <td>{value.client}</td>
                            </tr>
                            <tr>
                                <td>Technologies</td>
                                <td>{value.technologies}</td>
                            </tr>
                            <tr>
                                <td>Project Description</td>
                                <td>{value.desc}</td>
                            </tr>
                        </tbody>
                    </table>
                  )
                })
              }
        </div>
      );
}

export default Projects;
