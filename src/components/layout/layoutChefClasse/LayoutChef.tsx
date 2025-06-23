import type { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
  userName: string;
  personaliseNamPage: string;
  onLogout: () => void;
};

export default function LayoutChef({ children,personaliseNamPage, userName, onLogout }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header userName={userName} personaliseNamPage={personaliseNamPage} onLogout={onLogout} />
      <main className="p-4">{children}</main>
    </div>
  );
}
