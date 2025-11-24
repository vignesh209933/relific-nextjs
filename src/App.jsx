import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
// Import SEO-optimized page components
import {
  HomePage,
  AboutUsPage,
  WhoWeServePage,
  ContactPage,
  AllProductsPage,
  TracSeedPage,
  DriveRPage,
  SurveRPage,
  ProGranPage,
  CSRSolutionsPage,
  VideoDemoPage,
  BlogsPage,
  LeafLedgerPage,
  FarmerPlatformPage,
  HealthcarePlatformPage,
  GrantManagementPage,
  EducationPlatformPage,
  EnvironmentSolutionsPage,
  AgriSolutionsPage,
  NGOSolutionsPage,
  ConsultantsSolutionsPage,
  PrivacyPage,
  JoinUsPage,
} from "./pages/seo-pages";

// Import remaining components that don't have SEO wrappers yet
import ComingSoon from "./constants/ComingSoon";
import ComingSoonBlog from "./components/ComingSoonBlog";
import ErrorPage from "./components/ErrorPage";
import ImpactStories from "./components/Who we serve/ImpactStories";
import ImpactStoryTemplate from "./components/Who we serve/StoryTemplate";
import TellusMore from "./components/Contact Form/TellusMore";
import GenericSolutionPage from "./components/Solutions/kypage";
import SimpleContact from "./components/Contact Form/SimpleContact";
import TataTrustsCaseStudy from "./components/CaseStudies/TataTrustsCaseStudy";
import BlogPost from "./pages/BlogPost";
import OtherSolutions from "./components/Solutions/OtherSolutions";
import StartTrial from "./components/Contact Form/StartTrial";
import HighlightTestimonial from "./components/Home/Testimonial_highlight";

import Colors from "./constants/Color";
import Navbar from "./constants/NavBar/navbar";
import Footer from "./constants/Footer/footer";

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-white"
  >
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-16 h-16 border-4 rounded-full"
      style={{
        borderColor: `${Colors.Primary_font} transparent`,
        borderRadius: "50%",
      }}
    />
  </motion.div>
);

const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
/* DigitalReadinessBlock needs to be added here*/
// Page components moved to separate files with SEO optimization

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <AnimatePresence mode="wait">
                <PageTransitionWrapper>
                  <Routes>
                    <Route path="/" element={<HomePage />} />

                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/contact_simple" element={<SimpleContact />} />
                    <Route path="/start-trial" element={<StartTrial />} />
                    <Route path="/comingsoon" element={<ComingSoon />} />
                    <Route path="/comingblog" element={<ComingSoonBlog />} />
                    <Route path="/aboutus" element={<AboutUsPage />} />
                    <Route path="/whoweserve" element={<WhoWeServePage />} />
                    <Route path="/allproducts" element={<AllProductsPage />} />
                    <Route path="/tracseed" element={<TracSeedPage />} />
                    <Route path="/leaf" element={<LeafLedgerPage />} />
                    <Route
                      path="/envi_platform"
                      element={<EnvironmentSolutionsPage />}
                    />
                    <Route
                      path="/farmer_platform"
                      element={<FarmerPlatformPage />}
                    />
                    <Route
                      path="/health_platform"
                      element={<HealthcarePlatformPage />}
                    />
                    <Route path="/impact" element={<GrantManagementPage />} />
                    <Route
                      path="/education_platform"
                      element={<EducationPlatformPage />}
                    />
                    <Route path="/drive_r" element={<DriveRPage />} />
                    <Route path="/surve_r" element={<SurveRPage />} />
                    <Route path="/progran" element={<ProGranPage />} />
                    <Route
                      path="/other_solutions"
                      element={<OtherSolutions />}
                    />
                    <Route path="/CSR" element={<CSRSolutionsPage />} />
                    <Route
                      path="/NGO_solutions"
                      element={<NGOSolutionsPage />}
                    />
                    <Route
                      path="/Consultants"
                      element={<ConsultantsSolutionsPage />}
                    />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/apply" element={<JoinUsPage />} />
                    <Route path="/tellmore" element={<TellusMore />} />
                    <Route
                      path="/kysolutions"
                      element={<GenericSolutionPage />}
                    />
                    <Route
                      path="/agrisolutions"
                      element={<AgriSolutionsPage />}
                    />
                    <Route
                      path="/impact-story/:id"
                      element={<ImpactStoryTemplate />}
                    />
                    <Route
                      path="/home_testimonial"
                      element={<HighlightTestimonial />}
                    />
                    <Route
                      path="/case-studies/tata-trusts"
                      element={<TataTrustsCaseStudy />}
                    />
                    <Route path="/blogs" element={<BlogsPage />} />
                    <Route path="/blogs/:slug" element={<BlogPost />} />
                    <Route path="/debug/blog/:slug" element={<BlogPost />} />
                    <Route path="/demo-videos" element={<VideoDemoPage />} />
                    <Route path="/impact-stories" element={<ImpactStories />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
                </PageTransitionWrapper>
              </AnimatePresence>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </Router>
    </HelmetProvider>
  );
};

export default App;
