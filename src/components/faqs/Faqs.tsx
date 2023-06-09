import React from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Typography,
} from "@material-tailwind/react";

const faqs = [
  {
    title: "Is there a free trial available?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "What is your cancellation policy?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can other info be added to an invoice?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How does billing work?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "How do I change my account email?",
    desc: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

export function Faqs() {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value :any) => setOpen(open === value ? 0 : value);

  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography variant="h1" color="blue-gray" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography variant="lead" color="gray" className="mb-24">
            Everything you need to know about the product and billing.
          </Typography>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {faqs.map(({ title, desc }, key) => (
            <Accordion
              key={key}
              open={open === key + 1}
              onClick={() => handleOpen(key + 1)}
            >
              <AccordionHeader className="text-left">{title}</AccordionHeader>
              <AccordionBody>
                <Typography
                  color="blue-gray"
                  className="font-normal text-gray-700"
                >
                  {desc}
                </Typography>
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
