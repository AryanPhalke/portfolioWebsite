import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="sec skills-sec">
      <div className="sec-label">Capabilities</div>
      <h2 className="sec-title">
        Skills &
        <br />
        Technologies
      </h2>
      <div className="skills-wrap">
        {skills.map((group) => (
          <article key={group.category} className="skill-card">
            <div className="sk-group-title">{group.category}</div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
