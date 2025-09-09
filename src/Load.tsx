import { BeatLoader, FadeLoader } from "react-spinners";

export default function Load() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "100%",
        maxWidth: "200px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <FadeLoader color="#336667" height={10} width={3} margin={2} />
      <h1
        style={{
          textAlign: "center",
          marginTop: "16px",
          fontSize: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          color: "#336667",
        }}
      >
        Loading <BeatLoader color="#336667" size={6} />
      </h1>
    </div>
  );
}
