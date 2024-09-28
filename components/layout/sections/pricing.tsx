import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Check, InfoIcon, X } from "lucide-react";
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

const services = [
  {
    service: "Data Cleaning",
    description: "Ensure your data is accurate and reliable",
    price: "Starting at $99 per data source",
  },
  {
    service: "Data Integration",
    description: "Combine data from multiple sources into a unified view",
    price: "Starting at $125 per integration",
  },
  {
    service: "Data Analysis",
    description: "In-depth analysis to uncover insights and trends",
    price: "Starting at $325 per project",
  },
  {
    service: "Interactive Dashboards",
    description: "Custom dashboards for real-time data visualization",
    price: "Starting at $375 per dashboard",
  },
  {
    service: "Automation Services",
    description: "Automate repetitive tasks to improve efficiency",
    price: "Starting at $375 per process",
  },
  {
    service: "Custom Reports",
    description: "Tailored reports to meet your specific business needs",
    price: "Starting at $150 per report",
  },
  {
    service: "Consultation Services",
    description: "Expert advice on data strategy and management",
    price: "$60 per hour",
  },
  {
    service: "Data Audit",
    description: "Comprehensive review of your data infrastructure",
    price: "Starting at $350 per audit",
  },
  {
    service: "Data Security Compliance",
    description: "Ensure your data processes meet industry standards",
    price: "Starting at $500 per compliance assessment",
  },
  {
    service: "Technical Support",
    description: "One-time assistance and troubleshooting",
    price: "$80 per incident",
  },
];

const plans: PlanProps[] = [
  {
    title: "Basic Plan",
    popular: 0,
    price: "$199",
    description: "",
    buttonText: "Get started",
    benefitList: [
      "Data Cleaning (up to 2 sources)",
      "Basic Data Integration",
      "Basic Data Analysis",
      "Monthly Reports",
      "Quarterly Data Audits",
      "2 hours of consultation per month"
    ],
  },
  {
    title: "Professional Plan",
    popular: 1,
    price: "$399",
    description: "",
    buttonText: "Get started",
    benefitList: [
      "Advanced Data Cleaning (up to 5 sources)",
      "Comprehensive Data Integration",
      "Advanced Data Analysis",
      "Bi-weekly Reports",
      "1 Automation Process",
      "Interactive Dashboard",
      "4 hours of consultation per month",
    ],
  },
  {
    title: "Enterprise Plan",
    popular: 0,
    price: "from $699",
    description: "",
    buttonText: "Get started",
    benefitList: [
      "Comprehensive Data Management",
      "Full Data Integration",
      "Unlimited Data Sources",
      "Advanced Data Analysis",
      "On-demand BI Reports",
      "Automation Processes",
      "Interactive Dashboards",
      "Custom Reporting and Analytics",
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
        "Data Cleaning": "Up to 2 sources",
        "Data Integration": "Basic Integration",
        "Data Analysis": true,
        "Custom Reports": true,
        "Interactive Dashboards": false,
        "Automation Services": false,
        "Custom Reports": false,
        "Technical Support": false,
        "Reports": "Monthly",
        "Data Security Compliance": false,
        "Consultation Services": "Up to 2 hour/month",
        "Data Audit": "Quarterly",
      },
    },
    {
      name: "Professional",
      price: "$399/month",
      description: "Comprehensive data solutions for growing companies",
      services: {
        "Data Cleaning": "Up to 5 sources",
        "Data Integration": "Comprehensive Integration",
        "Data Analysis": true,
        "Custom Reports": true,
        "Interactive Dashboards": true,
        "Automation Services": "1 process/month",
        "Custom Reports": false,
        "Technical Support": true,
        "Reports": "Bi-weekly",
        "Data Security Compliance": true,
        "Consultation Services": "Up to 5 hours/month",
        "Data Audit": "Monthly",
      },
    },
    {
      name: "Enterprise",
      price: "from $699/month",
      description: "Tailored data ecosystem for large organizations",
      services: {
        "Data Cleaning": "Unlimited",
        "Data Integration": "Full Integration",
        "Data Analysis": true,
        "Custom Reports": true,
        "Interactive Dashboards": true,
        "Automation Services": "Unlimited",
        "Custom Reports": true,
        "Technical Support": true,
        "Reports": "On-demand",
        "Data Security Compliance": true,
        "Consultation Services": "On-demand",
        "Data Audit": "On-demand",
      },
    },
  ];

const allServices = [
    {
      label: "Data Cleaning",
      description: "Ensure your data is accurate and reliable",
    },
    {
      label: "Data Integration",
      description: "Combine data from multiple sources into a unified view",
    },
    {
      label: "Data Analysis",
      description: "In-depth analysis to uncover insights and trends",
    },
    {
      label: "Interactive Dashboards",
      description: "Custom dashboards for real-time data visualization",
    },
    {
      label: "Automation Services",
      description: "Automate repetitive tasks to improve efficiency",
    },
    {
      label: "Consultation Services",
      description: "Expert advice on data strategy and management",
    },
    {
      label: "Data Audit",
      description: "Comprehensive review of your data infrastructure",
    },
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
          Choose the plan that best fits your business needs
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
                  className={`flex flex-col ${
                    popular === PopularPlan?.YES
                      ? "drop-shadow-xl glow reflection shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                      : "glow"
                  }`}
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

                  <CardFooter className="flex-1">
                    <Link href="#contact" className="mt-auto">
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
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse" role="table">
            <thead>
              <tr>
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
              {allServices.map(({ label, description }, index) => (
                <tr key={label} className={index % 2 === 0 ? "" : ""}>
                  <td className="border px-4 py-2 font-medium">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex cursor-pointer items-center">
                            <p>{label}</p>
                            <InfoIcon className="w-4 h-4 ml-2 hidden lg:block text-white text-opacity-40" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                  {planss.map((plan: any) => (
                    <td
                      key={`${plan.name}-${label}`}
                      className="border px-4 py-2 text-center"
                    >
                      {typeof plan.services[label] === "boolean" ? (
                        plan.services[label] ? (
                          <Check className="inline-block w-5 h-5 text-green-500" />
                        ) : (
                          <X className="inline-block w-5 h-5 text-red-500" />
                        )
                      ) : (
                        <span>{plan.services[label]}</span>
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
        <div className="mt-12">
          <h3 className="text-xl font-bold mt-4">
            Revised One-Time Service Pricing
          </h3>
          <h4 className="mt-2 text-white text-opacity-60">
            We understand the importance of providing high-quality services that
            are also budget-friendly. At SevenTons Software, we&apos;re
            committed to offering cost-effective solutions without compromising
            on excellence. Below is our updated pricing table with more
            affordable rates to better accommodate your needs
          </h4>
          <div className="my-4 overflow-x-auto">
            <table className="w-full border-collapse" role="table">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left">Service</th>
                  <th className="border px-4 py-2 text-left">Description</th>
                  <th className="border px-4 py-2 text-left">Price (USD)</th>
                </tr>
              </thead>
              <tbody>
                {services.map(({ service, description, price }) => (
                  <tr key={service}>
                    <td className="border px-4 py-2 font-light">{service}</td>
                    <td className="border px-4 py-2 font-light">
                      {description}
                    </td>
                    <td className="border px-4 py-2 font-light">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-bold">Notes</h3>
          <div className="flex md:flex-row flex-col gap-4 justify-between mt-2">
            <div>
              <strong className="text-lg">Customization Available</strong>
              <p className="text-white text-opacity-60">
                Prices listed are starting points. Final pricing may vary based
                on the complexity and scope of your project
              </p>
            </div>
            <div>
              <strong className="text-lg">Bundle Discounts</strong>
              <p className="text-white text-opacity-60">
                Save more by combining multiple services. Contact us for a
                personalized package. Flexible Payment Terms: We offer flexible
                payment options to suit your budget
              </p>
            </div>
            <div>
              <strong className="text-lg">Taxes</strong>
              <p className="text-white text-opacity-60">
                All prices are in USD. Taxes may apply based on your location
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
