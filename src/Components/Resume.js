import React, { Component } from "react";
import Slide from "react-awesome-reveal";
//import { CSSTransition } from "react-transition-group";


class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expandedWorkItems: [], // Track expanded work items by index
            allExpanded: false
        };
    }

    handleExpandAll = () => {
        const newExpandedWorkItems = this.props.data.work.map((_, index) => index); // Expand all
        this.setState({
            expandedWorkItems: newExpandedWorkItems,
            allExpanded: true
        });
    };

    handleCloseAll = () => {
        this.setState({
            expandedWorkItems: [], // Collapse all
            allExpanded: false
        });
    };

    handleToggleWorkItem = (workIndex) => {
        this.setState(prevState => {
            const { expandedWorkItems } = prevState;
            // Toggle presence of the index
            const indexExists = expandedWorkItems.includes(workIndex);
            return {
                expandedWorkItems: indexExists
                    ? expandedWorkItems.filter(i => i !== workIndex) // Remove
                    : [...expandedWorkItems, workIndex] // Add
            };
        });
    }


  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

      const work = this.props.data.work.map((work, workIndex) => {
          const isExpanded = this.state.expandedWorkItems.includes(workIndex) || this.state.allExpanded;

          return (
              <div key={work.company}>
                  <h3>{work.company}</h3>
                  <p className="info">
                      {work.title}
                      <span>&bull;</span> <em className="date">{work.years}</em>
                  </p>

                  <button onClick={() => this.handleToggleWorkItem(workIndex)}>
                      {isExpanded ? 'Collapse' : 'Expand'}
                  </button>

                  <ul style={{ display: isExpanded ? 'block' : 'none' }}>
                      {work.description.map((item, itemIndex) => (
                          <li key={itemIndex}>
                              <span>{item.item}</span>
                          </li>
                      ))}
                  </ul>
              </div>
          );
      });

      const skills = this.props.data.skills.map((skills) => {
          const backgroundColor = this.getRandomColor();
          const className = "bar-expand " + skills.name.toLowerCase();
          const width = skills.level;

          return (
              <li key={skills.name}>
                  <span style={{width, backgroundColor}} className={className}></span>
                  <em>{skills.name}</em>
              </li>
          );
      });

      return (
      <section id="resume">
        <Slide left duration={300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

              <div className="nine columns main-col">
                  <button onClick={this.handleExpandAll}>Expand All</button>
                  <button onClick={this.handleCloseAll}>Close All</button>
                  {work}
              </div>
          </div>
        </Slide>

          <Slide left duration={300}>
              <div className="row skill">
                  <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
