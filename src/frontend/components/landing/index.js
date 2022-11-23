import { useContext } from "react";
import { ThemeContext } from "../../Theme";
import Card from "../Card";
import user from "../../images/01.JPG";

const Landing = () => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: `${toggle === "dark" ? "#121519" : "#ccc"}`,
        transition: "all 0.50s linear",
        minHeight: "100vh",
      }}>
      <Card title="Mojtaba Pourkhanlar" images={user} />
    </div>
  );
};

export default Landing;
