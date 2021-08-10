import about from '../assets/images/31.jpg';
import BannerLeft from "./BannerLeft";
import Title from "./Title";


export default function AboutBanner() {
  return (
    <div className="flex">
      <BannerLeft />
      <div className="about-banner-right">
        <Title>About Us</Title>
        <p className="about-us-description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        <div className="about-banner-rb">
          <img src={about} alt="About Us" />
          <ol className="list-about-des">
            <li>laborum et dolorum fuga</li>
            <li>corrupti quos dolores et quas</li>
            <li>est et expedita distinctio</li>
            <li>deleniti atque corrupti quos</li>
            <li>excepturi sint occaecati cupiditate</li>
            <li>accusamus et iusto odio</li>
          </ol>
        </div>
      </div>
    </div>
  )
}