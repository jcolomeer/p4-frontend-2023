import { useEffect, useState } from "react";

type User = Record<string, any>;
type Props = {
  url: string;
  imageSize: string;
  fontSize: string;
};

export default function UserHandleCard({ url, imageSize, fontSize }: Props) {
  const [user, setUser] = useState<User>();

  async function fetchUser(url: string) {
    const response = await fetch(url);
    const { results } = await response.json();
    setUser(results[0]);
    console.log(results[0]);
  }

  useEffect(() => {
    fetchUser(url);
  }, []);

  return (
    <div
      className="profileClickable"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src={user && user.picture.thumbnail}
        alt="User"
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: "50%",
          marginRight: "0.5rem",
        }}
      />
      <span style={{ fontSize: fontSize }}>
        {user ? user.login.username : "user"}
      </span>
    </div>
  );
}
