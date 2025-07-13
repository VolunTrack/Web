// filename: History.tsx

import "./History.css";
import Timeline from "../components/Timeline";

function History() {
  return (
    <div className="history">
      <div className="banner">
        <div className="banner-container">
          <div className="banner-content">
            <h1>Our History</h1>
          </div>
          <img
            src="/assets/history-hero-bg.png"
            alt="history background"
            className="banner-bg-image"
          />
          <div className="banner-overlay"></div>
        </div>
      </div>
      <div className="timeline-container">
        {/* 左侧时间线 */}
        <Timeline />

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

          {/* 2022 内容卡片 */}
          <div className="content-card card-2022">
            <h2>Founding Years</h2>
            <p>
              In the year of its founding, VolunTracks emerged as a promising initiative, dedicated to
              fostering seamless collaboration between volunteers and non-profit organizations through
              innovative technological solutions. A dynamic and passionate team swiftly coalesced, comprising
              individuals with diverse talents and a shared commitment to transforming the concept into a tangible reality.
            </p>
            Over the course of the year, the team successfully executed the initial development phase
            of a mobile application. This application, while characterized by its simplicity, boasted
            powerful features designed to serve as a unifying platform for volunteers and organizations
            alike. Notwithstanding certain imperfections, the app garnered triple-digit downloads, signaling
            a positive initial reception within the user community. This achievement served as a catalyst
            for the team’s ongoing efforts to refine and enhance the platform, ensuring its efficacy in
            facilitating efficient collaboration between volunteers and non-profit organizations.
            <p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;