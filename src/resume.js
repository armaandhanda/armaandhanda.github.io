import React, { Component } from 'react';
import FlashCard from './FlashCard'; //  Import the updated FlashCard component

class ResumeEducation extends Component {
  render() {
    const { data } = this.props;

    return (
      <section className="resume-section">
        <h3 className="resume-heading">Education</h3>
        {data.map((item, i) => (
          <FlashCard
            key={i}
            title={`${item.name} (${item.degree} in ${item.area})`}
            subtitle={item.date}
            body={
              <>
                <div><strong>Location:</strong> {item.location}</div>
                <div><strong>Summary:</strong> {item.summary}</div>
              </>
            }
          />
        ))}
      </section>
    );
  }
}

class ResumeWork extends Component {
  render() {
    const { data } = this.props;

    return (
      <section className="resume-section">
        <h3 className="resume-heading">Work</h3>
        {data.map((item, i) => (
          <FlashCard
            key={i}
            title={`${item.name} (${item.position})`}
            subtitle={item.date}
            body={
              <>
                <div><strong>Location:</strong> {item.location}</div>
                <div><strong>Summary:</strong> {item.summary}</div>
              </>
            }
          />
        ))}
      </section>
    );
  }
}

class ResumeSkills extends Component {
  render() {
    const { data } = this.props;

    return (
      <section className="resume-section">
        <h3 className="resume-heading">Skills</h3>
        {data.map((skill, i) => {
          const hasSubLevel = !Array.isArray(skill.items);
          const content = hasSubLevel
            ? Object.keys(skill.items).map((key) => (
                <div key={key}>
                  <strong>{key}:</strong> {skill.items[key].join(', ')}
                </div>
              ))
            : <span>{skill.items.join(', ')}</span>;

          return (
            <FlashCard
              key={i}
              title={skill.category}
              body={content}
            />
          );
        })}
      </section>
    );
  }
}

class Resume extends Component {
  render() {
    const { data } = this.props;

    if (!data) {
      return <section className="resume" />;
    }

    return (
      <div className="resume container">
        <ResumeWork data={data.work} />
        <ResumeEducation data={data.education} />
        <ResumeSkills data={data.skills} />
      </div>
    );
  }
}

export default Resume;
