import Header from "./Header";

const Layout: React.FunctionComponent = props => {
  return (
    <div>
      <Header></Header>
      {props.children}
    </div>
  );
};

export default Layout;
