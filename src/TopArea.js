import MobileTopBar from "./MobileTopBar";
import TopBar from "./TopBar";

export default function TopArea() {
  return (
    <header className="top-area">
      <TopBar />
      <MobileTopBar />
    </header>
  );
}
