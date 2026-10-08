import LoadingScreen from "@/components/animations/LoadingScreen";
import Header from "@/components/Header";
import HeroScene3D from "@/components/HeroScene3D";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main id="home" className="min-h-screen w-full bg-white relative overflow-hidden flex items-center justify-center">
        <HeroScene3D />
      </main>
    </>
  );
}
