import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-full bg-black">
        <TopBar />
      <main className="min-h-screen pl-0 pt-14 md:pl-72 md:pt-40">
        {children}
      </main>
    </div>
  );
}

export default Layout;
