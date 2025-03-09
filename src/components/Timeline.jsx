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
                    contentStyle={{ background: 'rgb(120, 120, 120)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
                    date={<span style={{ paddingLeft: "12px", display:"block" }}>August 2019 - May 2023</span>}
                    iconStyle={{ background: 'rgb(255, 242, 0)', color: '#000000' }}
                    icon={<School />}
                >
                    <h2 className="vertical-timeline-element-title" style={{ color: '#fff', fontWeight: 'bold'}}>
                        University of Colorado, Denver
                    </h2>
                    <h4 className="vertical-timeline-element-subtitle">
                        Denver, CO
                    </h4>
                    <p>
                        Bachelor of Science in Computer Science
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(120, 120, 120)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
                    date={<span style={{ paddingRight: "24px", display:"block" }}>April 2024 - Current</span>} 
                    iconStyle={{ background: 'rgb(194, 0, 0)', color: '#000000' }}
                    icon={<Work />}
                >
                    <h2 className="vertical-timeline-element-title" style={{ color: '#fff', fontWeight: 'bold'}}>
                        Offen Petroleum
                    </h2>
                    <h4 className="vertical-timeline-element-subtitle">
                        Commerce City, CO
                    </h4>
                    <p>
                        Commercial Motor Vehicle Petroleum Driver
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: 'rgb(120, 120, 120)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '10px solid  rgb(255, 255, 255)' }}
                    date={<span style={{ paddingLeft: "12px", display:"block" }}>January 2025 - Current</span>}
                    iconStyle={{ background: 'rgb(255, 242, 0)', color: '#000000' }}
                    icon={<School />}
                >
                    <h2 className="vertical-timeline-element-title" style={{ color: '#fff', fontWeight: 'bold'}}>
                        Georgia Institute of Technology
                    </h2>
                    <h4 className="vertical-timeline-element-subtitle">
                        Atlanta, GA
                    </h4>
                    <p>
                        Master of Science in Computer Science
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
