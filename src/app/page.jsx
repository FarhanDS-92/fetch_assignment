import BreakLine from "@/components/BreakLine.jsx";
import Dogs from "@/components/Dogs.jsx";
import Memes from "@/components/Memes.jsx";

export default function Home() {
  return (
    <main>
      <h1>Can you catch them all?</h1>
      <Dogs />
      <BreakLine />
      <Memes />
      <BreakLine />
    </main>
  );
}
