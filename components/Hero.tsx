"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import TypeWriter from "./type-writer";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  name: z.string().min(3),
  number: z.string().min(5).max(12),
  message: z.string().min(1),
});

export default function Hero() {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      number: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    setLoading(true);
    let data = {
      ...values,
    };
    fetch("/API/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (res) => {
        setLoading(false);
        const response = await res.json();
        if (!response.error) {
          toast({ title: "Message succesfully sent!" });
        } else {
          toast({ title: "Something went wrong" });
        }
      })
      .catch((e) => {
        setLoading(false);
        toast({ title: "Something went wrong" });
      });
    console.log(values);
  }

  return (
    <div className="min-h-[60hv] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between">
      <div className="space-y-10 flex flex-col w-full">
        <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal lg:text-left font-bold flex">
          Hello there
          <span className="animate-wave">👋</span>
        </h1>
        <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal lg:text-left font-bold flex">
          <TypeWriter />
        </h1>

        <p>
          I&apos;m a passionate software developer from Poland. I mostly focus
          on building fullstack web applications using various modern
          technologies. I do my best to pay attention to every small detail so
          that my products are complementary and meet all the expectations.
        </p>

        <div className="flex mx-auto gap-10 items-center">
          <Button className="rounded-full font-semibold hover:bg-foreground hover:-rotate-12 transform transition-all duration-400">
            <a href="MateuszMartyna.pdf" download="MateuszMartyna.pdf">
              Resume
            </a>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full font-semibold hover:bg-foreground hover:-rotate-12 transform transition-all duration-400">
                Contact
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90%] md:w-full rounded-lg">
              <DialogHeader>
                <DialogTitle className="mb-2">Leave me a message</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 md:grid-cols-8 gap-x-4 items-center space-y-0">
                        <FormLabel className="col-span-1">Email</FormLabel>
                        <FormControl>
                          <Input
                            className="col-span-3 md:col-span-7"
                            placeholder="pedroduarte@gmail.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-4 col-span-1">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="grid grid-cols-4 items-center gap-x-4">
                            <FormLabel className="col-span-1">Name</FormLabel>
                            <FormControl>
                              <Input
                                className="col-span-3"
                                placeholder="Pedro Duarte"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-4 col-span-1">
                      <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                          <FormItem className="grid grid-cols-4 items-center gap-x-4">
                            <FormLabel className="col-span-1">Number</FormLabel>
                            <FormControl>
                              <Input
                                className="col-span-3"
                                placeholder="555666777"
                                type="tel"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid col-span-1 gap-4">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem className="grid grid-cols-8 gap-4 items-center space-y-0">
                          <FormLabel className="col-span-1">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              required
                              placeholder="Let's connect"
                              className="col-span-6 col-start-3 md:col-span-7"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <DialogClose asChild>
                    <Button
                      type="submit"
                      className="text-foreground rounded-full w-full"
                      disabled={loading}
                    >
                      Send
                      {loading && (
                        <div className="text-center ml-5 w-6 h-6 border-t-2 border-foreground border-solid rounded-full animate-spin"></div>
                      )}
                    </Button>
                  </DialogClose>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <Image
        alt="Avatar image"
        src="/avatar.png"
        width="500"
        height="600"
        className="sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] hover:animate-wave"
      />
    </div>
  );
}
