import LinkedInIcon from "@/components/icons/linkedin-icon";
import Link from "next/link";

export const TeamSection = () => {
  return (
    <section
      id="team"
      className="container scroll-mt-12 lg:w-[75%] py-12 sm:py-16"
    >
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Head of Operations
        </h2>
      </div>

      <div className="flex max-w-[1000px] sm:flex-row flex-col w-full mx-auto gap-16 mt-24">
        {/* <Card className="flex-1 bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg">
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
        </Card> */}
        <div className="flex-1 flex flex-col justify-center items-end">
          <h3 className="text-lg">
            <h4 className="text-3xl font-bold">Volodymyr Markiv</h4>
            <h5 className="text-white text-opacity-60">Founder & CEO</h5>
            <p className="mt-4">
              Founder and CEO of SevenTons Software, Volodymyr is the visionary
              behind the company’s mission to empower businesses with data
              management and automation solutions. His leadership and innovative
              approach drive the success of SevenTons Software in delivering
              exceptional value to clients.
            </p>
            <div className="flex gap-2 mt-4 -ml-2 items-center">
              <Link
                href="https://www.linkedin.com/in/volodymyr-markiv07/"
                className="p-2"
                target="_blank"
              >
                <LinkedInIcon className="ionicon fill-foreground w-10 h-10" />
              </Link>
            </div>
          </h3>
        </div>
      </div>
    </section>
  );
};
