const CardContainer = ({ children }) => {
    return (
      <div className="container-card w-11/12 max-w-screen-2xl flex flex-wrap justify-center pt-8 gap-5 mx-auto overflow-hidden">
        {children}
      </div>
    );
  };
  
  export default CardContainer;