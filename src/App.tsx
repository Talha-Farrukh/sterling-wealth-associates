import { motion } from "framer-motion";
import { Mail, Phone, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import about1 from "./assets/images/about-1-e9e592a0.svg";
import about2 from "./assets/images/about-2-0c2df8df.svg";
import about3 from "./assets/images/about-3-33bf247a.svg";
import about4 from "./assets/images/about-4-3fc327c2.svg";
import heroImage from "./assets/images/hero-c541378c.jpg";
import logo from "./assets/images/logo__1_-removebg 1-f3a90bbe.png";
import DisclaimerModal from "./components/DisclaimerModal";

function App() {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document
      .getElementById("contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen font-poppins">
      {/* Header */}
      <header className="bg-[#0066CC] text-white py-2">
        <div className="container mx-auto px-4">
          {/* Desktop Header */}
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="mailto:info@sterlingwealthassociates.com"
                className="hover:text-gray-200 transition-colors flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                info@sterlingwealthassociates.com
              </a>
              <a
                href="tel:+442033184790"
                className="hover:text-gray-200 transition-colors flex items-center"
              >
                <Phone className="w-4 h-4 mr-1" />
                +44 20 3318 4790
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/message/IA6ZQYZ3LMZQK1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex justify-between items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-blue-700 rounded"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/442033184790"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:info@sterlingwealthassociates.com"
                  className="hover:text-gray-200 transition-colors flex items-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  info@sterlingwealthassociates.com
                </a>
                <a
                  href="tel:+442033184790"
                  className="hover:text-gray-200 transition-colors flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +44 20 3318 4790
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img
            src={logo}
            alt="Sterling Wealth Associates"
            className="h-12 md:h-16 object-contain"
          />
          <button
            onClick={scrollToContact}
            className="bg-[#0066CC] text-white px-4 md:px-6 py-2 rounded hover:bg-blue-700 transition-colors text-sm md:text-base"
          >
            Contact Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Sterling Wealth Associates

            </h1>
            <p className="text-xl md:text-2xl font-bold mb-8">
            Smart Property Solutions, Lasting Value

            </p>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={
                <img
                  src={about1}
                  alt="Financial Consultation"
                  className="w-12 h-12"
                />
              }
              title="Tailored Financial Consultation"
              description="We offer personalized financial planning and investment strategies to help clients achieve their unique financial goals."
            />
            <ServiceCard
              icon={
                <img
                  src={about2}
                  alt="Real Estate Guidance"
                  className="w-12 h-12"
                />
              }
              title="Strategic Real Estate Guidance"
              description="Leveraging our in-depth knowledge of the real estate market, we provide expert advice on property investments and development opportunities."
            />
            <ServiceCard
              icon={
                <img
                  src={about3}
                  alt="Corporate Structuring"
                  className="w-12 h-12"
                />
              }
              title="Bespoke Corporate Structuring"
              description="We assist businesses in optimizing their corporate structure to enhance efficiency, minimize tax liabilities, and achieve long-term growth."
            />
            <ServiceCard
              icon={
                <img
                  src={about4}
                  alt="Cross-Border Transactions"
                  className="w-12 h-12"
                />
              }
              title="Cross-Border Financial Transactions"
              description="With a robust global network we facilitate seamless cross-border financial transactions and international investment opportunities."
            />
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-gray-700">
              At Sterling Wealth Associates, we don't just market properties—we create opportunities for buyers and sellers. Specializing in high-quality residential and commercial properties, we promote multi-unit apartment blocks, mixed-use developments, commercial spaces, and single-let houses across the UK.
            </p>
            <p className="text-gray-700">
              Unlike traditional agencies, we leverage data-driven insights, exclusive off-market opportunities, and strategic marketing to connect clients with the right properties while ensuring a seamless transaction process.
            </p>
            
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">Trust. Integrity. Results.</h3>
              <p className="text-gray-700 mb-8">
                At Sterling Wealth Associates, we operate with transparency, reliability, and a commitment to delivering exceptional service. Whether working with developers, estate agents, contractors, surveyors, or solicitors, we believe in fostering relationships built on trust. Our philosophy is simple: do great business, and success follows.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">Sustainable Growth, Prime Property Opportunities</h3>
              <p className="text-gray-700 mb-8">
                We focus on marketing properties in high-demand locations, including refurbishment projects and value-enhanced developments. By promoting premium living and working environments, we help buyers and businesses find ideal spaces that align with their goals.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-6">Strategic Expansion for a Thriving Future</h3>
              <p className="text-gray-700 mb-8">
                We are not just growing—we are expanding with purpose. Our curated portfolio of properties ensures a diverse range of opportunities for those looking to buy, lease, or develop. As we continue to scale, we welcome like-minded partners who share our vision for a thriving and sustainable property market.
              </p>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={scrollToContact}
                className="bg-[#0066CC] text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Contact us</h2>
          <ContactForm />
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              {/* <h3 className="text-2xl font-bold mb-6">Company Info</h3> */}
              <div className="space-y-4">
                {/* <p>
                  <strong>Company Name:</strong> STERLING WEALTH ASSOCIATES
                  LIMITED
                </p>
                <p>
                  <strong>Company Number:</strong> 10920228
                </p> */}
                <p>
                  <strong>Company Address:</strong> Office 303, 17 Holywell
                  Hill, St Albans, Hertfordshire, England, AL1 1DT
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2">Call Us</h4>
                <a
                  href="tel:+442033184790"
                  className="text-white hover:text-gray-200"
                >
                  +44 20 3318 4790
                </a>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Mail Us</h4>
                <a
                  href="mailto:info@sterlingwealthassociates.com"
                  className="text-white hover:text-gray-200"
                >
                  info@sterlingwealthassociates.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-sm md:text-base">
              Copyright © 2021 Sterling Wealth Associates Limited. All rights reserved.
            </p>
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              className="text-white hover:text-gray-300 transition-colors text-sm md:text-base"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </footer>

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </div>
  );
}

const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
  >
    <div className="mb-6 flex justify-center text-blue-600">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <input
            {...register("fullName", { required: true })}
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.fullName && (
            <span className="text-red-500 text-sm">Full name is required</span>
          )}
        </div>
        <div>
          <input
            {...register("phoneNumber", { required: true })}
            placeholder="Phone Number"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.phoneNumber && (
            <span className="text-red-500 text-sm">
              Phone number is required
            </span>
          )}
        </div>
      </div>
      <div className="mb-6">
        <input
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">Valid email is required</span>
        )}
      </div>
      <div className="mb-6">
        <textarea
          {...register("message", { required: true })}
          placeholder="Message"
          rows={6}
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.message && (
          <span className="text-red-500 text-sm">Message is required</span>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default App;
