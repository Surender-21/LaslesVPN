import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/pages/home/Hero";
import Plan from "@/components/pages/home/Plan";
import Provide from "@/components/pages/home/Provide";
import Slider from "@/components/pages/home/Slider";
import Users from "@/components/pages/home/Users";
import VpnNetwork from "@/components/pages/home/VpnNetwork";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Users />
      <Provide />
      <Plan />
      <VpnNetwork />
      <Slider />
      <Footer />
    </>
  );
}
