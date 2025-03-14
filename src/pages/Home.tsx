import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users, Briefcase, Phone } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Financial Future Starts Here
            </h1>
            <p className="text-xl mb-8">
              Expert wealth management and financial planning services tailored to your unique needs.
            </p>
            <button className="btn-primary flex items-center gap-2">
              Get Started <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold text-[--primary] mb-6">About Sterling Wealth Associates</h2>
            <p className="text-lg text-gray-600">
              With over 25 years of experience in wealth management, we provide comprehensive financial solutions 
              that help our clients achieve their long-term financial goals through strategic planning and 
              personalized investment strategies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[--primary] mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-[--secondary]" />}
              title="Wealth Protection"
              description="Safeguard your assets with our comprehensive wealth protection strategies."
            />
            <ServiceCard
              icon={<TrendingUp className="w-12 h-12 text-[--secondary]" />}
              title="Investment Management"
              description="Expert portfolio management tailored to your risk tolerance and goals."
            />
            <ServiceCard
              icon={<Users className="w-12 h-12 text-[--secondary]" />}
              title="Estate Planning"
              description="Ensure your legacy with our detailed estate planning services."
            />
            <ServiceCard
              icon={<Briefcase className="w-12 h-12 text-[--secondary]" />}
              title="Retirement Planning"
              description="Create a secure retirement strategy that meets your lifestyle needs."
            />
            <ServiceCard
              icon={<TrendingUp className="w-12 h-12 text-[--secondary]" />}
              title="Tax Strategy"
              description="Optimize your tax position with our expert financial planning."
            />
            <ServiceCard
              icon={<Phone className="w-12 h-12 text-[--secondary]" />}
              title="Personal Consultation"
              description="Get personalized advice from our experienced financial advisors."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-[--primary] mb-16">Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&h=400"
              name="James Wilson"
              position="Senior Financial Advisor"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400"
              name="Sarah Thompson"
              position="Investment Strategist"
            />
            <TeamMember
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400"
              name="Michael Chen"
              position="Wealth Planning Director"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[--primary] mb-16">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="text-gray-600 mb-6">
                  Ready to start your journey towards financial success? Contact us today for a 
                  complimentary consultation.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <Phone className="text-[--secondary]" />
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="text-[--secondary]" />
                    <span>contact@sterlingwealth.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="text-[--secondary]" />
                    <span>123 Financial District, New York, NY 10004</span>
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <div className="mb-6">{icon}</div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const TeamMember = ({ image, name, position }: {
  image: string;
  name: string;
  position: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
  >
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-[--secondary]">{position}</p>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          {...register('name', { required: true })}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--primary]"
        />
        {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
      </div>
      <div>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--primary]"
        />
        {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
      </div>
      <div>
        <textarea
          {...register('message', { required: true })}
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[--primary]"
        />
        {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
      </div>
      <button type="submit" className="btn-primary w-full">
        Send Message
      </button>
    </form>
  );
};

export default Home;