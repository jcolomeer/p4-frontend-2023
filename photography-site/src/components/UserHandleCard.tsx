import { User } from "../pages/MainPage";

type Props = {
  user: User;
  imageSize: string;
  fontSize: string;
};

export default function UserHandleCard({ user, imageSize, fontSize }: Props) {
  return (
    <div
      className="profileClickable"
      style={{
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img
        src={user.picture.thumbnail}
        alt="User"
        style={{
          width: imageSize,
          height: imageSize,
          borderRadius: "50%",
          marginRight: "0.5rem",
        }}
      />
      <span
        style={{
          fontSize: fontSize,
        }}
      >
        {user.login.username}
      </span>
    </div>
  );
}
