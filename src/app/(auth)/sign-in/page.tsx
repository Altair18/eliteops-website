"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signUpImage from "../../../../public/cta-background.png";
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
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import axios from "axios";
import { toast } from "sonner";
import useAxiosErrorHandler from "@/hooks/axiosHandler";
import { GoogleLogin, CredentialResponse } from '@react-oauth/google'

const formSchema = z.object({
    email: z.string().email("Invalid email address").trim(),
    password: z
        .string()
        .min(1, "Password is required") // At least require a password
        .trim(),
});

type SignInValue = z.infer<typeof formSchema>;

const SignUp: React.FC<SignInValue> = () => {
    const { user, refreshUser} = useAuth();
    const router = useRouter();
    const { handleError } = useAxiosErrorHandler();
    const [isGoogleLoading, setIsGoogleLoading] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

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
                refreshUser();  // Call the login function after successful login
            }
        } catch (error) {
            //handle Errors
            handleError(error);

        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSuccess = async (credentialResponse: CredentialResponse) => {
        if (!mounted) return; // Prevent state updates on unmounted component

        try {
            setIsGoogleLoading(true);

            const result = await axios.post(
                `/api/google`,
                {
                    token: credentialResponse.credential,
                },
                { withCredentials: true }
            );

            if (result.status === 201 || result.status === 200) {
                toast.success("Login Successful!");
                refreshUser();
                router.push('/');
                return;
            }

            toast.error(result.data.message);
        } catch (error) {
            console.log(error);
            toast.error("Google sign-in failed.");
        } finally {
            if (mounted) {
                setIsGoogleLoading(false);
            }
        }
    };

    const handleGoogleError = () => {
        // Silently handle One Tap cancellations - don't show error toast
        console.log("Google One Tap was dismissed or failed");
        if (mounted) {
            setIsGoogleLoading(false);
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="w-full max-w-xl rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-6 text-white shadow-2xl">
                        <p className="text-lg font-semibold text-center leading-relaxed">
                            Fivra is the best product experience I&apos;ve had in years. Not just tech — taste. From docs to latency to the URL structure that makes you think oh, that&apos;s obvious. Feels like every other platform should study how they built it. <span className="text-white/90">@fivra</span> I love you
                        </p>
                        <div className="mt-4 flex items-center justify-center gap-3">
                            <Image src="/github-pic.png" alt="yatsiv_yuriy" className="h-8 w-8 rounded-full" width={32} height={32} />
                            <div className="text-sm leading-tight">
                                <p className="font-medium">yatsiv_yuriy</p>
                                <p className="text-white/70">@fivra</p>
                            </div>
                        </div>
                    </div>
                </div>
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
                                    <Button disabled={loading || isGoogleLoading} type="submit" variant={loading ? "secondary" : "default"} className="text-md">
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
                        {mounted && (
                            <div className="w-full">
                                {isGoogleLoading || loading ? (
                                    <Button type="button" disabled className="w-full">
                                        {"Logging in..."}
                                    </Button>
                                ) : (
                                    <GoogleLogin
                                        onSuccess={handleGoogleSuccess}
                                        onError={handleGoogleError}
                                        useOneTap={false}
                                        size="large"
                                        text="signin_with"
                                        shape="rectangular"
                                        logo_alignment="left"
                                        cancel_on_tap_outside={false}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
