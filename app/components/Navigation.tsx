import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link href="/cabins">Explore Cabins</Link>
        </li>
        <li>
          {" "}
          <Link href="/about">About The Wild Oasis</Link>
        </li>
        <li>
          {" "}
          <Link href="/account">Your Account</Link>
        </li>
      </ul>
    </>
  );
}
