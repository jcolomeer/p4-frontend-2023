import UserHandleCard from "./UserHandleCard";

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
        <UserHandleCard></UserHandleCard>
      </header>
    </>
  );
}
