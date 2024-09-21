import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What services does your company provide?",

    answer:
      "We specialize in data cleaning, analysis, reporting, data visualization (dashboards), data integration, automation of repetitive tasks, and custom data solutions. Our goal is to help small businesses manage and leverage their data effectively.",
  },

  {
    question: "How does data cleaning work?",

    answer:
      "We remove duplicates, correct errors, standardize formats, and ensure your data is accurate and ready for analysis. Clean data improves reporting accuracy and helps you make better business decisions.",
  },

  {
    question: "What types of data sources can you integrate?",

    answer:
      "We can integrate data from various platforms, including CRMs, e-commerce systems, financial tools, marketing platforms, and more. Our automation solutions ensure seamless data flow between systems for better analysis.",
  },

  {
    question: "Do I need technical knowledge to use your services?",

    answer:
      "No, you don’t need any technical expertise. We handle all the setup, integration, and automation processes. You simply tell us your requirements, and we deliver the results.",
  },

  {
    question: "How often are reports and dashboards updated?",

    answer:
      "Depending on your needs, reports and dashboards can be updated in real-time, daily, weekly, or monthly. We customize the frequency based on your business requirements.",
  },

  {
    question: "How do I get started with your services?",

    answer:
      "Getting started is easy. Simply contact us through our website, and we’ll arrange a consultation to discuss your needs. Afterward, we’ll provide a tailored solution and pricing based on your requirements.",
  },

  {
    question: "What industries do you work with?",

    answer:
      "We primarily work with small businesses across a variety of industries, including retail, e-commerce, healthcare, consulting, and more. Our flexible solutions can be adapted to fit any industry’s data needs.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer }) => (
          <AccordionItem key={answer} value={answer}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
