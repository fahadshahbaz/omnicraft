const Card = ({ img, label, para, link }) => {
  return (
    <>
      <section className="card flex flex-col w-[360px] h-[450px] overflow-hidden transition duration-300 rounded-xl border-2 border-solid border-[#4d4d4da2] font-roboto">
        <div className="upper-part p-6 bg-[#1A1A1A] basis-[65%]">
          <img
            className="mx-auto w-[90%] h-[150px] object-cover mt-8 rounded-xl"
            src={img} loading="lazy"
          />
        </div>
        <div className="p-5 basis-[35%]">
          <h2 className="text-white text-2xl p-2 font-semibold">{label}</h2>
          <p className="text-zinc-500 text-base pb-[15px] pl-[10px]">{para}</p>
          <a href={link} target="_blank" class="button">
            Link
            <div class="arrow">›</div>
          </a>
        </div>
      </section>
    </>
  );
};
export default Card;

// Above is perfect working card.

// import React from "react";

// const Card = ({ img, label, para, link }) => {
//   return (
//     <div id="cards" className="w-[350px] overflow-hidden font-roboto">
//       <a href={link}>

//       <div className="relative w-full h-[220px] rounded-t-2xl">
//         <img
//           className="border border-gray-800 absolute top-0 left-0 w-full h-full object-cover rounded-xl"
//           src={img}
//           alt={label}
//         />
//       </div>
//       <div className="p-2 px-3 flex justify-between items-center">
//         <h2 className="text-white text-xl font-semibold mb-2">{label}</h2>
//         <p className="text-zinc-400 text-base mb-4">{para}</p>
//         {/* <a id="btn" href={link} target="_blank" rel="noopener noreferrer">Link</a> */}
//       </div>
//           </a>
//     </div>
//   );
// };

// export default Card;
