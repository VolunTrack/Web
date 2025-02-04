// filename: History.tsx

import "./History.css";

function History() {
  return (
    <div className="timeline-container">
      {/* 左侧时间线 */}
      <div className="timeline">
        {/* 2025 节点 */}
        <div className="timeline-point year-2025">
          <span>2025</span>
          <div className="timeline-dot"></div>
        </div>
        {/* 2024 节点 */}
        <div className="timeline-point year-2024">
          <span>2024</span>
          <div className="timeline-dot"></div>
        </div>
        {/* 2023 节点 */}
        <div className="timeline-point year-2023">
          <span>2023</span>
          <div className="timeline-dot"></div>
        </div>
      </div>

      {/* 右侧内容 */}
      <div className="timeline-content">
        {/* 2025 内容卡片 */}
        <div className="content-card card-2025">
          <h2>Nurturing Leaders</h2>
          <p>
            In anticipation of the future, VolunTracks aspires to fortify its capacity to actualize its
            vision through heightened collaboration with other enterprises. The organization is steadfast in
            its belief that by fostering alliances and pooling resources and expertise, it can significantly
            bolster its ability to support the community. A key facet of this strategic initiative involves
            providing enhanced hands-on learning opportunities for high school students.
          </p>
          <p>
            The overarching objective is to emerge as a pivotal force in community development,
            transcending the role of merely connecting volunteers with nonprofits. VolunTracks is committed
            to nurturing the next generation of leaders who will play instrumental roles in shaping the
            community’s future. Through these concerted efforts, the organization envisions not only
            contributing to immediate community needs but also laying the foundation for sustained and
            impactful leadership.
          </p>
        </div>

        {/* 2023 内容卡片 */}
        <div className="content-card card-2023">
          <h2>Evolution and Challenges</h2>
          <p>
            With the successful launch of its initial application version, VolunTracks evolved from a modest
            project into a fully-fledged organization. This transformative phase signifies not only an
            augmentation of service offerings but also underscores a heightened dedication to community
            service. Confronted with numerous challenges, particularly in the realms of technology and
            management, the management team resolved to undertake a comprehensive restructuring.
          </p>
          <p>
            This strategic reorganization has precipitated the unveiling of a significant UI overhaul,
            representing the first major revision of the software. The deliberate effort aims to render the
            platform more user-friendly, thereby enhancing its efficacy in serving the community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;