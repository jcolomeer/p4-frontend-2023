import UserHandleCard from "./UserHandleCard";
import ImageCollectionCard from "./ImageCollectionCard";
export default function MainHeader() {
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
          url="https://randomuser.me/api/"
          imageSize="30px"
          fontSize="10pt"
        ></UserHandleCard>
      </header>
      <main>
        <ImageCollectionCard></ImageCollectionCard>
        <ImageCollectionCard></ImageCollectionCard>
        <ImageCollectionCard></ImageCollectionCard>
        <ImageCollectionCard></ImageCollectionCard>
        <ImageCollectionCard></ImageCollectionCard>
      </main>
    </>
  );
}
