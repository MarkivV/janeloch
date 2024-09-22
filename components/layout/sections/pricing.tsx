import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Starter Plan",
    popular: 0,
    price: "$199",
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
    price: "$350",
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
    price: "from $699",
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
  const planss = [
    {
      name: "Basic",
      price: "$199/month",
      description: "Essential data services for small businesses",
      services: {
        "Data Cleaning": true,
        "Data Integration": true,
        "Data Analysis": true,
        "Interactive Dashboards": false,
        "Automation Services": false,
        "Custom Software Development": false,
        "Consultation Services": "2 hours/month",
        "Data Audit": "Quarterly",
      },
    },
    {
      name: "Professional",
      price: "$399/month",
      description: "Comprehensive data solutions for growing companies",
      services: {
        "Data Cleaning": true,
        "Data Integration": true,
        "Data Analysis": true,
        "Interactive Dashboards": true,
        "Automation Services": "1 process/month",
        "Custom Software Development": false,
        "Consultation Services": "5 hours/month",
        "Data Audit": "Monthly",
      },
    },
    {
      name: "Enterprise",
      price: "from 699$/month",
      description: "Tailored data ecosystem for large organizations",
      services: {
        "Data Cleaning": true,
        "Data Integration": true,
        "Data Analysis": true,
        "Interactive Dashboards": true,
        "Automation Services": true,
        "Custom Software Development": true,
        "Consultation Services": "Unlimited",
        "Data Audit": "On-demand",
      },
    },
  ];

  const allServices = [
    "Data Cleaning",
    "Data Integration",
    "Data Analysis",
    "Interactive Dashboards",
    "Automation Services",
    "Custom Software Development",
    "Consultation Services",
    "Data Audit",
  ];

  return (
    <div>
      <section className="container z-10 py-12 sm:py-16">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Pricing
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Get unlimitted access
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
          Choose the plan that best fits your business needs.
        </h3>

        <div className="relative">
          <div className="grid z-10 relative md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
            {plans.map(
              ({
                title,
                popular,
                price,
                description,
                buttonText,
                benefitList,
              }) => (
                <Card
                  key={title}
                  className={
                    popular === PopularPlan?.YES
                      ? "drop-shadow-xl glow reflection shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                      : "glow"
                  }
                >
                  <CardHeader>
                    <CardTitle className="pb-2">{title}</CardTitle>

                    <CardDescription className="pb-4">
                      {description}
                    </CardDescription>

                    <div>
                      <span className="text-3xl font-bold">{price}</span>
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
                    <Link href="#contact">
                      <Button
                        variant={
                          popular === PopularPlan?.YES ? "default" : "secondary"
                        }
                        className="w-full"
                      >
                        {buttonText}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            )}
          </div>
          {/* <div className="absolute inset-0 lg:flex hidden items-center justify-center">
            <div
              className="h-[190px] w-[1200px] relative rotate-[-15deg] rounded-2xl"
              style={{
                backgroundImage:
                  "repeating-conic-gradient(rgba(255,255,255,0.9) 0% 25%, rgba(0,0,0,0) 0% 50%)",
                backgroundPosition: "0 0, 70px 70px",
                backgroundSize: "100px 100px",
                backgroundColor: "#000000",
              }}
            ></div>
          </div>
          <div className="absolute inset-0 lg:flex hidden items-center justify-center">
            <div
              className="h-[190px] w-[1200px] relative rotate-[15deg] rounded-2xl"
              style={{
                backgroundImage:
                  "repeating-conic-gradient(rgba(255,255,255,0.9) 0% 25%, rgba(0,0,0,0) 0% 50%)",
                backgroundPosition: "0 0, 70px 70px",
                backgroundSize: "100px 100px",
                backgroundColor: "#000000",
              }}
            ></div>
          </div> */}
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Services Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" role="table">
            <thead>
              <tr className="">
                <th className="border px-4 py-2 text-left">Service</th>
                {planss.map((plan) => (
                  <th key={plan.name} className="border px-4 py-2 text-left">
                    <div className="font-bold">{plan.name}</div>
                    <div className="font-normal">{plan.price}</div>
                    <div className="text-sm text-white text-opacity-60 font-light">
                      {plan.description}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allServices.map((service, index) => (
                <tr key={service} className={index % 2 === 0 ? "" : ""}>
                  <td className="border px-4 py-2 font-medium">{service}</td>
                  {planss.map((plan: any) => (
                    <td
                      key={`${plan.name}-${service}`}
                      className="border px-4 py-2 text-center"
                    >
                      {typeof plan.services[service] === "boolean" ? (
                        plan.services[service] ? (
                          <Check className="inline-block w-5 h-5 text-green-500" />
                        ) : (
                          <X className="inline-block w-5 h-5 text-red-500" />
                        )
                      ) : (
                        <span>{plan.services[service]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="border px-4 py-2"></td>
                {planss.map((plan) => (
                  <td
                    key={`${plan.name}-action`}
                    className="border px-4 py-2 text-center"
                  >
                    <Link href="#contact">
                      <Button
                        variant={
                          plan.name === "Professional" ? "default" : "outline"
                        }
                        className="w-full"
                      >
                        {plan.name === "Enterprise"
                          ? "Contact Sales"
                          : "Get Started"}
                      </Button>
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
