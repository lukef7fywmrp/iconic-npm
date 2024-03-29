import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";

function Profile() {
  return (
    <div className="flex min-h-screen flex-col bg-[#040009]">
      <Head>
        <title>Signup | Iconic</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <main>
        <div>
          <Image src="" width="100%" height="100%" objectFit="contain" />
          
        </div>
      </main>
    </div>
  );
}

export default Profile;
