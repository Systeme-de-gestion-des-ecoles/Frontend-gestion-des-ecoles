import type { ReactNode } from "react";
import HeaderChef from "../layoutChefClasse/Header";



type Props = {
  children: ReactNode;
  userName: string;
  personaliseNamPage: string;
  onLogout: () => void;
};

export default function LayoutProf({ children, userName, personaliseNamPage, onLogout }: Props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeaderChef userName={userName} personaliseNamPage={personaliseNamPage} onLogout={onLogout} />
      <main className="p-4">{children}</main>
    </div>
  );
}
