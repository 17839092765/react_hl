import { Header } from "../components/heard";
import { Main } from "./main/main";
export default function Home() {
  return (
    <>
      <Header />
      <div className="main">
        <Main />
      </div>
    </>
  );
}
