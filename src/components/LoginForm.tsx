
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        email: '',
        password: '',
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="bg-white"
          required
        />
      </div>
      
      <div>
        <Input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Your Password"
          className="bg-white"
          required
        />
      </div>
      
      
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? 'Logging In...' : 'Log In'}
      </Button>
    </form>
  );
};

export default LoginForm;
