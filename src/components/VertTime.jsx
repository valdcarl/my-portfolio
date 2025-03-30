import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Import icons from react-icons
import { FaBriefcase, FaGraduationCap, FaStar } from "react-icons/fa";

import "./VertTime.css"

function VertTime() {
  return (
    <VerticalTimeline animate={true}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#101010", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(255, 255, 255)" }}
        date={<span>August 2019 - May 2023 &nbsp; | &nbsp; Denver, CO</span>}
        iconStyle={{ background: "#FC3636", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">University of Colorado, Denver</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h4>
        <ul>
            <li>Graduated from CU Denver with distinction, earning Dean's List recognition</li>
            <li>Excelled in coursework such as Data Structures & Algorithms, Advanced Java & Python, Data Science, Machine Learning, Probability & Statistics, Software Engineering</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#101010", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(255, 255, 255)" }}
        date={<span>April 2024 - April 2025 &nbsp; | &nbsp; Commerce City, CO</span>}
        iconStyle={{ background: "#FC3636", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Offen Petroleum</h3>
        <h4 className="vertical-timeline-element-subtitle">Commerce City, Colorado</h4>
        <ul>
            <li>Operating Commercial Motor Vehicles with a Class-A license across the entire Colorado region helping generate over $1,000,000+ in revenue during my tenure</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#101010", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(255, 255, 255)" }}
        date={<span>January 2025 - Present &nbsp; | &nbsp; Atlanta, GA</span>}
        iconStyle={{ background: "#FC3636", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">Georgia Institute of Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Master of Science in Computer Science</h4>
        <ul>
            <li>Pursuing my Masters to advance my knowledge in multiple disciplines from Software Engineering, Data Science, Data Analytics, Data Modeling, Artifical Intelligence, Machine Learning, and much more</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "#101010", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid rgb(255, 255, 255)" }}
        date={<span>April 2025 - Present &nbsp; | &nbsp; Wheat Ridge, CO</span>}
        iconStyle={{ background: "#FC3636", color: "#fff" }}
        icon={<FaBriefcase />}
      >
        <h3 className="vertical-timeline-element-title">Gaming Labs International </h3>
        <h4 className="vertical-timeline-element-subtitle">Test Engineer I</h4>
        <ul>
            <li>Utilize knowledge of C++ and other modern Object-Oriented Programming language/s to develop and execute test methods for technical and client requirements</li>
            <li>Document testing results and discovered defects</li>
            <li>Manage projects and tasks against budgets and timelines</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "#123524", color: "#fff" }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  );
}

export default VertTime;