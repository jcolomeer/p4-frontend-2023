import { useEffect, useState } from "react";
import ImageCollectionCard from "../components/ImageCollectionCard";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";

export type User = Record<string, any>;

type Collection = {
  title: string;
};
type ImageData = {
  src: {
    landscape: string;
  };
};

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

export default function MainPage() {
  const [users, setUsers] = useState<Array<User>>();
  const [imageLinks, setImageLinks] = useState<Array<Array<string>>>();
  const [collectionNames, setCollectionNames] = useState<Array<string>>();

  async function fetchImages() {
    const collectionLinks = [];
    const response = await fetch(
      "https://api.pexels.com/v1/collections/featured?per_page=6",
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const { collections } = await response.json();
    setCollectionNames(
      collections.map((collection: Collection) => collection.title)
    );
    for (let collection of collections) {
      const mediaResponse = await fetch(
        `https://api.pexels.com/v1/collections/${collection.id}?per_page=4&type=photos`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );
      const { media } = await mediaResponse.json();
      const links = media.map((item: ImageData) => item.src.landscape);
      collectionLinks.push(links);
    }

    setImageLinks(collectionLinks);
  }

  async function fetchUser(url: string) {
    const response = await fetch(url);
    const { results } = await response.json();
    setUsers(results);
  }

  useEffect(() => {
    fetchUser("https://randomuser.me/api/?results=7");
    fetchImages();
    console.log();
  }, []);

  if (!users || !imageLinks || !collectionNames) {
    return <></>;
  } else {
    return (
      <>
        <MainHeader loggedUser={users[0]} />
        <main>
          <section className="gridLayout">
            <ImageCollectionCard
              user={users[1]}
              imageLinks={imageLinks[0]}
              collectionName={collectionNames[0]}
            />
            <ImageCollectionCard
              user={users[2]}
              imageLinks={imageLinks[1]}
              collectionName={collectionNames[1]}
            />
            <ImageCollectionCard
              user={users[3]}
              imageLinks={imageLinks[2]}
              collectionName={collectionNames[2]}
            />
            <ImageCollectionCard
              user={users[4]}
              imageLinks={imageLinks[3]}
              collectionName={collectionNames[3]}
            />
            <ImageCollectionCard
              user={users[5]}
              imageLinks={imageLinks[4]}
              collectionName={collectionNames[4]}
            />
            <ImageCollectionCard
              user={users[6]}
              imageLinks={imageLinks[5]}
              collectionName={collectionNames[5]}
            />
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
