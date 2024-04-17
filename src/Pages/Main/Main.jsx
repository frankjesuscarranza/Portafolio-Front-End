import transition from "../../transition";
import Content from "../../Component/Content/Content";
import { motion } from "framer-motion";
import profileImg from "../../Images/Logo.png";
import "./main.css";
function Main() {
  return (
    <Content>
      <section className="title">
        <motion.h1
          animate={{
            fontSize: ["55px", "48px", "55px"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          Franklin Carranza
        </motion.h1>
        <p id="role-definition">FRONT-END WEB DEVELOPER</p>
      </section>
      <div className="aboutWrapper">
        <div className="aboutLeft">
          <img src={profileImg} />
        </div>
        <div className="aboutRight">
          <section className="aboutText">
            <h2>Hey there !</h2>
            <br />
            <p>
              My name is Franklin Carranza. I am a Developer in love with
              FrontEnd.
              <br />
              <br />
              I love developing projects, experimenting with libraries and
              taking my knowledge further.
              <br />
              <br />
              Programming is my passion, and I am currently seeking
              opportunities in a professional setting.
              <br />
              <br />
              Let's build something amazing together ! !
            </p>
          </section>
        </div>
      </div>
    </Content>
  );
}

export default transition(Main);
