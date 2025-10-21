import "./OurStory.css";
import story from "../../../assets/story.jpg";

function OurStory() {
  return (
    <section className="story-container">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
        {/* Left Text Section */}
        <div className="lg:col-span-5 story-txt">
          <h2>Our Story</h2>
          <p>
            TechMart began with a simple idea to make technology shopping smarter, easier, and more exciting. What started as a small passion project by tech enthusiasts has grown into a trusted online destination for thousands of customers across India.
          </p>
          <p>
            We noticed how confusing and overwhelming it can be to find genuine, high-quality gadgets at fair prices. So, we built TechMart a platform that brings together the best brands, honest pricing, and reliable delivery all in one seamless experience.
          </p>
          <p>
            From the latest smartphones to immersive gaming setups, TechMart is powered by a love for innovation and a promise of quality. Every product we offer reflects our commitment to helping people stay connected, entertained, and inspired through technology.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="lg:col-span-7 story-img">
          <img src={story} alt="TechMart story" />
        </div>
      </div>
    </section>
  );
}

export default OurStory;
