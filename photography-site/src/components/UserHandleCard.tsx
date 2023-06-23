import { useEffect, useState } from "react";

type User = Record<string, any>;

export default function UserHandleCard() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function fetchUser(url: string) {
      const response = await fetch(url);
      const { results } = await response.json();
      setUser(results[0]);
      console.log(results[0]);
    }
    fetchUser("https://randomuser.me/api/");
    console.log(user);
  }, []);

  return (
    <>
      <img src={user && user.picture.thumbnail} alt="User" />
      <span>{user ? user.login.username : "user"}</span>
    </>
  );
}
