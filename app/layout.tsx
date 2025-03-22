import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import  "@/app/_styles/globals.css"

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },

  description: "Welcome to The Wild Oasis, a place where you can find paradise.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
