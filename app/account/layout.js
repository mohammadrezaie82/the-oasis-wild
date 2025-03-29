import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[3rem_1fr] sm:grid-cols-[6rem_1fr] h-full gap-6 sm:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
