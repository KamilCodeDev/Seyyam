interface ContainerProps {
    children: React.ReactNode;
  }
  
  const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
      <div
        className="
          max-w-[1280px]
          mx-auto
          sm:px-2
          px-4
        "
      >
        {children}
      </div>
    );
  };
  
  export default Container;