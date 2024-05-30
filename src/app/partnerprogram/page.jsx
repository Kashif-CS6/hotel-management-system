import Footer from "@/components/common/footer/footer";
import NavBar from "@/components/common/navBar/navBar";
import Partnerhero from "@/components/partner/hero/partnerhero";
import Partnerreach from "@/components/partner/reach/partnerreach";
import Qualitybooking from "@/components/partner/quality/qualitybooking";
import Propertycontrol from "@/components/partner/propertycontrol";
import Manageproperty from "@/components/partner/manageproperty";
import Feedback from "@/components/partner/feedback";
import Question from "@/components/partner/question";
const partner = () => {
  return (
    <>
      <NavBar />

      <Partnerhero />
      <Partnerreach />
      <Qualitybooking />
      <Propertycontrol />
      <Manageproperty />
      <Feedback />
      <Question />

      <Footer />
    </>
  );
};

export default partner;
