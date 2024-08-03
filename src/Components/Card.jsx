const Card = ({ img, label, para, link }) => {
  return (
    <>
      <div className="card flex flex-col w-[350px] h-[450px] overflow-hidden transition duration-300 rounded-2xl border-4 border-solid border-[#4d4d4da2] font-outfit">
        <div className="upper-part p-6 bg-[#1A1A1A] rounded-b-[20px] basis-[65%]">
          <img
            className="mx-auto w-[90%] h-[150px] object-cover mt-8 rounded-xl"
            src={img}
          />
        </div>
        <div className="lower-part p-4 basis-[35%]">
          <h2 className="text-white text-2xl p-2 font-semibold">
            {label}
          </h2>
          <p className="text-zinc-500 text-base pb-[15px] pl-[10px]">
            {para}
          </p>
          <a
            id="btn"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;

