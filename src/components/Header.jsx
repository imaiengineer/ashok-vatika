import NavBar from "./NavBar";
import Hero from "./Hero";
export default function Header() {
  return (
    <header>
      <div className="max-w-[1300px] mx-auto px-2">
        <NavBar />
        <Hero />
      </div>
    </header>
  );
}
