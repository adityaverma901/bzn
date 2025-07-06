"use client";

import { loginUser } from "@/actions/auth/";
import { IoEye, IoEyeOff } from "react-icons/io5";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

function LoginForm({ api }: any) {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    setError(undefined);
    setSuccess(undefined);

    startTransition(() => {
      loginUser(data)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data?.success);
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        });
    });
  }

  return (
    <div className="min-h-screen w-full bg-secondary flex">
      <div className="flex w-full">
        {/* Left Image Section - Hidden on mobile */}
        <div className="hidden lg:flex lg:w-1/2 pl-10 items-center justify-center bg-secondary">
          <div className="text-center">
            {/* Placeholder for image */}
            
            <div className="w-[500px] h-[500px] pl-6 rounded-lg"><img src="/login-img.png" alt="" /></div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center bg-secondary ">
          <div className="w-full max-w-md ">
            {/* Mobile Logo - Only visible on mobile */}
            <div className="lg:hidden text-center mb-8">
              {/* Placeholder for logo */}
              <div className="w-[60px] h-[60px] bg-gray-200 rounded-lg mx-auto mb-2"></div>
              <span className="text-2xl font-bold text-secondary">S|क</span>
            </div>

            {/* Form Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-gilda lg:text-3xl font-semibold text-gray-900">
                Sign In
              </h1>
              <p className="text-gray-600 mt-2">
                Please enter your credentials
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <label className="block text-sm font-montserrat font-medium  mb-2">
                        Email Address
                      </label>
                      <FormControl>
                        <input
                          {...field}
                          type="email"
                          placeholder="Enter your email"
                          className="w-96 p-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pr-10"
                          disabled={isPending}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <label className="block text-sm font-montserrat font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <FormControl>
                          <input
                            {...field}
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent pr-10"
                            disabled={isPending}
                          />
                        </FormControl>
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          disabled={isPending}
                        >
                          {showPassword ? <IoEyeOff size={18} /> : <IoEye size={18} />}
                        </button>
                      </div>
                      <FormMessage className="text-red-500 text-xs mt-1" />
                    </FormItem>
                  )}
                />

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-secondary focus:ring-secondary border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 text-sm font-montserrat text-gray-600 cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>

                  <Link
                    href="/forgot-password"
                    className="text-sm text-secondary font-montserrat hover:text-secondary/80"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full py-3 bg-[#563612] font-gilda hover:bg-[#3e280e] text-white font-medium font-montserrat rounded-lg hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isPending ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </form>
            </Form>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <span className="text-gray-600 font-montserrat">Don't have an account? </span>
              <Link
                href="/auth/register"
                className="font-medium hover:text-secondary/80"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;