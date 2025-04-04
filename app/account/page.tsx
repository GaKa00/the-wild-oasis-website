import { auth } from "../_lib/auth";


export const metadata = {
  title: "Account",
};

export default async function Home() {
  const session = await auth();
  const firstname = session?.user?.name.split(" ")[0];
  return <h1> Hello {firstname}</h1>;
}
