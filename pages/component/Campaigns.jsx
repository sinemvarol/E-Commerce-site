import Image from "next/image";
import Title from "pages/component/layout/UserInterface/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px]rounded-full overflow-hidden">
        <Image
          src="/images/lahmacun.png"
          alt=""
          fill
          priority
          className="hover:scale-105 transition-all"
          style={{objectFit:"cover"}
        }
        />
      </div>
      <div className="text-white">
        <Title addClass="text-xl">Do not miss the discount opportunity on Lahmacun</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Off</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Order Now <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const CampaignItem2 = () => {
    return (
      <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']  rounded-full overflow-hidden">
          <Image
            src="/images/manti.png"
            alt=""
            fill
            className="hover:scale-105 transition-all"
            style={{objectFit:"cover"}}
          />
        </div>
        <div className="text-white">
          <Title addClass="text-xl">Do not miss the discount opportunity on Mantı</Title>
          <div className="font-dancing my-1">
            <span className="text-[40px]">20%</span>
            <span className="text-sm inline-block ml-1">Off</span>
          </div>
          <button className="btn-primary flex items-center gap-x-2">
            Order Now <MdShoppingCart size={20} />
          </button>
        </div>
      </div>
    );
  };

  const CampaignItem3 = () => {
    return (
      <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']     rounded-full overflow-hidden">
          <Image
            src="/images/cigkofte.png"
            alt=""
            fill
            className="hover:scale-105 transition-all"
            style={{objectFit:"cover"}}
          />
        </div>
        <div className="text-white">
          <Title addClass="text-xl">Do not miss the discount opportunity on Mantı</Title>
          <div className="font-dancing my-1">
            <span className="text-[40px]">20%</span>
            <span className="text-sm inline-block ml-1">Off</span>
          </div>
          <button className="btn-primary flex items-center gap-x-2">
            Order Now <MdShoppingCart size={20} />
          </button>
        </div>
      </div>
    );
  };

const Campaigns = () => {
    return (
        <div className="container mx-auto py-10">
          <div className="flex justify-between">
            <div className="mr-4">
              <CampaignItem />
            </div>
            <div className="mr-4">
              <CampaignItem2 />
            </div>
            <div>
              <CampaignItem3 />
            </div>
          </div>
        </div>
  );
};

export default Campaigns;