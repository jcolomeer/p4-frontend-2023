import { User } from "../pages/MainPage";
import UserHandleCard from "./UserHandleCard";

type Props = {
  loggedUser: User;
};
export default function MainHeader({ loggedUser }: Props) {
  return (
    <>
      <header>
        <h1>Obscura</h1>
        <nav>
          <button>
            <h2>Following</h2>
          </button>
          <button>
            <h2>Discover</h2>
          </button>
        </nav>
        <UserHandleCard
          user={loggedUser}
          imageSize="30px"
          fontSize="10pt"
        ></UserHandleCard>
      </header>
    </>
  );
}
