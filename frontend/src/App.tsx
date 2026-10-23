import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import CollegeSearch from "./components/CollageSearch/CollegeSearch";
import FeaturedCollege from "./components/FeaturedCollege/FeaturedCollege";
// import CounsellingCTA from "./components/CounsellingCTA/CounsellingCTA";
import EnquiryForm from "./components/EnquiryForm/EnquiryForm";

import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import AIChatWidget from "./components/AI/AIChatWidget";
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CollegeSearch />
        <FeaturedCollege />
        {/* <CounsellingCTA /> */}
        <EnquiryForm />

        <FAQ />
        <Footer />
                <AIChatWidget />
      </main>
    </>
  );
}

export default App;
