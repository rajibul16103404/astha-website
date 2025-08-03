
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      projectType: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: ''
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="bg-white"
          required
        />
      </div>
      
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
        <Select value={formData.projectType} onValueChange={handleSelectChange}>
          <SelectTrigger className="bg-white text-secondary no-outline">
            <SelectValue placeholder="Project Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ai">AI Development</SelectItem>
            <SelectItem value="web">Web Development</SelectItem>
            <SelectItem value="mobile">Mobile App Development</SelectItem>
            <SelectItem value="blockchain">Blockchain Solutions</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
          className="bg-white min-h-[120px]"
          required
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
