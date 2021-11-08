import "./About.css";
import Award from "../../img/linkedin.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.unsplash.com/photo-1518757753498-43616cc67747?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbiUyMG9uJTIwbW91bnRhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I have completed my B.Tech in Computer Science from Vellore Institute of Technology in the year 2021.
        </p>
        <p className="a-desc">
          I have always been passionate about technology and I am always looking forward to learn new and upcoming technologies. I was a core committee member of Codechef VIT and ACM-VIT student chapters/clubs. We organized and participated in numerous hackathons during this period.
        </p>
        <div className="a-award">
          <a href="https://www.linkedin.com/in/rakshit-malhotra-849620169/">
          <img src={Award} alt="" className="a-award-img" />
          </a>
          <div className="a-award-texts">
            <h4 className="a-award-title">Linkedin Verified Java Developer</h4>
            <p className="a-award-desc">
                I have been verified in Java skill by Linkedin. You can visit my Linkedin profile to know more about me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;