import React from "react"

// react-vertical-timeline-component
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css'
import { School, Work, Check } from "@mui/icons-material"

const Timeline = () => {
    console.log("Timeline componenet rendering...")
    return (
        <div>
            <h2 className='text-emerald-700'>By: Carlos A. Valdez</h2>
           <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '12px solid  rgb(255, 255, 255)' }}
                    date="August 2019 - May 2023"
                    iconStyle={{ background: 'rgb(255, 242, 0)', color: '#000000' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        University of Colorado, Denver
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Denver, CO
                    </h4>
                    <p>
                        Bachelor of Science in Computer Science
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '12px solid  rgb(255, 255, 255)' }}
                    date="April 2024 - Present"
                    iconStyle={{ background: 'rgb(194, 0, 0)', color: '#000000' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Offen Petroleum
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Commerce City, CO
                    </h4>
                    <p>
                        Commercial Motor Vehicle Petroleum Driver
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '12px solid  rgb(255, 255, 255)' }}
                    date="January 2025 - Present"
                    iconStyle={{ background: 'rgb(255, 242, 0)', color: '#000000' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Georgia Institute of Technology
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Atlanta, GA
                    </h4>
                    <p>
                        Master of Science in Computer Science
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(30, 181, 0)', color: '#fff' }}
                    icon={<Check />}
                />
                </VerticalTimeline>
        </div>
    )
}

export default Timeline
