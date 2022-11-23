import moon from "../../images/moon.svg";
import sun from "../../images/sun.svg";

export const ChangeTheme = ({ toggle, toggleFunction }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          right: "0px",
          width: "45px",
          height: "45px",
          top: "25%",
          background: `${toggle === "dark" ? "#212121" : "#616161"}`,
          transition: "all 0.50s linear",
          cursor: "pointer",
          boxShadow: "-2px 0px 10px 2px #ffc11e",
        }}>
        <div style={{ padding: "7px" }} onClick={() => toggleFunction()}>
          {toggle === "dark" ? (
            <img src={moon} width={33} height={33} alt="sun" />
          ) : (
            <img src={sun} width={33} height={33} alt="moon" />
          )}
        </div>
      </div>
    </>
  );
};
