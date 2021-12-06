import Content from "./Content";
import Sidebar from "./Sidebar";

export default function Container() {
  return (
    <div className="container">
      <Content />
      <Sidebar />
    </div>
  );
}