import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import './Softwares.css'; // Import the CSS for styling

// Individual Software Component
class Software extends Component {
  render() {
    const { data } = this.props;

    // Title as a clickable link
    const title = (
      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="title"
        aria-label={`Project: ${data.title}`}
      >
        {data.title}
      </a>
    );

    // Source code link
    const sourceLink = data.source ? (
      <span>
        {' '}
        [
        <a
          href={data.source}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Source code for ${data.title}`}
        >
          source code
        </a>
        ]
      </span>
    ) : null;

    // Description of the project
    const description = <p className="description">{data.desc}</p>;

    return (
      <li>
        {title}
        {sourceLink}
        {description}
      </li>
    );
  }
}

// Softwares Component to render the list of projects
class Softwares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data, // Initialize with the data passed as props
    };
  }

  render() {
    if (this.props.data) {
      const { data } = this.props;

      // Map each software/project item to a <Software> component
      const softwareList = data.map((software, i) => (
        <Software data={software} key={i} />
      ));

      return (
        <Row className="softwares-container">
        <ul>{softwareList}</ul>
        </Row>

      );
    } else {
      return <Row className="softwares-container" />;
    }
  }
}

export default Softwares;
