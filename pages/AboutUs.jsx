import TeamCard from "../components/TeamCard";
import NavSign from "../components/NavSign";

function AboutUs() {
  return (
    <>
      <NavSign />

      <div className="about flex justify-center items-center mt-12">
        <div className="container mx-auto">
          <div className="mx-auto w-full px-4 text-center lg:w-6/12">
            <p className="block antialiased font-sans text-xl leading-relaxed text-inherit font-semibold">
              Our Team
            </p>
            <h2 className="block antialiased tracking-normal font-sans text-4xl font-bold leading-[1.3] text-blue-gray-900 my-3">
              Here are our heroes
            </h2>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-register">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              animi nam laboriosam esse nisi provident natus rem veniam velit
              repellat adipisci odio, consectetur numquam sunt ipsam itaque,
              tenetur magni magnam ipsum dolor sit amet consectetur, adipisicing
              elit. Nostrum beatae ullam incidunt! Quis eveniet
            </p>
          </div>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            <TeamCard
              name="Fares Mohamed"
              src="/sung-jin-woo-solo-leveling.gif"
              Specialization="FrontEnd Developer"
            />
            <TeamCard
              name="Bebo Nasser "
              src="/sung-jin-woo-solo-leveling.gif"
              Specialization="Ai Developer"
            />
            <TeamCard
              name="Mina Gerges"
              src="/sung-jin-woo-solo-leveling.gif"
              Specialization="Ai Developer"
            />
            <TeamCard
              name="Youssef"
              src="/sung-jin-woo-solo-leveling.gif"
              Specialization="BackEnd Developer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
