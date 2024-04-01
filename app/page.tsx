import Image from "next/image";
import Container from "./components/Container";
import SportsContents from "./components/sports/SportsContent";
import SpotlightContent from "./components/spotlite/SpotlightContent";
import { ThemeProvider } from "next-themes";



export default function Home() {
  return (
    <Container>
      <SportsContents/>
      <SpotlightContent/>
    </Container>
  );
}
