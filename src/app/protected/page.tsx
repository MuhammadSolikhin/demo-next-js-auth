import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import NavMenu from "../components/NavMenu";
export default async function ProtectedRoute() {
  const session = await getServerSession();
  if (!session || !session.user) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <NavMenu />
      <div className="pt-16 min-h-screen text-gray-100">
        <main className="flex flex-col items-center justify-center px-4 py-8">
          <h1 className="text-4xl font-extrabold mb-4">My account details</h1>
          <p className="text-lg">
            You will only see this page if you are logged in.
          </p>
        </main>
      </div>
    </>
  );
}