import { useEffect, useState } from "react";
import UserHandleCard from "./UserHandleCard";
import { User } from "../pages/MainPage";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

type Props = {
  user: User;
};
type ImageData = {
  src: {
    landscape: string;
  };
};

export default function ImageCollectionCard({ user }: Props) {
  const [imageLinks, setImageLinks] = useState<Array<string>>();
  const [collectionName, setCollectionName] = useState<string>();

  async function fetchImages() {
    const response = await fetch(
      "https://api.pexels.com/v1/collections/featured?per_page=1",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const { collections } = await response.json();
    setCollectionName(collections[0].title);
    const mediaResponse = await fetch(
      `https://api.pexels.com/v1/collections/${collections[0].id}?per_page=4&type=photos`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const { media } = await mediaResponse.json();
    const links = media.map((item: ImageData) => item.src.landscape);
    setImageLinks(links);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  if (imageLinks === undefined) {
    return <div></div>;
  } else {
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
}
