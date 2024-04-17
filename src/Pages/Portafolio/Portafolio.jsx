import transition from "../../transition";
import { motion } from "framer-motion";
import Content from "../../Component/Content/Content";
const Portafolio = () => {
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
        PORTAFOLIO
      </motion.h1>
    </Content>
  );
};
export default transition(Portafolio);
