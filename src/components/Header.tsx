import Announcement from "./announcement/Announcement";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <Announcement />

      <div className="sticky top-0 z-[50] w-full border-b border-t-4 border-b-border/40 border-t-studio-200 bg-background/60 py-2 backdrop-blur transition-colors dark:border-t-studio-700">
        <Navbar className={"container "} />
      </div>
    </>
  );
}

export default Header;
