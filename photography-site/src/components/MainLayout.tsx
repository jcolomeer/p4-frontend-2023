import { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

type Props = {
  children: JSX.Element;
};
export default function MainLayout({ children }: Props) {
  const [loggedUser, setLoggedUser] = useState();

  async function fetchUser(url: string) {
    const response = await fetch(url);
    const { results } = await response.json();
    setLoggedUser(results[0]);
  }

  useEffect(() => {
    fetchUser("https://randomuser.me/api/");
  }, []);
  if (!loggedUser) {
    return <></>;
  } else {
    return (
      <>
        <MainHeader loggedUser={loggedUser} />
        {children}
        <Footer />
      </>
    );
  }
}
