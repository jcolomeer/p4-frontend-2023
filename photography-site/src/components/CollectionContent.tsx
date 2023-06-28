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
        <header
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "2rem",
            height: "fit-content",
          }}
        >
          <UserHandleCard
            fontSize="8pt"
            imageSize="24px"
            user={user}
          ></UserHandleCard>

          <h3 style={{ color: "whitesmoke", margin: "0", fontSize: "16pt" }}>
            {collectionName}
          </h3>
        </header>
        <main className="imageLayout">
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
        </main>
      </>
    );
  }
}
