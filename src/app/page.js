import HeroSection from "@/components/home/heroSection/heroSection";
import NavBar from "@/components/common/navBar/navBar";
import TopHotelsSection from "@/components/home/topHotelsSection/topHotelsSection";
import FeatureSection from "@/components/home/featureSection/featureSection";
import StatsSection from "@/components/home/statsSection/statsSection";
import CountriesSection from "@/components/home/countriesSection/countriesSection";
import Footer from "@/components/common/footer/footer";
import Faq from "@/components/home/faq/faq";
import InstantDiscountCard from "@/components/home/discount/instantDiscountCard";
import ClientReview from "@/components/home/clientReview/clientReview";
import FeaturedDestinations from "@/components/home/featuredDestinations/featuredDestinations";

export default function Home() {
  return (
    <div className="relative p-0 m-0">
      <NavBar />
      <HeroSection />
      <div className="pt-40 space-y-32">
        <TopHotelsSection />
        <FeatureSection />
        <FeaturedDestinations />
        <StatsSection />
        <CountriesSection />
        <ClientReview />
        <Faq />
      </div>
      <InstantDiscountCard />
      <Footer />
    </div>
  );
}
