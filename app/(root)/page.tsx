import Image from "next/image";
import Hello from "../components/Hello";

export default function Home() {
  console.log("what am i doing here? -- Server/Client?");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Alireza
      <Hello />
    </div>
  );
}
