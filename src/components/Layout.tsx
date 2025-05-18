
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useTranslation } from "@/utils/translations";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-background border-t py-6">
        <div className="container-custom">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t('app.name')}. {t('footer.rights')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
