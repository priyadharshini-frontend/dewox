"use client";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Quote, X } from "lucide-react";
import s1 from '../../assets/images/s1.jpeg'
import s2 from '../../assets/images/s2.jpeg'
import s3 from '../../assets/images/s3.jpeg'
import s4 from '../../assets/images/s4.jpeg'
import s5 from '../../assets/images/s5.jpeg'

export const testimonials = [
  {
  id: 1,
  url: s1,
  name: "Enterprise Business Systems",
  role: "Bring your entire business together",
  quote:
    "Manage departments, people, resources, transactions and operations through connected business systems designed around your organization.We develop comprehensive platforms that improve visibility, strengthen coordination and give decision-makers greater control.",
    solution:[
      "Enterprise Resource Planning (ERP)","Customer Relationship Management (CRM)","Supply Chain Management","Inventory & Warehouse Management","Finance & Accounting Systems","Human Resource Management","Business Intelligence & Reporting"
    ]
},
{
  id: 2,
  url: s2,
  name: "Custom Software Development",
  role: "If your business needs something different, we build it",
  quote:
    "Standard software doesn't always address industry-specific requirements. We design and develop customized software around your workflows, business models and operational needs.From specialized business applications to large-scale enterprise platforms, we turn complex requirements into practical digital solutions.",
     solution:[
      "Custom Enterprise Applications","Industry-Specific Software","Web & Mobile Applications","Management Platforms","Customer & Vendor Portals","Data Management Systems","Custom Business Platforms"
    ]
},
  {
    id: 3,
    url:s3,
    name: "Business Automation & Artificial Intelligence",
    role: "Make complex operations simpler",
    quote:
      "Reduce repetitive work, connect disconnected processes and help your teams work more efficiently through intelligent automation.We identify opportunities to automate everyday activities and develop solutions that improve speed, accuracy and productivity.",
       solution:[
        "Workflow Automation","AI-Powered Business Assistants","Intelligent Document Processing","Automated Reporting","Customer Service Automation","System-to-System Automation","AI Agent Development"
    ]
  },
  {
    id: 4,
    url:s4,
    name: "Hardware & Software Integration",
    role: "Connect the physical world with digital intelligence",
    quote:
      "Business operations don't happen only on screens. They involve equipment, machines, devices, sensors and physical infrastructure.We bring hardware and software together to help businesses monitor, manage and improve their operations.",
       solution:[
        "Hardware & Software Integration","Industrial Monitoring Systems","Equipment Data Integration","IoT-Based Solutions"," Smart Monitoring & Control","Real-Time Data Collection","Customized Operational Displays"
    ]
  },
  {
    id: 5,
    url:s3,
    name: "Industrial & Enterprise Digital Solutions",
    role: "Technology designed for demanding environments",
    quote:
      "Industrial and enterprise operations require more than ordinary software. They need reliable, purpose-built solutions that understand operational complexity.We develop digital solutions that support industrial workflows, operational visibility, data management and connected environments.",
       solution:[
        "Industrial Software Solutions","Production & Operations Management","Equipment Monitoring"," Industrial Data Systems","Process Management Platforms","Customized Industry Solutions"
    ]
  },
   {
    id: 6,
    url:s3,
    name: " Digital Presence & Brand Communication",
    role: "Build a stronger presence in the market",
    quote:
      "A business needs more than efficient internal operations. It also needs a professional identity and a digital presence that communicates its value.We provide creative and digital services that support your business's overall positioning.",
       solution:[
        "Corporate Brand Identity","Business Websites"," Digital Marketing","Corporate Presentations","Marketing & Communication Design"
    ]
  },
  
  
];

function TrustGallery({ items, index, setIndex, setOpen }) {
  return (
    <div className="mx-auto flex w-fit gap-1 pb-4 pt-6 md:gap-2" id="services">
      {items.map((item, i) => (
        <motion.div
          key={item.id}
          onMouseEnter={() => setIndex(i)}
          onClick={() => {
            setIndex(i);
            setOpen(true);
          }}
          className={`relative h-[320px] shrink-0 cursor-pointer overflow-hidden rounded-2xl transition-[width] duration-300 ease-in-out ${
            index === i
              ? "w-[200px] md:w-[320px]"
              : "w-[14px] sm:w-[20px] md:w-[80px] xl:w-[80px]"
          }`}
        >
          <motion.img
            layoutId={`trust-${item.id}`}
            whileTap={{ scale: 0.96 }}
            src={item.url}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          {/* overlay with name, only visible when expanded */}
          <AnimatePresence>
            {index === i && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.1 }}
                className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#07101f]/85 via-[#07101f]/20 to-transparent p-4"
              >
                <p className=" font-semibold text-white decoration-solid text-xl">
                  {item.name}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

const Trust = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    const handleKeyDown = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const active = testimonials[index];

  return (
    <section
      id="trust"
      data-aos="fade-up"
      data-aos-duration="800"
      className="relative overflow-hidden bg-white px-5 py-24 text-[#07101f] md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          className="max-w-2xl text-center md:mx-auto"
        >
                 <span
            data-aos="fade-down"
            data-aos-duration="700"
            className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-[var(--primary)]  px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#9fc1ff]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]  text-[var(--primary)]"/>
            <p className="text-[var(--primary)]">
            OUR CAPABILITIES
            </p>
          </span>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.02em] md:text-6xl">
            Technology that works around your business.

          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#52627a] md:text-lg">
            No two businesses operate the same way. Your technology shouldn't be one-size-fits-all either.

          </p>
          <p className="mx-auto  max-w-xl text-base leading-7 text-[#52627a] md:text-lg">
We bring together software, engineering and intelligent technologies to create solutions that address real operational challenges.

          </p>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          <TrustGallery
            items={testimonials}
            index={index}
            setIndex={setIndex}
            setOpen={setOpen}
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-[#07101f]/50 backdrop-blur-md"
            onClick={() => setOpen(false)}
          >
            <div onClick={(e) => e.stopPropagation()} className="px-5">
              <motion.div
                layoutId={`trust-${active.id}`}
                className="relative flex w-[92vw] max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:flex-row sm:items-stretch"
              >
                <button
                  onClick={() => setOpen(false)}
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#07101f] shadow-sm transition-colors hover:bg-white"
                >
                  <X className="h-4 w-4" />
                </button>

                <img
                  src={active.url}
                  alt={active.name}
                  className="h-48 w-full object-cover sm:h-auto sm:w-80"
                />

                <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                  <Quote className="h-7 w-10 text-[#346eec]" strokeWidth={1.5} />
                  <motion.p
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    className="mt-4 text-base leading-6 text-[#07101f] md:text-lg"
                  >
                    {active.quote}
                  </motion.p>
                  <motion.div
                    initial={{ y: -8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-5"
                  >
                    <p className="text-sm font-semibold text-[var(--primary)] decoration-solid text-xl">
                      {active.name}
                    </p>
                     <p className="text-sm font-semibold text-dark decoration-solid text-lg">
                      Solutions include
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#52627a]">

                      {active.solution.map((item,i)=>(
                          <li key={i}>{item}</li>

                      ))}
                    
                    </ul>

                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Trust;