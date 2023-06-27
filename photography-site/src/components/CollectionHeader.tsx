import { User } from "../pages/MainPage";
import UserHandleCard from "./UserHandleCard";

type Props = {
  user: User;
  collectionName: string;
  collectionId: string;
};
export default function CollectionHeader({
  user,
  collectionName,
  collectionId,
}: Props) {
  return (
    <>
      <header>
        <UserHandleCard fontSize="" imageSize="" user={user}></UserHandleCard>
        <h3>{collectionName}</h3>
      </header>
    </>
  );
}
