"use client";

import Example2 from "../../example2/Example2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Example2
        onMoney={(money) => {
          alert(money);
        }}
      />
    </main>
  );
}
