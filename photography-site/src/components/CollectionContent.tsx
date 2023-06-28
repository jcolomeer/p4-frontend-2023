import { useState, useEffect } from "react";
import { User } from "../pages/MainPage";
import UserHandleCard from "./UserHandleCard";
import { ImageLink } from "../utils";

type Props = {
  collectionName: string;
  imageLinks: ImageLink[];
};

export default function CollectionContent({
  collectionName,
  imageLinks,
}: Props) {
  const [user, setUser] = useState<User>();

  async function fetchUser(url: string) {
    const response = await fetch(url);
    const { results } = await response.json();
    setUser(results[0]);
  }
  useEffect(() => {
    fetchUser("https://randomuser.me/api/");
  }, []);

  if (!imageLinks || !user) {
    return <></>;
  } else {
    return (
      <>
        <header>
          <UserHandleCard
            fontSize="10pt"
            imageSize="30px"
            user={user}
          ></UserHandleCard>
          <h3>{collectionName}</h3>
        </header>
        <div className="imageLayout">
          {imageLinks.map((imageLink: ImageLink, index: number) => {
            return (
              <img
                key={imageLink.id}
                src={imageLink.link}
                alt={`Image ${index}`}
                style={{
                  width: "500px",
                  height: "500px",
                  objectFit: "contain",
                }}
              />
            );
          })}
        </div>
      </>
    );
  }
}
