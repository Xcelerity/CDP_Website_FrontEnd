import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between h-[500px] flex-col px-10 py-12 rounded-[20px] m-[20px] w-[350px] feedback-card">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[50.6px] h-[59.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
          {title}
        </p>
      </div>
    </div>
  </div>
);

export default FeedbackCard;
