"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signInImage from "@/app/img/signin.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import React from "react";
import { useAuth } from "@/context/authContext";
import axios from "axios";
import { toast } from "sonner";
import useAxiosErrorHandler from "@/hooks/axiosHandler";

const signUpForm = z.object({
    email: z.string().email("Invalid email address").trim(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be less than 100 characters")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
             "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .trim(),
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name must be less than 50 characters")
      .trim(),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name must be less than 50 characters")
      .trim(),
});



type signUpValue = z.infer<typeof signUpForm>
const SignIn = () => {
    const router = useRouter();
    const [loading, setLoading] = React.useState<boolean>(false);
    const { user } = useAuth();
    const {handleError} = useAxiosErrorHandler();
    const onSubmit: SubmitHandler<signUpValue> = async (values: signUpValue) => {
        try {
            const name = values.lastName+" "+values.firstName;
            const finalValue = {
                email: values.email,
                password: values.password,
                name: name
            }
            setLoading(true);
            const result = await axios.post(`/api/Auth/signup`, finalValue, { withCredentials: true });
            if (result.status === 200) {
                toast.success(result.data.message);
            }
            router.push("/sign-in");
        } catch (error) {
            //handle Errors
            handleError(error);
        } finally {
            setLoading(false);
        }
    };
    React.useEffect(() => {
        if (user !== null) {
            router.push('/');
        }
    }, [user, router]);

    if (user !== null) {
        return null;  // Or a loading spinner can be returned
    }
    const form = useForm<signUpValue>({
        resolver: zodResolver(signUpForm),
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        }
    })
    return (
        <div className="h-screen w-full grid grid-cols-10 justify-center items-center">
            <div className="hidden lg:block lg:col-span-5 h-full bg-black relative">
                <Image className="object-cover h-screen w-full object-top" alt="imageSignIn" src={signInImage}/>
                <div className="absolute top-5 left-5 text-white">Fivra</div>
            </div>
            <div className="relative col-span-10 lg:col-span-5 flex flex-col h-full w-full justify-center items-center">
                <Button variant={"ghost"} className="absolute top-3 right-3" onClick={()=>{router.push('/sign-in')}}> Login</Button>
                <div className="sm:w-[350px] flex flex-col items-center justify-center space-y-4">
                    <div className="w-full text-center space-y-1">
                        <p className="text-3xl font-medium">Create an Account</p>
                        <p className="text-sm text-muted-foreground">Enter your email below to create an account</p>
                    </div>
                    <div className="flex flex-col w-full space-y-2">
                    <div className="w-full">
                        <Form {...form}>
                            <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="flex flex-col w-full space-y-2">
                                <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>FirstName</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="w-full"
                                                        placeholder="Enter your FirstName"
                                                        type="text"
                                                        disabled={loading}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>LastName</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="w-full"
                                                        placeholder="Enter your LastName"
                                                        type="text"
                                                        disabled={loading}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="w-full"
                                                        placeholder="Enter your Email"
                                                        type="email"
                                                        disabled={loading}
                                                        {...field}
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
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="w-full"
                                                        placeholder="Enter your password"
                                                        type="password"
                                                        disabled={loading}
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" variant={loading ? "secondary" : "default"} className="text-md">
                                        Log in with Email
                                    </Button>
                                </div>
                            </form>
                        </Form>
                    </div>
                    </div>
                    <div className="relative w-full text-xs flex items-center">
                        <div className="flex-grow bg-muted-foreground h-[0.5px]"></div>
                        <span className="px-2 text-muted-foreground uppercase">Or continue with</span>
                        <div className="flex-grow bg-muted-foreground h-[0.5px]"></div>
                    </div>
                    <div className="w-full">
                        <Button variant="outline" className="w-full space-x-2 text-md"> 
                        <img width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                        Google 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;