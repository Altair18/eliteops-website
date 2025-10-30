"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signUpImage from "@/app/img/signup.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage
} from "@/components/ui/form";
import React from "react";
import { useAuth } from "@/context/authContext";
import axios from "axios";
import { toast } from "sonner";
import useAxiosErrorHandler from "@/hooks/axiosHandler";

const formSchema = z.object({
    email: z.string().email("Invalid email address").trim(),
    password: z
        .string()
        .min(1, "Password is required") // At least require a password
        .trim(),
});

type SignInValue = z.infer<typeof formSchema>;

const SignUp: React.FC<SignInValue> = () => {
    const { login, user } = useAuth();
    const router = useRouter();
    const {handleError} = useAxiosErrorHandler();
    
    React.useEffect(() => {
        if (user !== null) {
            router.push('/');
        }
    }, [user, router]);

    const form = useForm<SignInValue>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const [loading, setLoading] = React.useState(false);

    const onSubmit: SubmitHandler<SignInValue> = async (values: SignInValue) => {
        try {
            setLoading(true);
            const result = await axios.post(`/api/Auth/signin`, values, { withCredentials: true });
            if (result.status === 200) {
                toast.success(result.data.message);
                login();  // Call the login function after successful login
            }
        } catch (error) {
            //handle Errors
            handleError(error);
            
        } finally {
            setLoading(false);
        }
    };

    // Conditionally render the sign-in form only if the user is not logged in
    if (user !== null) {
        return null;  // Or a loading spinner can be returned
    }

    return (
        <div className="h-screen w-full grid grid-cols-10 justify-center items-center">
            <div className="hidden lg:block lg:col-span-5 h-full bg-black relative">
                <Image className="object-cover h-screen w-full object-top" alt="imageSignIn" src={signUpImage} />
                <div className="absolute top-5 left-5">Fivra</div>
            </div>
            <div className="relative col-span-10 lg:col-span-5 flex flex-col h-full w-full justify-center items-center">
                <Button variant={"ghost"} className="absolute top-3 right-3" onClick={() => { router.push('/sign-up') }}> Register</Button>
                <div className="sm:w-[350px] flex flex-col items-center justify-center space-y-4">
                    <div className="w-full text-center space-y-1">
                        <p className="text-3xl font-medium">Welcome Back</p>
                        <p className="text-sm text-muted-foreground">Enter your details below to log into your account</p>
                    </div>
                    <div className="w-full">
                        <Form {...form}>
                            <form className="w-full" onSubmit={(e) => form.handleSubmit(onSubmit)(e)}>
                                <div className="flex flex-col w-full space-y-2">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className="w-full"
                                                        placeholder="Enter your Email"
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
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
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
                    <div className="relative w-full text-xs flex items-center">
                        <div className="flex-grow bg-muted-foreground h-[0.5px]"></div>
                        <span className="px-2 text-muted-foreground uppercase">Or continue with</span>
                        <div className="flex-grow bg-muted-foreground h-[0.5px]"></div>
                    </div>
                    <div className="w-full">
                        <Button variant="outline" className="w-full space-x-2 text-md">
                            <img width="25" height="25" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                            Google
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
