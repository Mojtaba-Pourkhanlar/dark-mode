import { useContext } from "react";
import { ThemeContext } from "../../Theme";

const Card = ({ title, images }) => {
  const { toggle } = useContext(ThemeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "100px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "Space-between",
          alignItems: "center",
          color: `${toggle === "dark" ? "#fff" : "#000"}`,
          backgroundColor: `${toggle === "dark" ? "#212121" : "#e0e0e0"}`,
          transition: "all 0.50s linear",
          borderRadius: "10px",
          overflow: "hidden",
          width: "700px",
        }}>
        <img src={images} width="300px" alt={title} />
        <h1 style={{ marginRight: "50px" }}>{title}</h1>
      </div>
    </div>
  );
};

export default Card;
