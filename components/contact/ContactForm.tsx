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
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import AnimatedButton from "../shared/AnimatedButton";

// Send Icon Component
const SendIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

// Zod validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().optional(),
  referral: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      referral: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setResponseMessage("");
    console.log(data);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage("Your message has been sent successfully!");
        form.reset();
        toast.success("Your Message is Sent!");
      } else {
        toast.error("Something went wrong...");
        setResponseMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      if (err) toast.info("Failed to send the message...");
      setResponseMessage("Failed to send the message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-5 pb-10 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-0 rounded-t-2xl">
          <CardHeader className="text-center space-y-2 bg-gradient-to-r from-teal-400/10 to-cyan-600/10 dark:from-teal-400/20 dark:to-cyan-600/20 border-b py-5 rounded-t-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-600 bg-clip-text text-transparent pt-5 pb-1">
                Let&apos;s Create Something Amazing
              </CardTitle>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardDescription className="text-base">
                Tell us about your priorities!
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="p-6 md:p-8 min-w-[45vw]">
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
                            Name{" "}
                            <span className="text-cyan-600 dark:text-cyan-400">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
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
                            Email{" "}
                            <span className="text-cyan-600 dark:text-cyan-400">
                              *
                            </span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
                            />
                          </FormControl>
                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+1 (555) 123-4567"
                              {...field}
                              className="focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
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
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            Approximate Budget
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder=" Budget Range (Optional)"
                              {...field}
                              className="focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
                            />
                          </FormControl>

                          <FormMessage className="text-xs" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="referral"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">
                            How Did You Hear About Us?
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Social media, referral, etc. (Optional)"
                              {...field}
                              className="focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
                            />
                          </FormControl>
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
                          Your Message{" "}
                          <span className="text-cyan-600 dark:text-cyan-400">
                            *
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us more about your event vision, special requirements, or any questions you have..."
                            rows={5}
                            {...field}
                            className="min-h-[110px] focus-visible:ring-cyan-500 dark:focus-visible:ring-cyan-400"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </motion.div>

                {/* Submit Button - Centered and Smaller */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex justify-center"
                >
                  <AnimatedButton
                    text={isSubmitting ? "SENDING..." : "Send Message"}
                    icon={SendIcon}
                    variant="form"
                    delay={0}
                    disabled={isSubmitting}
                    type="submit"
                    fullWidth={false}
                    className="w-auto px-8 py-2.5 text-sm font-medium"
                  />
                </motion.div>

                {/* Response Message */}
                {responseMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert
                      variant={
                        responseMessage.includes("successfully")
                          ? "default"
                          : "destructive"
                      }
                      className={
                        responseMessage.includes("successfully")
                          ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700"
                          : ""
                      }
                    >
                      {responseMessage.includes("successfully") ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <XCircle className="h-4 w-4" />
                      )}
                      <AlertDescription className="font-semibold">
                        {responseMessage}
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}