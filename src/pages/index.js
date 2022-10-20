import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shop</title>
      </Head>

      <Header />

      <main className="max-w-2xl mx-auto">
{/* Banner */}

      <Banner />



{/* Product Feed */}

      </main>
    </div>
  );
}
