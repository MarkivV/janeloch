import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Data Cleaning",
    description: "Ensure your data is accurate and ready for analysis.",
    pro: 0,
  },
  {
    title: "Data Integration",
    description: "Unify data from multiple sources for a holistic view.",
    pro: 0,
  },
  {
    title: "Data Analysis",
    description: "Gain insights to drive business decisions.",
    pro: 0,
  },
  {
    title: "Interactive Dashboards",
    description: "Visualize your key performance indicators in real-time.",
    pro: 0,
  },
  {
    title: "Automation",
    description: "Automate repetitive tasks to save time and reduce errors.",
    pro: 0,
  },
  {
    title: "Custom Solutions",
    description: "Tailored data solutions to meet your unique needs.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-16 sm:py-24">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[80%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
