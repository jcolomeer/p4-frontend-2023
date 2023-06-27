import UserHandleCard from "./UserHandleCard";
import { User } from "../pages/MainPage";

type Props = {
  user: User;
  imageLinks: string[];
  collectionName: string;
};

export default function ImageCollectionCard({
  user,
  imageLinks,
  collectionName,
}: Props) {
  return (
    <section>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <UserHandleCard
          user={user}
          imageSize="24px"
          fontSize="10pt"
        ></UserHandleCard>
        <span>-</span>
        <span
          className="collectionClickable"
          style={{
            fontSize: "10pt",
          }}
        >
          {collectionName}
        </span>
      </header>

      <div className="thumbnailWrapper">
        <img src={imageLinks[0]} alt="img1" className="thumbnail" />
        <img src={imageLinks[1]} alt="img2" className="thumbnail" />
        <img src={imageLinks[2]} alt="img3" className="thumbnail" />
        <img src={imageLinks[3]} alt="img4" className="thumbnail" />
      </div>
    </section>
  );
}
