import Header from "../header";

const withHeader = (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Header />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withHeader;
