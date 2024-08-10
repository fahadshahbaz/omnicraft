const Card = ({ img, label, para, link }) => {
  return (
    <>
      <div className="card flex flex-col w-[360px] h-[450px] overflow-hidden transition duration-300 rounded-2xl border-2 border-solid border-[#4d4d4da2] font-roboto">
        <div className="upper-part p-6 bg-[#1A1A1A] basis-[65%]">
          <img
            className="mx-auto w-[90%] h-[150px] object-cover mt-8 rounded-xl"
            src={img}
          />
        </div>
        <div className="lower-part p-5 basis-[35%]">
          <h2 className="text-white text-2xl p-2 font-semibold">{label}</h2>
          <p className="text-zinc-500 text-base pb-[15px] pl-[10px]">{para}</p>
          <a href={link} target="_blank" class="button">Link
            <div class="arrow">›</div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Card;

// Above is perfect working card.

// import React from "react";

// const Card = ({ img, label, para, link }) => {
//   return (
//     <div className="w-[330px] overflow-hidden rounded-2xl border-2 border-[#4d4d4da2] font-roboto m-4 bg-[#1A1A1A]">
//       {/* Upper Part */}
//       <div className="relative w-full h-[200px] rounded-t-2xl">
//         <img
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           src={img}
//           alt={label}
//         />
//       </div>

//       {/* Lower Part */}
//       <div className="p-5 bg-[#171717]">
//         <h2 className="text-white text-2xl font-semibold mb-2">{label}</h2>
//         <p className="text-zinc-500 text-base mb-4">{para}</p>{" "}
//         <a id="btn" href={link} target="_blank" rel="noopener noreferrer">Link</a>
//       </div>
//     </div>
//   );
// };

// export default Card;
