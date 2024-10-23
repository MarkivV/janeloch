"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, PaperclipIcon, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MAX_FILE_SIZE = 5_000_000; // 5mb

const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  plan: z.string().min(1).max(255),
  message: z.string(),
  file: z.any().refine((file) => {
    if (!file) return true;
    return file?.[0]?.size <= MAX_FILE_SIZE;
  }, `Max image size is 5MB.`),
});

export type FormSchema = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      plan: "Professional Plan",
      message: "",
      file: null,
    },
  });

  const { toast } = useToast();

  async function onSubmit(values: FormSchema) {
    toast({
      title: "Loading...",
    });

    const files = [];
    if (values.file) {
      files.push({
        filename: values.file?.[0]?.name,
        content: Buffer.from(await values.file?.[0].arrayBuffer()).toString(
          "base64"
        ),
        contentType: values.file?.[0]?.type,
      });
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        ...values,
        attachments: files,
      }),
    });
    if (res.ok) {
      form.reset();
      toast({
        title: "Message sent successfully.",
        description: "We will get back to you soon.",
      });
    } else {
      form.setError("email", {
        message: "An error occurred while sending the message.",
      });
    }
  }

  const file = form.getValues("file")?.[0];

  return (
    <section id="contact" className="container scroll-mt-12 py-12 sm:py-16">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Connect With Us</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Have questions or ready to start your project? Reach out to us!
          </p>

          <div className="flex flex-col gap-4">
            {/* <div>
              <div className="flex gap-2 mb-1">
                <Building2 />
                <div className="font-bold">Find us</div>
              </div>

              <div>742 Evergreen Terrace, Springfield, IL 62704</div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Phone />
                <div className="font-bold">Call us</div>
              </div>

              <div>+1 (619) 123-4567</div>
            </div> */}

            <div>
              <div className="flex gap-2 mb-1">
                <Mail />
                <div className="font-bold">Mail US</div>
              </div>

              <div>support@seventons.com</div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-8">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="mail@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plan</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Basic Plan">
                              Basic Plan
                            </SelectItem>
                            <SelectItem value="Professional Plan">
                              Professional Plan
                            </SelectItem>
                            <SelectItem value="Enterprise Plan">
                              Enterprise Plan
                            </SelectItem>
                            <SelectItem value="-">-</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Your message..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-4">
                    {form.getValues("file") === null ? (
                      <label
                        htmlFor="file"
                        className="px-4 cursor-pointer w-fit flex gap-2 py-2 hover:bg-white hover:bg-opacity-10 transition-colors rounded-lg"
                      >
                        <PaperclipIcon className="w-6 h-6" />
                        Attach file
                      </label>
                    ) : (
                      <div
                        onClick={() => {
                          form.reset({ file: null });
                        }}
                        className="px-4 cursor-pointer w-fit flex gap-2 py-2 hover:bg-white hover:bg-opacity-10 transition-colors rounded-lg"
                      >
                        <X className="w-6 h-6" />
                        Remove file
                      </div>
                    )}
                    {!file?.name && (
                      <input
                        id="file"
                        type="file"
                        {...form.register("file")}
                        hidden
                      />
                    )}
                    {file && (
                      <span className="text-sm text-primary">{file.name}</span>
                    )}
                  </div>

                  {typeof form?.formState?.errors?.file?.message ===
                    "string" && (
                    <div className="text-red-500 text-sm">
                      {form?.formState?.errors?.file?.message}
                    </div>
                  )}
                </div>

                <Button disabled={form.formState.isSubmitting} className="mt-2">
                  Send message
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
