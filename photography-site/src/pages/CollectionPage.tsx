import { useEffect, useState } from "react";
import CollectionContent from "../components/CollectionContent";
import MainLayout from "../components/MainLayout";
import { useParams } from "react-router-dom";
import { Image } from "../utils";
import { ImageLink } from "../utils";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

export default function CollectionPage() {
  const { collectionId } = useParams();
  const [imageLinks, setImageLinks] = useState<Array<ImageLink>>();
  const [collectionName, setCollectionName] = useState<string>();

  async function fetchImages() {
    const response = await fetch(
      `https://api.pexels.com/v1/collections/${collectionId}?type=photos`,
      {
        headers: {
          Authorization: apiKey,
        },
      }
    );
    const { id, media } = await response.json();
    setCollectionName(id);
    const links = media.map((image: Image) => {
      return { link: image.src.large2x, id: image.id };
    });
    setImageLinks(links);
  }

  useEffect(() => {
    fetchImages();
  });

  if (!imageLinks || !collectionName) {
    return <></>;
  }
  return (
    <>
      <MainLayout>
        <CollectionContent
          collectionName={collectionName}
          imageLinks={imageLinks}
        />
      </MainLayout>
    </>
  );
}
