import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter Plan",
    popular: 0,
    price: 150,
    description: "",
    buttonText: "Start Starter Plan",
    benefitList: [
      "Data Cleaning (up to 2 sources)",
      "Basic Data Integration",
      "Monthly Reports",
      "Email Support",
    ],
  },
  {
    title: "Growth Plan",
    popular: 1,
    price: 350,
    description: "",
    buttonText: "Get started",
    benefitList: [
      "Advanced Data Cleaning (up to 3 sources)",
      "Comprehensive Data Integration",
      "Bi-weekly Reports",
      "1 Automation Process",
      "Priority Support",
    ],
  },
  {
    title: "Premium Plan",
    popular: 0,
    price: 600,
    description: "",
    buttonText: "Contact US",
    benefitList: [
      "Comprehensive Data Management",
      "Full Data Integration",
      "Weekly Reports",
      "Up to 3 Automation Processes",
      "Dedicated Support",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-16 sm:py-24">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Choose the plan that best fits your business needs.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
