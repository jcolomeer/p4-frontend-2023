import { useEffect, useState } from "react";
import ImageCollectionCard from "../components/ImageCollectionCard";
import MainHeader from "../components/MainHeader";

export type User = Record<string, any>;

export default function MainPage() {
  const [users, setUsers] = useState<Array<User>>();

  async function fetchUser(url: string) {
    const response = await fetch(url);
    const { results } = await response.json();
    setUsers(results);
  }

  useEffect(() => {
    fetchUser("https://randomuser.me/api/?results=7");
  }, []);

  if (!users) {
    return <></>;
  } else {
    return (
      <>
        <MainHeader loggedUser={users[0]} />
        <main>
          <section className="gridLayout">
            <ImageCollectionCard user={users[1]} />
            <ImageCollectionCard user={users[2]} />
            <ImageCollectionCard user={users[3]} />
            <ImageCollectionCard user={users[4]} />
            <ImageCollectionCard user={users[5]} />
            <ImageCollectionCard user={users[6]} />
          </section>
        </main>
        <footer
          style={{
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <div
            style={{
              backgroundColor: "whitesmoke",
              height: "2px",
              width: "50px",
              display: "block",
            }}
          ></div>
          <span style={{ display: "block" }}>copyright</span>
        </footer>
      </>
    );
  }
}
