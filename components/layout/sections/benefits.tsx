export const BenefitsSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 w-full h-[600px] bg-gradient-to-b from-black"></div>
      <section id="benefits" className="container py-16 sm:py-24 relative">
        <div className="flex">
          <div className="flex-1 hidden sm:block">
            <h2 className="text-4xl font-bold sticky top-24">
              Empower Your Business with Data Excellence
            </h2>
          </div>
          <div className="flex-1 flex flex-col gap-16">
            {[
              {
                title: "Diverse Expertise",
                description:
                  "At SevenTons Software, we possess deep-rooted experience in data management and automation solutions tailored for small and medium-sized businesses. Our team’s expertise spans across data cleaning, integration, analysis, automation, and interactive dashboards—ensuring we meet all your data needs with precision.",
              },
              {
                title: "Cost-Effective Solutions",
                description:
                  "We optimize efficiency and quality in every project, delivering solutions that not only meet your expectations but also provide exceptional value for your investment. Our focus is on maximizing your ROI through intelligent data strategies.",
              },
              {
                title: "Self-Sustained Management",
                description:
                  "Our unique management framework, supported by a strong work ethic, means you never have to worry about the processes within our team. We handle everything seamlessly, allowing you to focus on your core business activities while we drive your data initiatives forward.",
              },
              {
                title: "Long-Term Partnerships",
                description:
                  "Building trust is at the heart of our collaboration. We are committed to fostering long-term relationships that are evident in every interaction, project, and deliverable. Your success is our success, and we are dedicated to supporting your business growth over time.",
              },
              {
                title: "Rapid Delivery",
                description:
                  "In today’s fast-paced business environment, speed is crucial. We understand that timely execution is essential, and we implement efficient practices to ensure your projects are completed quickly without compromising on quality. At SevenTons Software, agility and excellence go hand in hand.",
              },
            ].map(({ title, description }) => {
              return (
                <div key={title}>
                  <h3 className="text-4xl font-bold">{title}</h3>
                  <p className="text-muted-foreground mt-6 text-lg">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
