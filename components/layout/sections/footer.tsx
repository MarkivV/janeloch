import LogoIcon from "@/components/icons/logo-icon";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container scroll-mt-12 py-12 sm:py-16 !pb-4">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 py-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <LogoIcon />
              <div className="ml-3">
                <h3 className="text-xl">SevenTons</h3>
                <p className="text-sm font-thin -mt-2">Software</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
            <div>
              <Link
                href="https://www.linkedin.com/company/seventons/posts/?feedView=all"
                target="_blank"
                className="opacity-60 hover:opacity-100"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">&copy; 2024 All right reserved.</h3>
        </section>
      </div>
    </footer>
  );
};
