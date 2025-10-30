"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import signInImage from "../../../../public/cta-background.png";
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
				<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="relative w-full max-w-2xl h-[320px]">
						{/* Card 1 */}
						<div className="absolute left-1/2 -translate-x-1/2 top-4 w-[85%] rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white shadow-2xl rotate-[-2deg]">
							<p className="text-base font-semibold text-center leading-relaxed">
								"Getting started with Fivra took minutes. Clean onboarding, smart defaults, and it just works. <span className="text-white/90">@fivra</span> makes setup feel effortless."
							</p>
							<div className="mt-3 flex items-center justify-center gap-3 text-sm">
								<img src="/github-pic.png" alt="sarah_ops" className="h-7 w-7 rounded-full" />
								<div className="leading-tight">
									<p className="font-medium">sarah_ops</p>
									<p className="text-white/70">@sarah_ops</p>
								</div>
							</div>
						</div>

						{/* Card 2 (overlapping) */}
						<div className="absolute left-1/2 -translate-x-1/2 top-20 w-[78%] rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white shadow-2xl rotate-[3deg]">
							<p className="text-sm font-medium text-center leading-relaxed">
								"Automations connected to Slack and Notion on day one. Zero glue code. Our team moves twice as fast."
							</p>
							<div className="mt-3 flex items-center justify-center gap-3 text-xs">
								<img src="/github-pic.png" alt="dev_anto" className="h-6 w-6 rounded-full" />
								<div className="leading-tight">
									<p className="font-medium">dev_anto</p>
									<p className="text-white/70">@dev_anto</p>
								</div>
							</div>
						</div>

						{/* Card 3 (topmost) */}
						<div className="absolute left-1/2 -translate-x-1/2 top-36 w-[72%] rounded-xl border border-white/15 bg-white/10 backdrop-blur-md p-5 text-white shadow-2xl rotate-[-1deg]">
							<p className="text-sm font-medium text-center leading-relaxed">
								"The shared AI workspace keeps everyone aligned. Meetings are shorter, outcomes clearer. Big fan."
							</p>
							<div className="mt-3 flex items-center justify-center gap-3 text-xs">
								<img src="/github-pic.png" alt="maria_p" className="h-6 w-6 rounded-full" />
								<div className="leading-tight">
									<p className="font-medium">maria_p</p>
									<p className="text-white/70">@maria_p</p>
								</div>
							</div>
						</div>
					</div>
				</div>
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