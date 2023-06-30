import Image from "next/image";
import Title from "pages/component/layout/UserInterface/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white  justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[475px] sm:h-[600px]  flex justify-center w-[500px] h-[500px]">
            <Image src="/images/aboutUs.png" alt="" width={700} height={500}/>
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">We Are Feane</Title>
          <p className="my-5 flex flex-col items-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don`t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn`t anything embarrassing hidden in the
            middle of text. All
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;