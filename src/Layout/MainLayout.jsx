import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="layout">
      <Outlet />
    </section>
  );
};

export default MainLayout;
