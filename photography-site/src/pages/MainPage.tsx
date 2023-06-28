import { useEffect, useState } from "react";
import ImageCollectionCard from "../components/ImageCollectionCard";
import MainLayout from "../components/MainLayout";

export type User = Record<string, any>;

type Collection = {
  title: string;
  id: string;
};
type ImageData = {
  src: {
    landscape: string;
  };
};

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

export default function MainPage() {
  const [users, setUsers] = useState<Array<User>>();
  const [thumbnailLinks, setThumbnailLinks] = useState<Array<Array<string>>>();
  const [collectionInfo, setCollectionInfo] = useState<Array<Collection>>();

  async function fetchThumbnails() {
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
    setCollectionInfo(
      collections.map((collection: Collection): Collection => {
        return { title: collection.title, id: collection.id };
      })
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

    setThumbnailLinks(collectionLinks);
  }

  async function fetchUser(url: string) {
    const response = await fetch(url);
    const { results } = await response.json();
    setUsers(results);
  }

  useEffect(() => {
    fetchUser("https://randomuser.me/api/?results=6");
    fetchThumbnails();
  }, []);

  if (!users || !thumbnailLinks || !collectionInfo) {
    return <></>;
  } else {
    return (
      <>
        <MainLayout>
          <main>
            <section className="gridLayout">
              <ImageCollectionCard
                user={users[0]}
                imageLinks={thumbnailLinks[0]}
                collectionName={collectionInfo[0].title}
                collectionId={collectionInfo[0].id}
              />
              <ImageCollectionCard
                user={users[1]}
                imageLinks={thumbnailLinks[1]}
                collectionName={collectionInfo[1].title}
                collectionId={collectionInfo[1].id}
              />
              <ImageCollectionCard
                user={users[2]}
                imageLinks={thumbnailLinks[2]}
                collectionName={collectionInfo[2].title}
                collectionId={collectionInfo[2].id}
              />
              <ImageCollectionCard
                user={users[3]}
                imageLinks={thumbnailLinks[3]}
                collectionName={collectionInfo[3].title}
                collectionId={collectionInfo[3].id}
              />
              <ImageCollectionCard
                user={users[4]}
                imageLinks={thumbnailLinks[4]}
                collectionName={collectionInfo[4].title}
                collectionId={collectionInfo[4].id}
              />
              <ImageCollectionCard
                user={users[5]}
                imageLinks={thumbnailLinks[5]}
                collectionName={collectionInfo[5].title}
                collectionId={collectionInfo[5].id}
              />
            </section>
          </main>
        </MainLayout>
      </>
    );
  }
}
