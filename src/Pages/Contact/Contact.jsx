import Content from "../../Component/Content/Content";
import transition from "../../transition";
import { motion } from "framer-motion";

function Contact() {
  return (
    <Content>
      <br />
      <motion.h1
        animate={{
          fontSize: ["55px", "48px", "55px"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}>
        CONTACT
      </motion.h1>
    </Content>
  );
}

export default transition(Contact);
