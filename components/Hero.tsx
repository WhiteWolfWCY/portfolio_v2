"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import TypeWriter from "./type-writer";
import { useState } from "react";
import { useToast } from "./ui/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
  name: z.string().min(3),
  number: z.string(),
  message: z.string(),
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
      message: ""
    },
  })

  return (
    <div className="min-h-[60hv] flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center justify-between">
      <div className="space-y-10 flex flex-col w-full">
        <h1 className="text-4xl lg:text-6xl text-center justify-center lg:justify-normal lg:text-left font-bold flex">
          Hello there
          <span className="animate-wave hidden lg:block">👋</span>
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
              <form className="space-y-4">
                <div className="grid col-span-1 gap-4">
                  <div className="grid grid-cols-8 items-center">
                    <Label htmlFor="name" className="col-span-1">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="pedroduarte@gmail.com"
                      type="email"
                      className="col-span-6 col-start-3 md:col-span-7"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-4 col-span-1">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="">
                        Name
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        placeholder="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 col-span-1">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="">
                        Number
                      </Label>
                      <Input
                        id="number"
                        type="tel"
                        placeholder="555666777"
                        required
                        className="col-span-3"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid col-span-1 gap-4">
                  <div className="grid grid-cols-8 gap-4 items-center">
                    <Label htmlFor="name" className="col-span-1 text-right">
                      Message
                    </Label>
                    <Textarea
                      required
                      placeholder="Let's connect"
                      className="col-span-6 col-start-3 md:col-span-7"
                    />
                  </div>
                </div>
              </form>

              <DialogFooter className="">
                <Button
                  type="submit"
                  className="text-foreground rounded-full w-full"
                  disabled={loading}
                >
                  Send
                  {loading && (
                    <div className="mb-3 text-center ml-5 w-6 h-6 border-t-2 border-primary border-solid rounded-full animate-spin"></div>
                  )}
                </Button>
              </DialogFooter>
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
