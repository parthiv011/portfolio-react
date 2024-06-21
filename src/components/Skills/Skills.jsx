import { Languages, FrameworksAndTools } from '../../utils/skilldata';
import './Skills.css';

export const Skills = () => {
  return (
    <>
      <section className="skill-section">
        <header className="skill-header">Tech Stack</header>

        {/* Languages */}
        {Languages.length > 0 && (
          <div>
            <h2 className="skill-type">Languages</h2>
            <div className="skills">
              {Languages.map((x, index) => (
                <div key={index}>
                  <img src={x.logo} alt="Skill-Image" title={x.skill}></img>
                  <p>{x.skill}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/*  Frameworks & Tools */}
        {FrameworksAndTools.length > 0 && (
          <div>
            <h2 className="skill-type">Frameworks And Tools</h2>
            <div className="skills">
              {FrameworksAndTools.map((x, index) => (
                <div key={index}>
                  <img src={x.logo} title={x.skill} alt="Skill-Image"></img>
                  <p>{x.skill}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
