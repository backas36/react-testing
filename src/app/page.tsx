import Image from "next/image";

import Counter from "@/components/Counter/Counter";
import Example2 from "../example2/Example2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Counter desc="My Counter" defaultCount={0} />
    </main>
  );
}
