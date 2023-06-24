import UserHandleCard from "./UserHandleCard";

export default function ImageCollectionCard() {
  return (
    <>
      <img src="" alt="img1" />
      <img src="" alt="img1" />
      <img src="" alt="img1" />
      <img src="" alt="img1" />
      <UserHandleCard
        url="https://randomuser.me/api/"
        imageSize="24px"
        fontSize="10pt"
      ></UserHandleCard>
    </>
  );
}
