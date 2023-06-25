import { useEffect, useState } from "react";
import UserHandleCard from "./UserHandleCard";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

type ImageData = {
  src: {
    landscape: string;
  };
};

export default function ImageCollectionCard() {
  const [imageLinks, setImageLinks] = useState<Array<string>>();

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

  return (
    <>
      <img src={imageLinks && imageLinks[0]} alt="img1" />
      <img src={imageLinks && imageLinks[1]} alt="img2" />
      <img src={imageLinks && imageLinks[2]} alt="img3" />
      <img src={imageLinks && imageLinks[3]} alt="img4" />
      <UserHandleCard
        url="https://randomuser.me/api/"
        imageSize="24px"
        fontSize="10pt"
      ></UserHandleCard>
    </>
  );
}
