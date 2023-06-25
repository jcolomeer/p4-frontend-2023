import { User } from "../pages/MainPage";

type Props = {
  user: User;
  collectionName: string;
};
export default function CollectionHeader({ user, collectionName }: Props) {
  return (
    <>
      <header>{collectionName}</header>
    </>
  );
}
