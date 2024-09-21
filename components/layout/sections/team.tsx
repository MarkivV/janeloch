import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const TeamSection = () => {
  return (
    <section id="team" className="container lg:w-[75%] py-12 sm:py-16">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          The Company Dream Team
        </h2>
      </div>

      <div className="flex max-w-[1000px] sm:flex-row flex-col w-full mx-auto gap-16">
        <Card className="flex-1 bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
          <CardHeader className="p-0 gap-0">
            <div className="h-full overflow-hidden">
              <Image
                src="/vlad.jpg"
                width={400}
                height={600}
                alt="Vlad Makarov"
                className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
              />
            </div>
          </CardHeader>
        </Card>
        <div className="flex-1 flex flex-col justify-center items-end">
          <h3 className="text-lg">
            <h4 className="text-3xl font-bold">Vlad Makarov</h4>
            <h5 className="text-white text-opacity-60">Founder & CEO</h5>
            <p className="mt-4">
              Founder and CEO of SevenTons Software, Volodymyr is the visionary
              behind the company’s mission to empower businesses with data
              management and automation solutions. His leadership and innovative
              approach drive the success of SevenTons Software in delivering
              exceptional value to clients.
            </p>
            <div className="flex gap-4 mt-6 items-center">
              <Link href="#" target="_blank">
                <LinkedInIcon className="ionicon fill-foreground w-10 h-10" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="ionicon fill-foreground w-10 h-10" />
              </Link>
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
};
