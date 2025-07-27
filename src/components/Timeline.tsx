import React from 'react';
import './Timeline.css';

const Timeline: React.FC = () => {
    const years = ['2025', '2024', '2023', '2022'];

    return (
        <div className="timeline-wrapper">
            {/* 顶端紫色箭头 */}
            <div className="timeline-arrow"></div>

            {/* 中心垂直线 */}
            <div className="timeline-line"></div>

            {/* 年份节点 */}
            <div className="timeline-nodes">
                {years.map((year, index) => (
                    <div key={year} className="timeline-node" style={{ top: `${index * 360}px` }}>
                        {/* 年份文本 */}
                        <span className="timeline-year">{year}</span>

                        {/* 圆点 */}
                        <div className="timeline-dot"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;
