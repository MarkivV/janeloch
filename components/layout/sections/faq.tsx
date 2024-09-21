import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What industries do you specialize in?",
    answer:
      "We work with a variety of industries, including e-commerce, healthcare, finance, manufacturing, and more.",
    value: "item-1",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We offer tiered pricing plans to suit different business needs. Custom solutions are also available upon request.",
    value: "item-2",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes, you can upgrade or modify your plan at any time. Please contact our support team for assistance.",
    value: "item-3",
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
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
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
