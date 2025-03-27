
import { useState } from "react";
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, Twitter 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import emailjs from "emailjs-com";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   // Simulate form submission
  //   setTimeout(() => {
  //     toast.success("Message sent successfully! I'll get back to you soon.");
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //     setIsSubmitting(false);
  //   }, 1500);
  // };
 

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_vflmbb6",   // Replace with your actual EmailJS Service ID
      "template_j1vhhvn",  // Replace with your actual EmailJS Template ID
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      "_HmEjuHt1-RpCXvx_"    // Replace with your actual EmailJS Public Key
    );

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  } catch (error) {
    console.error("Email sending error:", error);
    toast.error("Failed to send message. Please try again.");
  }
  
  setIsSubmitting(false);
};



  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <ContactInfoItem 
                  icon={<Mail className="h-5 w-5 text-primary" />}
                  title="Email"
                  content="231980079@gift.edu.pk"
                  href="mailto:231980079@gift.edu.pk"
                />
                
                <ContactInfoItem 
                  icon={<Phone className="h-5 w-5 text-primary" />}
                  title="Phone"
                  content="+92 3266235229"
                  href="tel:+92 3266235229"
                />
                
                <ContactInfoItem 
                  icon={<MapPin className="h-5 w-5 text-primary" />}
                  title="Location"
                  content="Gujranwala City of Punjab, Pakistan"
                  href="#"
                />
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ali jan"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Your Email</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ali@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here . . . . . . . ."
                        rows={6}
                        required
                      />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        "Sending Message to Shawaiz Mehboob..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108888.56824302194!2d74.12399625284472!3d32.161963153112166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1d83e9d95fc1%3A0x9e194755a6bb5edc!2sGujranwala%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1711489876543" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}

const ContactInfoItem = ({ icon, title, content, href }: ContactInfoItemProps) => {
  return (
    <div className="flex">
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <a href={href} className="text-muted-foreground hover:text-primary transition-colors">
          {content}
        </a>
      </div>
    </div>
  );
};

export default Contact;
