"use client";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string().min(1, {
    message: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

// Service options
const SERVICE_OPTIONS = [
  { value: "image-editing", label: "Image Editing" },
  { value: "video-editing", label: "Video Editing" },
  { value: "web-development", label: "Web Development" },
  { value: "3d-rendering", label: "3D Rendering & Animation" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setResponseMessage("");
    setIsSuccess(false);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
     
      if (result.success) {
        setIsSuccess(true);
        setResponseMessage("Your message has been sent successfully! We'll get back to you soon.");
        form.reset();
       
        // Clear both success state and message after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setResponseMessage(""); // Clear the message as well
        }, 3000);
       
        toast.success("Message Sent Successfully!");
      } else {
        setResponseMessage(result.error || "Something went wrong. Please try again.");
        toast.error("Failed to send message");
      }
    } catch (err) {
      setResponseMessage("Network error. Please check your connection and try again.");
      toast.error("Network error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Button text and icon based on state
  const getButtonContent = () => {
    if (isSubmitting) {
      return {
        text: "SENDING...",
        icon: Loader2,
        className: "bg-blue-600 cursor-not-allowed"
      };
    }
    if (isSuccess) {
      return {
        text: "MESSAGE SENT!",
        icon: CheckCircle2,
        className: "bg-green-600 cursor-default"
      };
    }
    return {
      text: "SEND MESSAGE",
      icon: Send,
      className: "bg-blue-600 hover:bg-blue-700"
    };
  };

  const buttonContent = getButtonContent();
  
  return (
    <div className="pt-5 pb-10 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-0 rounded-2xl overflow-hidden">
          <CardHeader className="text-center space-y-2 bg-gradient-to-r from-blue-500/10 to-blue-600/10 dark:from-blue-500/20 dark:to-blue-600/20 border-b py-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                Let&apos;s Create Something Amazing
              </CardTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardDescription className="text-base md:text-lg">
                Tell us about your project and we&apos;ll bring your vision to life!
              </CardDescription>
            </motion.div>
          </CardHeader>
          <CardContent className="p-6 md:p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {/* Left Column */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            Full Name *
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            Email Address *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                  {/* Right Column */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            Phone Number *
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              {...field}
                              className="focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            Service Needed *
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICE_OPTIONS.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                </div>
                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">
                          Project Details *
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project requirements, timeline, and any specific details we should know..."
                            {...field}
                            className="h-[120px] resize-none overflow-auto focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>
                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center pt-4"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`flex items-center justify-center space-x-2 px-8 py-3 text-white font-semibold rounded-lg transition-all duration-300 ${buttonContent.className} min-w-[200px]`}
                    whileHover={!isSubmitting && !isSuccess ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={buttonContent.text}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center space-x-2"
                      >
                        {buttonContent.icon && (
                          <motion.div
                            animate={
                              isSubmitting ? { rotate: 360 } : { rotate: 0 }
                            }
                            transition={
                              isSubmitting
                                ? { duration: 1, repeat: Infinity, ease: "linear" }
                                : { duration: 0.3 }
                            }
                          >
                            <buttonContent.icon className="h-4 w-4" />
                          </motion.div>
                        )}
                        <span>{buttonContent.text}</span>
                      </motion.div>
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
                {/* Response Message */}
                <AnimatePresence>
                  {responseMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Alert
                        variant={
                          isSuccess
                            ? "default"
                            : "destructive"
                        }
                        className={
                          isSuccess
                            ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700"
                            : ""
                        }
                      >
                        {isSuccess ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <XCircle className="h-4 w-4" />
                        )}
                        <AlertDescription className="font-medium">
                          {responseMessage}
                        </AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}