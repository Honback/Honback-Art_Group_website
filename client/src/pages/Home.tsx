import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SupportOverview from "@/components/SupportOverview";
import WhyArtsClubs from "@/components/WhyArtsClubs";
import OperationGuide from "@/components/OperationGuide";
import ActivityCategories from "@/components/ActivityCategories";
import ApplicationProcess from "@/components/ApplicationProcess";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <SupportOverview />
        <WhyArtsClubs />
        <OperationGuide />
        <ActivityCategories />
        <ApplicationProcess />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
