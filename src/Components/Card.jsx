// const Card = ({ img, title, para, link }) => {
//   return (
//     <>
//       <section className="card flex flex-col w-[360px] h-[450px] overflow-hidden transition duration-300 rounded-xl border-2 border-solid border-[#4d4d4da2] font-roboto">
//         <div className="upper-part p-6 bg-[#1A1A1A] basis-[65%]">
//           <img
//             className="mx-auto w-[90%] h-[150px] object-cover mt-8 rounded-xl"
//             src={img}
//             loading="lazy"
//             alt="resource image"
//             draggable="false"
//           />
//         </div>
//         <div className="p-5 basis-[35%]">
//           <h2 className="text-white text-2xl p-2 font-semibold">{title}</h2>
//           <p className="text-zinc-500 text-base pb-[15px] pl-[10px]">{para}</p>
//           <a href={link} target="_blank" className="button ml-[9px]">
//             Link
//             <div className="arrow">›</div>
//           </a>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Card;

// Above is perfect working card.


import { FaArrowRight } from "react-icons/fa6";

const Card = ({ img, title, para, link }) => {
  return (
    <>
      <section className="bg-[#101213] card flex flex-col w-[320px] h-[400px] overflow-hidden rounded-xl border-2 border-solid border-[#3f3f3fa2] font-roboto">
        <div className="">
          <img
            className="mx-auto w-[85%] h-[200px] object-cover mt-8 rounded-xl"
            src={img}
            loading="lazy"
            alt="resource image"
            draggable="false"
          />
        </div>
        <div className="flex justify-between items-center p-4">
        <div className="">
          <h2 className="text-white text-[1.4rem] mt-4 p-2 font-semibold">{title}</h2>
          <p className="text-zinc-500 text-base pb-[15px] pl-[10px]">{para}</p>
        </div>
        <div className="mt-8 pr-3">
          <a href={link} target="_blank" className="button rounded-full">
          <FaArrowRight/>
          </a>
        </div>
        </div>
      </section>
    </>
  );
};
export default Card;