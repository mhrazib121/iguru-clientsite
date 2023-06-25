import Image from "next/image";
import Feature1 from "../assets/home-2_slider-01.png";
import useTheme from "../utils/Theme/CustomTheme";

const HomeTopBanner = () => {
  const { color } = useTheme();
  return (
    <div
      className="w-3/5 mx-auto hero min-h-screen"
      data-aos="fade-down"
      data-aos-delay="1200"
    >
      <div className="flex gap-6 pb-0 flex-col lg:flex-row-reverse ">
        <div className="w-full flex items-center ">
          <Image src={Feature1} alt="learner" className="" />
        </div>
        <div className="w-full">
          <span
            className={`p-2 text-lg leading-8 rounded-md text-[${color.primary}]`}
          >
            {" "}
            LEARN ANYTIME, LEARN ANYTHING
          </span>{" "}
          <br /> <br />
          <h1
            className="text-5xl font-bold"
            data-aos="fade-zoom-in"
            data-aos-duration="600"
          >
            We Give You The Perfect Smile You Wanted
          </h1>
          <p className="py-6 text-md">
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.Provident cupiditate voluptatem et in.
          </p>
          <br />
          <ul className="text-md">
            <li className="my-2 flex gap-3">
              <span>
                Mauris mattis lectus eget ligula dapibus, ac maximus ipsum
              </span>
            </li>
            <li className="my-2 flex gap-3">
              <span>
                Aenean facilisis erat et metus semper molestie sem posuere
              </span>
            </li>
            <li className="my-2 flex gap-3">
              <span>Donec sit amet lorem non mi fringilla finibus</span>
            </li>
          </ul>
          <br />
          <hr />
          <div className="mt-12 ">
            <div className="flex gap-8 justify-start items-center">
              <div>
                <p className="text-lg">+880-0123-456789</p>
                <p className="text-color-primary">Do you have any question?</p>
              </div>
            </div>
            <button className="btn mt-4 border-none rounded-sm bg-color-primary text-white">
              Red More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
