import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashboard (protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
