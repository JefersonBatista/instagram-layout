import Container from "./Container";
import MobileNavBar from "./MobileNavBar";
import TopArea from "./TopArea";

export default function App() {
  return (
    <div className="app">
      <TopArea />
      <Container />
      <MobileNavBar />
    </div>
  );
}
