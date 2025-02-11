/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Formik, Form, Field } from "formik";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { Checkbox } from "@/components/ui/checkbox";
import type {
  LoginData,
  FormErrors,
  FormTouched,
  AuthSubmitHandler,
  SignInResult,
} from "@/types/auth";
import { LoginSchema } from "@/validations/auth.validation";
import { Label } from "@/components/ui/label";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit: AuthSubmitHandler<LoginData> = async (
    values,
    { setSubmitting }
  ) => {
    try {
      const result = (await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      })) as SignInResult;

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Logged in successfully");
        router.push("/");
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again.", error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <Card className='w-full border-none md:border max-w-md bg-white'>
        <CardHeader className='space-y-1 text-center'>
          <CardTitle className='text-3xl font-bold'>Welcome back</CardTitle>
          <CardDescription className=''>
            Login to access your account and start your journey
          </CardDescription>
        </CardHeader>
        <Formik<LoginData>
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({
            errors,
            touched,
            isSubmitting,
          }: {
            errors: FormErrors;
            touched: FormTouched;
            isSubmitting: boolean;
          }) => (
            <Form>
              <CardContent className='space-y-4'>
                <div className='space-y-6'>
                  <div>
                    <Label htmlFor='email'>Email</Label>
                    <Field name='email'>
                      {({ field }: { field: any }) => (
                        <Input
                          {...field}
                          type='email'
                          placeholder='name@example.com'
                        />
                      )}
                    </Field>
                    {errors.email && touched.email && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor='password'>Password</Label>
                    <Field name='password'>
                      {({ field }: { field: any }) => (
                        <Input
                          {...field}
                          type='password'
                          placeholder='Enter your password'
                        />
                      )}
                    </Field>
                    {errors.password && touched.password && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                    <div className='flex items-center space-x-2'>
                      <Field name='rememberMe'>
                        {({ field, form }: { field: any; form: any }) => (
                          <Checkbox
                            id='rememberMe'
                            checked={field.value}
                            onCheckedChange={(checked) =>
                              form.setFieldValue("rememberMe", checked)
                            }
                            className='h-4 w-4 rounded border-gray-300'
                          />
                        )}
                      </Field>
                      <label htmlFor='rememberMe' className='text-sm'>
                        Keep me Logged in
                      </label>
                    </div>
                    <Link
                      href='/forgot-password'
                      className='text-blue-600 hover:underline'
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
              </CardContent>
              <CardFooter className='flex flex-col space-y-4'>
                <Button
                  type='submit'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </Button>
                <div className='text-sm text-center text-gray-600 pb-4'>
                  Don&apos;t have an account yet?{" "}
                  <Link
                    href='/register'
                    className='text-blue-600 hover:underline'
                  >
                    Sign up
                  </Link>
                </div>
                <div className='space-y-8 text-black w-full '>
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center '>
                      <span className='w-full border-t border-gray-300' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                      <span className='bg-white px-2 text-gray-500'>
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className='w-full flex items-center justify-center'>
                    <Button variant='outline' className='w-[50%] '>
                      <FcGoogle className='mr-2 h-4 w-4' />
                      Google
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default LoginPage;
