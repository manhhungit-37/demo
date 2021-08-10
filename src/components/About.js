import AboutBanner from "./AboutBanner";
import AboutMeeting from "./AboutMeeting";
import ActiveNav from "./ActiveNav";
import Testimonials from "./Testimonials";

export default function About() {
  return (
    <>
      <ActiveNav active="About Us" />
      <AboutBanner />
      <AboutMeeting mem={[1, 2, 3, 4]} />
      <Testimonials />
    </>
  )
}