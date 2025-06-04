"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";
import { LoginUser } from "@/controller/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
  email: z.string().email("You email is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const queryClient = useQueryClient();

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof formSchema>) => {
      return await LoginUser(data);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data?.userDetails);
      toast.success(data.message);

      const params = new URLSearchParams(window.location.search);
      const rawRedirect = params.get("redirect") ?? "";
      const redirectUrl = rawRedirect.startsWith("/") ? rawRedirect : "/artist";

      router.push(redirectUrl);
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    mutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="py-5  text-black font-normal font-sans"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Password"
                    {...field}
                    className="py-5 pr-10 text-black font-normal font-sans"
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500"
                  >
                    {showPassword ? <PiEyeSlash /> : <PiEyeLight />}
                  </button>
                </div>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className=" text-end text-sm text-primary font-sans">
          <Link href="/forgotten-password">Forgotten password ?</Link>
        </div>
        <Button
          type="submit"
          className="w-full py-5 cursor-pointer font-sans"
          disabled={!form.formState.isValid}
          variant="default"
        >
          {mutation.isPending ? "Loading..." : "Login"}
        </Button>
        <div className="text-center text-sm text-secondary font-poppins">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-primary font-sans">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
}
