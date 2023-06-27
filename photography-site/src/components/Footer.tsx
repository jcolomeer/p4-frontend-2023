export default function Footer() {
  return (
    <footer
      style={{
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
        gap: "10px",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          height: "2px",
          width: "50px",
          display: "block",
        }}
      ></div>
      <span style={{ display: "block" }}>copyright</span>
    </footer>
  );
}
