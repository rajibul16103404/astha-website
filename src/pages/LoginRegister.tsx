import { BsArrowLeftSquareFill } from "react-icons/bs";
import AnimatedSection from '@/components/AnimatedSection';
import LoginForm from "@/components/LogInForm";

const LoginRegister = () => {
  return (
    <>
      {/* Login and Register Form */}
      <section className="py-20">
        <div className="container mx-auto px-80">
            <AnimatedSection delay={0.2}>
                <a href="/"><BsArrowLeftSquareFill  className="text-primary text-4xl"/></a>
              <div className="bg-white shadow-lg rounded-lg p-8 m-auto">
                <div className="flex justify-center mb-6">
                    <img src="/lovable-uploads/0c304457-f71b-4d2c-be41-05d9307c31a8.png" alt="Astha Insight Logo" className="h-20 w-40 object-cover border-2 border-red-300 rounded-full" />
                </div>
                <h2 className="text-2xl font-bold mb-6">Login to your account</h2>
                <LoginForm />
              </div>
            </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default LoginRegister;
