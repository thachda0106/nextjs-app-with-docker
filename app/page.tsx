import { getDB } from "@/db";

export default async function Home() {
  const db = await getDB();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-blue-400">
      hellossss
    </main>
  );
}
