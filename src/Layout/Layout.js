import SideBar from '../Components/SideBar';

function Layout({ children }) {
  return (
    <div className="container flex  flex-col lg:flex-row  justify-between  mx-auto ">
      <div className="sidebar mr-10">
        <SideBar />
      </div>
      <div className="main-content  w-full mt-5">{children}</div>
    </div>
  );
}

export default Layout;
