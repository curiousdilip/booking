import Image from "next/image";
import "./uses.css";
export default function Uses() {
  return (
    <>
      <section id="uses">
        <div className="container">
          <h1 className="uses-heading">Uses</h1>
          <p>
            Below is the collection of tools and tech I rely on for development,
            gaming, content creation, and daily tasks.
          </p>
          <div className="my-pc">
            <h2>My computer</h2>
            <Image
              src="/img/my-pc.jpg"
              alt="my Computer"
              width={1920}
              height={870}
              priority="true"
              layout="intrinsic"
            />
            <ul>
              <li>Macbook Air M1 2020</li>
              <li>
                My PC
                <ul>
                  <li>Ant Esports 510 AIR</li>
                  <li>XPG GAMMIX S50</li>
                  <li>MSI B550M-A PRO ProSeries</li>
                  <li>Cooler Master Hyper 212 Spectrum V3</li>
                  <li>G.Skill Ripjaws V 8Gb x 2</li>
                  <li>AMD Ryzen 5 5600X</li>
                  <li>RTX 3060 TI</li>
                </ul>
              </li>
              <li>HyperX Cloud II</li>
              <li>Keychron K2 V2</li>
            </ul>
          </div>
          <hr />
          <div className="tech-stack">
            <h2>The Technologies & Tools I used to build this site:</h2>
            <ul>
              <li>
                <a href="#">Nextjs</a>
              </li>
              <li>
                <a href="#">Reactjs</a>
              </li>
              <li>
                <a href="#">Javascript</a>
              </li>
            </ul>
            <p>
              The code for this website is available <a href="#">here</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
