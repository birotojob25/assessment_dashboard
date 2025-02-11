/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
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
  SignUpData,
  FormErrors,
  FormTouched,
  AuthSubmitHandler,
  SignInResult,
} from "@/types/auth";
import { SignupSchema } from "@/validations/auth.validation";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Register: React.FC = () => {
  const router = useRouter();

  const handleSubmit: AuthSubmitHandler<SignUpData> = async (
    values,
    { setSubmitting }
  ) => {
    try {
      // Here you would typically call your API to create a new user
      // For this example, we'll simulate a successful signup
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success("Account created successfully");

      // After successful signup, log the user in
      const result = (await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
      })) as SignInResult;

      if (result?.error) {
        toast.error(result.error);
      } else {
        router.push("/dashboard");
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again.", error);
    }
    setSubmitting(false);
  };

  return (
    <div className='min-h-screen'>
      <Card className='w-full  border-none md:border max-w-md bg-white'>
        <CardHeader className='space-y-1 text-center'>
          <CardTitle className='text-3xl font-bold'>
            Create an account
          </CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <Formik<SignUpData>
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            learningTrack: "",
            agreeTerms: false,
          }}
          validationSchema={SignupSchema}
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
                {/* <div className='space-y-2'>
                  <div className='grid grid-cols-2 gap-4'>
                    <Button variant='outline' className='w-full'>
                      <FcGoogle className='mr-2 h-4 w-4' />
                      Google
                    </Button>
                    <Button variant='outline' className='w-full'>
                      <BiLogoTwitter className='mr-2 h-4 w-4' />
                      Twitter
                    </Button>
                  </div>
                  <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                      <span className='w-full border-t' />
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                      <span className='bg-white px-2 text-gray-500'>
                        Or continue with
                      </span>
                    </div>
                  </div>
                </div> */}
                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <Label htmlFor='firstName'>First Name</Label>
                    <Field name='firstName'>
                      {({ field }: { field: any }) => (
                        <Input {...field} placeholder='First Name' />
                      )}
                    </Field>
                    {errors.firstName && touched.firstName && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div>
                    <Label htmlFor='lastName'>Last Name</Label>
                    <Field name='lastName'>
                      {({ field }: { field: any }) => (
                        <Input {...field} placeholder='Last Name' />
                      )}
                    </Field>
                    {errors.lastName && touched.lastName && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
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
                          placeholder='Create a password'
                        />
                      )}
                    </Field>
                    {errors.password && touched.password && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div>
                    <Label htmlFor='learningTrack'>Learning Track</Label>
                    <Field name='learningTrack'>
                      {({ field }: { field: any }) => (
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder='select a learning Track' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='data-analysis'>
                              Data Analysis
                            </SelectItem>
                            <SelectItem value='ui-ux'>UI/UX Design</SelectItem>
                            <SelectItem value='cyber-security'>
                              Cyber Security
                            </SelectItem>
                            <SelectItem value='software'>
                              Software Development
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    </Field>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className='text-red-500 text-xs mt-1'>
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Field name='agreeTerms'>
                      {({ field, form }: { field: any; form: any }) => (
                        <Checkbox
                          id='agreeTerms'
                          checked={field.value}
                          onCheckedChange={(checked) =>
                            form.setFieldValue("agreeTerms", checked)
                          }
                          className='h-4 w-4 rounded border-gray-300'
                        />
                      )}
                    </Field>
                    <label
                      htmlFor='agreeTerms'
                      className='text-sm text-gray-600'
                    >
                      I agree to the{" "}
                      <Link
                        href='/terms'
                        className='text-blue-600 hover:underline'
                      >
                        Terms of Use
                      </Link>{" "}
                      and{" "}
                      <Link
                        href='/privacy'
                        className='text-blue-600 hover:underline'
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  {errors.agreeTerms && touched.agreeTerms && (
                    <div className='text-red-500 text-xs mt-1'>
                      {errors.agreeTerms}
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className='flex flex-col space-y-4'>
                <Button
                  type='submit'
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                </Button>
                <div className='text-sm text-center text-gray-600'>
                  Already have an account?{" "}
                  <Link href='/login' className='text-blue-600 hover:underline'>
                    Sign in
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

export default Register;
