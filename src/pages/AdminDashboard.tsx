import AnimatedSection from '@/components/AnimatedSection';
// import AdminHeader from "@/components/AdminHeader"; // REMOVE THIS

const AdminDashboard = () => {
  return (
    <>
      {/* Login and Register Form */}
      <section className="py-20">
        <div className="container mx-auto px-80">
          <AnimatedSection delay={0.2}>
            {/* Remove AdminHeader from here */}
            {/* Put your dashboard content here */}
            <h1>Welcome to Admin Dashboard</h1>
            {/* Add other dashboard components */}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
