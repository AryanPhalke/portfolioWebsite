import { experiences } from "../../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="sec exp-sec">
      <div className="sec-label">Work history</div>
      <h2 className="sec-title">Experience</h2>
      <div className="exp-list">
        {experiences.map((item, index) => {
          const idx = String(experiences.length - index).padStart(2, '0');
          return (
            <div key={`${item.company}-${item.role}-${item.duration}`} className="exp-row">
              <div className="exp-idx">{idx}</div>
              <div>
                <div className="exp-badge">{item.mode} · {item.duration}</div>
                <div className="exp-title">{item.role}</div>
                <div className="exp-co">{item.company}</div>
                <ul className="exp-ul">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="exp-date">{item.duration}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
