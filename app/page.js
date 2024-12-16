import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header logoUrl="/assets/images/header-logo.png" />
      <main>
        <img
          src="/assets/images/tapau-together-banner.png"
          alt="TaPau Together Banner"
          className={"w-full flex items-center justify-between p-10 radius-2xl"}
        />
      </main>
    </>
  );
}
