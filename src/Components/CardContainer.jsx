const CardContainer = ({ children }) => {
  return (
    <div className="container-card w-11/12 flex flex-wrap justify-center pt-8 gap-9 mx-auto overflow-hidden">
      {children}
    </div>
  );
};

export default CardContainer;
