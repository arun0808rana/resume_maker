import data from "./Data";
import Features from "./features/Features";

const Resume = () => {
  return (
    <div className="resume">
      {/* <button onClick={handlePrint}>Print This Page</button> */}
      <div className="flex-between">
        <h1>{data.name}</h1>
        <Features />
      </div>
      <div className="designation">
        <h2>{data.title} </h2>
        {/* <h2 className="total-xp">{data.totalExperience} years</h2> */}
      </div>

      <div className="contents">
        {data.personalInfo.map((info) => {
          return (
            <div className="personal-info" key={info.title}>
              <div className="titles">{info.title}:</div>
              {info.type === "text" ? (
                <div className="title-values">{info.value}</div>
              ) : (
                <a href={info.value} target="_blank" rel="noopener noreferrer">
                  {info.value}
                </a>
              )}
            </div>
          );
        })}
      </div>

      <h3 className="headings">Experience</h3>
      <div className="contents">
        {data.experience
          .sort((a, b) => b.id - a.id)
          .map((job) => (
            <div className="experience" key={job.id}>
              <h4 className="company-name">{job.company}</h4>
              <p>{job.position}</p>
              <p className="dates">
                {job.dates.from} - {job.dates.to}
              </p>
              <ul>
                {job.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <h3 className="headings">Projects</h3>
      <div className="contents">
        {data.projects.map((project, index) => (
          <div key={index}>
            <h4 className="project-headings">
              {index + 1}. {project.name}
            </h4>
            <ul>
              {project.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
            <div className="technologies">
              {project.technologies.map((tech) => {
                return <div className="pills">{tech}</div>;
              })}
            </div>
          </div>
        ))}
      </div>

      <h3 className="headings">Skills</h3>
      <div className="contents">
        <div className="skills">
          {data.skills.map((skill, index) => {
            return (
              <div className="skill" key={skill.id}>
                {skill.name}
                {data.skills.length === index + 1 ? "" : " |"}
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="headings">Certifications</h3>
      <div className="contents">
        {data.certifications.map((cert) => (
          <div key={cert.id} style={{ marginBottom: "16px" }}>
            <li>
              {cert.name} - {cert.institution}
              <a
                target="_blank"
                href={cert.link}
                style={{ display: "block", paddingLeft: "1.5rem" }}
              >
                {cert.link}
              </a>
            </li>
          </div>
        ))}
      </div>

      <h3 className="headings">Languages</h3>
      <div className="contents">
        <p>{data.languages.join(", ")}</p>
      </div>
    </div>
  );
};

export default Resume;
