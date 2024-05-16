"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import TypeWriter from "@/components/ui/type-writer";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { Reveal } from "./ui/reveal";
import Stats from "./Stats";

const FormSchema = z.object({
  email: z
    .string()
    .min(6, { message: "You must provide your email." })
    .email("This is not a valid email."),
  name: z.string().min(3, { message: "You must provide your name" }),
  number: z
    .string()
    .min(5, { message: "Provide a valid number format" })
    .max(12, { message: "Provide a valid number format" }),
  message: z.string().min(1),
});

const strings = ["I'm Mateusz", "Nice to meet you!", "Have a good day!"];

export default function Hero() {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [explosion, setExplosion] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

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
          closeDialog();
          setExplosion(true);
          setTimeout(() => setExplosion(false), 2000);
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
    <>
      <div className="min-h-[60hv] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between">
        <div className="space-y-10 flex flex-col w-full justify-center items-center">
          <Reveal delay={0.2} x={-50}>
            <h1 className="text-4xl gap-4 lg:text-6xl text-center justify-center lg:justify-normal lg:text-left font-bold flex">
              Hello there
              <span className="animate-wave">👋</span>
            </h1>
          </Reveal>
          <Reveal delay={0.5} x={-50}>
            <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal lg:text-left font-bold flex">
              <TypeWriter strings={strings} />
            </h1>
          </Reveal>

          <Reveal delay={0.8} y={50}>
            <p className="text-center">
              I&apos;m a passionate software developer from Poland. I mostly
              focus on building fullstack web applications using various modern
              technologies. I do my best to pay attention to every small detail
              so that my products are complementary and meet all the
              expectations.
            </p>
          </Reveal>

          <div className="flex mx-auto gap-10 items-center">
            <Reveal delay={0.8} y={50}>
              <Button className="rounded-full font-semibold hover:bg-foreground hover:-rotate-12 transform transition-all duration-400">
                <a href="MateuszMartyna.pdf" download="MateuszMartyna.pdf">
                  Resume
                </a>
              </Button>
            </Reveal>
            <Dialog>
              <Reveal delay={0.8} y={50}>
                <DialogTrigger asChild>
                  <Button
                    onClick={openDialog}
                    className="rounded-full font-semibold hover:bg-foreground hover:-rotate-12 transform transition-all duration-400"
                  >
                    Contact
                  </Button>
                </DialogTrigger>
              </Reveal>
              {explosion && <Fireworks autorun={{ speed: 2 }} />}
              {dialogOpen && (
                <DialogContent className="w-[90%] md:w-full rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="mb-2">
                      Leave me a message
                    </DialogTitle>
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
                          <FormItem className="items-center gap-4">
                            <FormLabel className="">Email</FormLabel>
                            <FormControl>
                              <Input
                                className=""
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
                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem className="items-center">
                                <FormLabel className="">Name</FormLabel>
                                <FormControl>
                                  <Input
                                    className=""
                                    placeholder="Pedro Duarte"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="col-span-1">
                          <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                              <FormItem className="items-center">
                                <FormLabel className="">Number</FormLabel>
                                <FormControl>
                                  <Input
                                    className=""
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
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="gap-4 items-center">
                            <FormLabel className="">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                required
                                placeholder="Let's connect"
                                className=""
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="text-foreground rounded-full font-semibold w-full mt-24"
                        disabled={loading}
                      >
                        Send
                        {loading && (
                          <div className="text-center ml-5 w-6 h-6 border-t-2 border-foreground border-solid rounded-full animate-spin"></div>
                        )}
                      </Button>
                    </form>
                  </Form>
                </DialogContent>
              )}
            </Dialog>
          </div>
        </div>
        <Image
          alt="Avatar image"
          src="/avatar.png"
          width="500"
          height="600"
          className="h-80 w-80 md:h-96 md:w-96 lg:h-[500px] lg:w-[500px]"
        />
      </div>
      <Stats />
    </>
  );
}
