"use client";

import { FirstBentoAnimation } from "@/components/first-bento-animation";
import { FourthBentoAnimation } from "@/components/fourth-bento-animation";
import { SecondBentoAnimation } from "@/components/second-bento-animation";
import { ThirdBentoAnimation } from "@/components/third-bento-animation";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "p-1 py-0.5 font-medium dark:font-semibold text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
};

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Fivra",
  description:
    "AI-powered productivity and communication platform that transforms scattered ideas, notes, and conversations into clear, actionable results — instantly.",
  cta: "Get Started",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "AI Productivity Platform",
    "Team Communication",
    "Workflow Automation",
    "AI Assistant",
    "Project Management",
    "Task Automation",
    "Business Intelligence",
    "Smart Workspace",
  ],
  links: {
    email: "support@fivra.com",
    twitter: "https://twitter.com/fivra",
    discord: "https://discord.gg/fivra",
    github: "https://github.com/fivra",
    instagram: "https://instagram.com/fivra",
  },
  nav: {
    links: [
      { id: 1, name: "Home", href: "#hero" },
      { id: 2, name: "How it Works", href: "#bento" },
      { id: 3, name: "Features", href: "#features" },
      { id: 4, name: "Pricing", href: "#pricing" },
      { id: 5, name: "Blog", href: "/blog" },
      { id: 6, name: "Help", href: "/help" },
    ],
  },
  hero: {
    badgeIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="dark:fill-white fill-[#364153]"
      >
        <path d="M8 1C8.55228 1 9 1.44772 9 2V3H11C11.5523 3 12 3.44772 12 4V6H13C13.5523 6 14 6.44772 14 7V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V7C2 6.44772 2.44772 6 3 6H4V4C4 3.44772 4.44772 3 5 3H7V2C7 1.44772 7.44772 1 8 1ZM10 5H6V4H5V5H4V7H3V13H13V7H12V5H11V4H10V5ZM8 8C8.55228 8 9 8.44772 9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8Z" />
      </svg>
    ),
    badge: "AI-powered intelligent workspace",
    title: "Work Smarter, Not Harder",
    description:
      "Fivra transforms scattered ideas, notes, and conversations into clear, actionable results. Automate workflows, sync your team, and achieve more with less effort.",
    cta: {
      primary: {
        text: "Start Free",
        href: "/waitlist",
      },
      secondary: {
        text: "Watch Demo",
        href: "/demo",
      },
    },
  },
  companyShowcase: {
    companyLogos: [
      {
        id: 1,
        name: "Company 1",
        logo: (
          <svg
            width="110"
            height="31"
            viewBox="0 0 110 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M34.5469 14.5155C34.5469 19.4338 37.7054 22.8631 42.0822 22.8631C46.4591 22.8631 49.6176 19.4338 49.6176 14.5155C49.6176 9.59721 46.4591 6.16797 42.0822 6.16797C37.7054 6.16797 34.5469 9.59721 34.5469 14.5155ZM46.7298 14.5155C46.7298 18.035 44.8121 20.3137 42.0822 20.3137C39.3524 20.3137 37.4347 18.035 37.4347 14.5155C37.4347 10.996 39.3524 8.71736 42.0822 8.71736C44.8121 8.71736 46.7298 10.996 46.7298 14.5155Z" />
          </svg>
        ),
      },
      {
        id: 2,
        name: "Company 2",
        logo: (
          <svg
            width="113"
            height="25"
            viewBox="0 0 113 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M0.75 2.69908C0.75 1.48458 1.73458 0.5 2.94908 0.5H11.551C12.7655 0.5 13.75 1.48458 13.75 2.69908V4.4005C13.75 5.00775 13.2577 5.50004 12.6505 5.50004H1.84954C1.24229 5.50004 0.75 5.00775 0.75 4.4005V2.69908Z" />
          </svg>
        ),
      },
      {
        id: 3,
        name: "Company 3",
        logo: (
          <svg
            width="73"
            height="31"
            viewBox="0 0 73 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M72.2313 15.5944C72.2313 10.4676 69.7478 6.4222 65.0013 6.4222C60.2348 6.4222 57.3508 10.4676 57.3508 15.5543C57.3508 21.5824 60.7558 24.6264 65.6423 24.6264C68.0253 24.6264 69.8278 24.0857 71.1898 23.3247V19.3194C69.8278 20.0003 68.2658 20.4209 66.2833 20.4209C64.3403 20.4209 62.6183 19.74 62.3978 17.3768H72.1913C72.1913 17.1165 72.2313 16.0751 72.2313 15.5944Z"
            />
          </svg>
        ),
      },
      {
        id: 4,
        name: "Company 4",
        logo: (
          <svg
            width="96"
            height="23"
            viewBox="0 0 96 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M53.6896 0.965339H59.5709L56.6122 22.0721H50.7313L53.6896 0.965339Z" />
          </svg>
        ),
      },
      {
        id: 5,
        name: "Company 5",
        logo: (
          <svg
            width="99"
            height="31"
            viewBox="0 0 99 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M38.0781 26.5517V4.44531H42.0332V26.5517H38.0781Z" />
          </svg>
        ),
      },
      {
        id: 6,
        name: "Company 6",
        logo: (
          <svg
            width="132"
            height="21"
            viewBox="0 0 132 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M62.1915 1.56344L62.1641 1.56944C61.1444 1.79968 60.627 2.14298 60.627 3.3812H60.6224L60.627 18.2354C60.714 19.2134 61.2396 19.5153 62.1641 19.7239L62.1915 19.7302V19.9404H55.0749V19.7302L55.1023 19.7239C56.0258 19.5153 56.5392 19.2134 56.6262 18.2354V3.78459L49.767 19.907H49.3889L42.7236 4.22197V17.8774C42.7236 19.1156 43.2415 19.4589 44.2617 19.6892L44.2886 19.6952V19.907H40.2031V19.6945L40.2299 19.6884C41.25 19.4583 41.7701 19.1149 41.7701 17.8767V3.3812C41.7701 2.14298 41.2521 1.79968 40.2319 1.56944L40.2051 1.56344V1.35156H46.2267L51.415 13.5466L56.6038 1.35156H62.1915V1.56344Z" />
          </svg>
        ),
      },
      {
        id: 7,
        name: "Company 7",
        logo: (
          <svg
            width="134"
            height="31"
            viewBox="0 0 134 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path d="M53.9534 12.179C53.8381 12.2504 53.7006 12.2758 53.5672 12.2501C53.4343 12.2243 53.3155 12.1494 53.2353 12.0401C52.8379 11.4719 52.3053 11.0113 51.6861 10.6998C51.0663 10.3882 50.3791 10.2355 49.6856 10.2552C46.9763 10.2552 45.3095 12.3991 45.3095 15.4608C45.3095 18.5225 47.0033 20.707 49.7131 20.707C50.4172 20.7231 51.1137 20.5597 51.737 20.232C52.3603 19.9043 52.89 19.4232 53.2763 18.8341C53.3535 18.723 53.47 18.645 53.6023 18.6155C53.7345 18.586 53.8733 18.6072 53.9909 18.6749L55.2744 19.4199C55.34 19.4582 55.3973 19.5096 55.4418 19.5711C55.4863 19.6326 55.5179 19.7028 55.5337 19.7771C55.5495 19.8514 55.5501 19.9282 55.5343 20.0026C55.5191 20.077 55.488 20.1473 55.4436 20.2091C54.8144 21.1522 53.9564 21.9201 52.9491 22.4407C51.9418 22.9614 50.8193 23.2179 49.6856 23.1861C45.3738 23.1861 42.4375 20.0432 42.4375 15.4608C42.4375 10.8784 45.3738 7.77607 49.6417 7.77607C50.7561 7.74511 51.8611 7.98763 52.8601 8.4824C53.8592 8.97716 54.7219 9.70913 55.3727 10.6142C55.4172 10.6749 55.4488 10.7441 55.4658 10.8176C55.4822 10.8911 55.4839 10.9672 55.4699 11.0413C55.4558 11.1153 55.4266 11.1856 55.3844 11.2479C55.3423 11.3102 55.2873 11.3631 55.2235 11.4033L53.9534 12.179Z" />
          </svg>
        ),
      },
      {
        id: 8,
        name: "Company 8",
        logo: (
          <svg
            width="122"
            height="31"
            viewBox="0 0 122 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:fill-white fill-black"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.65498 5.4192C4.49517 5.59338 4.50576 5.86062 4.67364 6.02715L25.4235 26.6055C25.5914 26.772 25.8609 26.7825 26.0365 26.624C29.079 23.8784 30.9888 19.9197 30.9888 15.5187C30.9888 7.22841 24.2123 0.507812 15.8529 0.507812C11.4152 0.507812 7.42352 2.40182 4.65498 5.4192Z"
            />
          </svg>
        ),
      },
    ],
  },
  featureSection: {
    title: "Simple. Smart. Synchronized.",
    description:
      "Discover how Fivra transforms your workflow into streamlined productivity in four easy steps",
    items: [
      {
        id: 1,
        title: "Capture Everything",
        content:
          "Turn emails, notes, chats, and conversations into structured tasks and projects. AI automatically categorizes and prioritizes your information.",
        image:
          "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 2,
        title: "AI Organizes & Analyzes",
        content:
          "Our AI engine processes your workflows, identifying bottlenecks, patterns, and opportunities for optimization across your entire team.",
        image:
          "https://images.unsplash.com/photo-1686170287433-c95faf6d3608?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8fA%3D%3D",
      },
      {
        id: 3,
        title: "Automate Workflows",
        content:
          "Connect your favorite tools and automate repetitive tasks. Get intelligent insights and recommendations tailored to your workflow.",
        image:
          "https://images.unsplash.com/photo-1720378042271-60aff1e1c538?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        id: 4,
        title: "Achieve Team Goals",
        content:
          "Track progress, share insights, and stay aligned. Monitor performance with data-driven recommendations and optimize efficiency.",
        image:
          "https://images.unsplash.com/photo-1666882990322-e7f3b8df4f75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      },
    ],
  },
  bentoSection: {
    title: "Empower Your Team with AI",
    description:
      "Experience AI-powered workflow automation, intelligent task management, and real-time team collaboration to optimize your productivity.",
    items: [
      {
        id: 1,
        content: <FirstBentoAnimation />,
        title: "Real-time Collaboration",
        description:
          "Keep your entire team in sync across projects and tools. Share insights, assign actions, and monitor progress — all in one place.",
      },
      {
        id: 2,
        content: <SecondBentoAnimation />,
        title: "Seamless Tool Integration",
        description:
          "Connect all your favorite tools securely. Unified dashboard for CRM, Notion, Slack, Google Workspace, and more.",
      },
      {
        id: 3,
        content: (
          <ThirdBentoAnimation
            data={[1200, 1800, 1500, 2200, 2800, 3100, 3500]}
            toolTipValues={[
              1200, 1800, 1500, 2200, 2800, 3100, 3500, 4000, 4500, 5000,
            ]}
          />
        ),
        title: "Productivity Analytics",
        description:
          "Get intelligent insights on team productivity, communication patterns, and performance with actionable recommendations.",
      },
      {
        id: 4,
        content: <FourthBentoAnimation once={false} />,
        title: "Smart Workflow Automation",
        description:
          "AI creates and optimizes your workflows automatically. Automate repetitive tasks and receive intelligent process improvements.",
      },
    ],
  },
  benefits: [
    {
      id: 1,
      text: "Save hours each week with AI-powered workflow automation.",
      image: "/Device-6.png",
    },
    {
      id: 2,
      text: "Reduce context switching with unified tool integration.",
      image: "/Device-7.png",
    },
    {
      id: 3,
      text: "Improve team alignment with real-time collaboration.",
      image: "/Device-8.png",
    },
    {
      id: 4,
      text: "Increase productivity with AI-driven insights and recommendations.",
      image: "/Device-1.png",
    },
  ],
  growthSection: {
    title: "Tailored for Your Team's Success",
    description:
      "Every workflow, insight, and automation is personalized to your unique team dynamics and business goals.",
    items: [
      {
        id: 1,
        content: (
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm space-y-4 p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-semibold text-primary">
                    Workflow Optimization
                  </div>
                  <div className="text-sm text-muted-foreground">
                    AI-Powered Efficiency
                  </div>
                </div>

                {[
                  {
                    name: "Email Processing",
                    current: 75,
                    optimized: 95,
                    color: "bg-blue-500",
                  },
                  {
                    name: "Task Management",
                    current: 60,
                    optimized: 90,
                    color: "bg-green-500",
                  },
                  {
                    name: "Team Collaboration",
                    current: 70,
                    optimized: 88,
                    color: "bg-purple-500",
                  },
                  {
                    name: "Data Entry",
                    current: 45,
                    optimized: 92,
                    color: "bg-orange-500",
                  },
                ].map((category, index) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-primary">{category.name}</span>
                      <span className="text-muted-foreground">
                        {category.optimized}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={cn(category.color, "h-full rounded-full")}
                        initial={{ width: `${category.current}%` }}
                        animate={{ width: `${category.optimized}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-3 bg-accent rounded-lg">
                  <div className="text-sm text-center">
                    <span className="text-secondary font-semibold">
                      15+ hours
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      saved per week
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ),
        title: "Custom Workflow Optimization",
        description:
          "AI analyzes your team's workflows and creates optimized processes that actually work, automatically adjusting to boost productivity without disrupting what matters most.",
      },
      {
        id: 2,
        content: (
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-sm p-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-semibold text-primary">
                    Team Intelligence
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Communication Pattern Analysis
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <div className="text-white font-bold text-sm">TEAM</div>
                  </div>

                  {[
                    {
                      name: "Slack",
                      angle: 0,
                      distance: 60,
                      size: 12,
                      color: "bg-yellow-500",
                    },
                    {
                      name: "Email",
                      angle: 72,
                      distance: 70,
                      size: 16,
                      color: "bg-green-500",
                    },
                    {
                      name: "Meetings",
                      angle: 144,
                      distance: 65,
                      size: 14,
                      color: "bg-red-500",
                    },
                    {
                      name: "Tasks",
                      angle: 216,
                      distance: 75,
                      size: 18,
                      color: "bg-blue-500",
                    },
                    {
                      name: "Docs",
                      angle: 288,
                      distance: 55,
                      size: 10,
                      color: "bg-purple-500",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.name}
                      className={cn(
                        item.color,
                        "absolute rounded-full flex items-center justify-center text-white text-xs font-medium"
                      )}
                      style={{
                        width: `${item.size}px`,
                        height: `${item.size}px`,
                        left: `calc(50% + ${Math.cos((item.angle * Math.PI) / 180) * item.distance}px)`,
                        top: `calc(50% + ${Math.sin((item.angle * Math.PI) / 180) * item.distance}px)`,
                        transform: "translate(-50%, -50%)",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      {item.name.slice(0, 3)}
                    </motion.div>
                  ))}

                  {[0, 72, 144, 216, 288].map((angle, index) => (
                    <motion.div
                      key={angle}
                      className="absolute w-px bg-border opacity-30"
                      style={{
                        height: "80px",
                        left: "50%",
                        top: "50%",
                        transformOrigin: "0 0",
                        transform: `rotate(${angle}deg)`,
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.5 + index * 0.05,
                        ease: "easeOut",
                      }}
                    />
                  ))}
                </div>

                <div className="mt-8 text-center space-y-2">
                  <div className="text-sm text-secondary font-semibold">
                    Pattern Detected
                  </div>
                  <div className="text-xs text-muted-foreground">
                    35% reduction in meeting time possible
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ),
        title: "Behavioral Team Insights",
        description:
          "Understand your team's communication patterns and discover optimization opportunities through AI-powered analysis of collaboration habits and workflow bottlenecks.",
      },
    ],
  },
  quoteSection: {
    subtitle: "Transform Your Workflow.",
    title: "Start Working Smarter Today",
    description:
      "Join thousands of teams who have transformed their productivity with AI-powered automation and intelligent workflow optimization.",
    primaryButton: {
      text: "Start Your Free Trial",
      href: "/waitlist",
    },
    secondaryButton: {
      text: "Schedule Demo",
      href: "https://calendly.com/fivra",
    },
  },
  pricing: {
    title: "Pricing that scales with your team",
    description:
      "Start free and upgrade as your team grows. Cancel anytime, no hidden fees.",
    pricingItems: [
      {
        name: "Free",
        href: "#",
        price: "$0",
        period: "month",
        yearlyPrice: "$0",
        features: [
          "Up to 3 team members",
          "Basic task management",
          "Simple workflow automation",
          "5 tool integrations",
          "Community support",
        ],
        description: "Perfect for small teams getting started",
        buttonText: "Start Free",
        buttonColor: "bg-accent text-primary",
        isPopular: false,
      },
      {
        name: "Professional",
        href: "#",
        price: "$12",
        period: "user/month",
        yearlyPrice: "$120",
        features: [
          "Unlimited team members",
          "Advanced AI workflow automation",
          "Unlimited tool integrations",
          "Real-time collaboration",
          "Productivity analytics",
          "Custom workflows",
          "Priority support",
          "Advanced security",
        ],
        description: "Ideal for growing teams serious about productivity",
        buttonText: "Upgrade to Professional",
        buttonColor: "bg-secondary text-white",
        isPopular: true,
      },
      {
        name: "Enterprise",
        href: "#",
        price: "Custom",
        period: "",
        yearlyPrice: "Custom",
        features: [
          "Everything in Professional",
          "Dedicated account manager",
          "Custom AI training",
          "Advanced security & compliance",
          "Custom integrations",
          "SLA guarantee",
          "On-premise deployment option",
        ],
        description: "Best for large organizations with custom needs",
        buttonText: "Contact Sales",
        buttonColor: "bg-primary text-primary-foreground",
        isPopular: false,
      },
    ],
  },
  testimonials: [
    {
      id: "1",
      name: "Sarah Mitchell",
      role: "Operations Director at TechCorp",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      description: (
        <p>
          Fivra&apos;s AI-driven workflow automation has transformed how our team operates.
          <Highlight>
            We&apos;re saving 15+ hours per week on repetitive tasks.
          </Highlight>{" "}
          A game-changer for team productivity.
        </p>
      ),
    },
    {
      id: "2",
      name: "James Chen",
      role: "Project Manager at InnovateLabs",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      description: (
        <p>
          Using Fivra&apos;s intelligent task management has completely changed our project delivery.
          <Highlight>Our team efficiency increased by 40%!</Highlight> Essential for any modern team.
        </p>
      ),
    },
    {
      id: "3",
      name: "Maria Rodriguez",
      role: "CEO at StartupHub",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      description: (
        <p>
          As a startup founder, I need tools that scale. Fivra&apos;s automation handles everything perfectly.
          <Highlight>Our workflow efficiency has doubled.</Highlight>{" "}
          Critical tool for growing businesses.
        </p>
      ),
    },
    {
      id: "4",
      name: "David Kim",
      role: "Engineering Lead at DataFlow",
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      description: (
        <p>
          Fivra&apos;s AI integration capabilities have streamlined our entire development process.
          <Highlight>Code reviews and deployments are now seamless.</Highlight> A must-have for dev teams.
        </p>
      ),
    },
    {
      id: "5",
      name: "Emily Thompson",
      role: "Marketing Director at BrandWorks",
      img: "https://randomuser.me/api/portraits/women/29.jpg",
      description: (
        <p>
          Leveraging Fivra&apos;s AI for campaign management has given us unprecedented efficiency.
          <Highlight>
            Our content production increased 3x with better quality.
          </Highlight>{" "}
          Revolutionary for marketing teams.
        </p>
      ),
    },
    {
      id: "6",
      name: "Robert Martinez",
      role: "VP of Sales at SalesForce Pro",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      description: (
        <p>
          Fivra&apos;s CRM integration and automation tools have transformed our sales process.
          <Highlight>
            Deal closure rates improved by 35% in just 2 months.
          </Highlight>{" "}
          Game-changing for sales organizations.
        </p>
      ),
    },
    {
      id: "7",
      name: "Lisa Wang",
      role: "COO at GlobalTech Solutions",
      img: "https://randomuser.me/api/portraits/women/15.jpg",
      description: (
        <p>
          By integrating Fivra&apos;s workflow optimization, we&apos;ve drastically reduced operational overhead.
          <Highlight>
            Leading the way in efficient business operations.
          </Highlight>{" "}
          Essential for modern enterprises.
        </p>
      ),
    },
    {
      id: "8",
      name: "Ahmed Hassan",
      role: "Product Manager at CloudStream",
      img: "https://randomuser.me/api/portraits/men/63.jpg",
      description: (
        <p>
          Fivra&apos;s AI-powered insights have transformed how we approach product development.
          <Highlight>
            Our sprint velocity increased by 50% with better team alignment.
          </Highlight>{" "}
          Revolutionizing product management.
        </p>
      ),
    },
    {
      id: "9",
      name: "Jennifer Lee",
      role: "HR Director at TalentFirst",
      img: "https://randomuser.me/api/portraits/women/81.jpg",
      description: (
        <p>
          Implementing Fivra in our HR processes has improved employee onboarding and engagement significantly.
          <Highlight>
            Automation and personalization working together for better culture.
          </Highlight>{" "}
          A milestone in HR technology.
        </p>
      ),
    },
    {
      id: "10",
      name: "Michael Brown",
      role: "CTO at FinanceHub",
      img: "https://randomuser.me/api/portraits/men/47.jpg",
      description: (
        <p>
          Fivra&apos;s AI-driven automation has doubled our development team&apos;s output.
          <Highlight>
            Technology and efficiency perfectly aligned.
          </Highlight>{" "}
          Transforming how engineering teams work.
        </p>
      ),
    },
    {
      id: "11",
      name: "Sophie Anderson",
      role: "Creative Director at DesignStudio",
      img: "https://randomuser.me/api/portraits/women/52.jpg",
      description: (
        <p>
          With Fivra&apos;s collaboration tools, our creative process has never been smoother.
          <Highlight>
            Client projects delivered 30% faster with better results.
          </Highlight>{" "}
          Redefining creative workflow standards.
        </p>
      ),
    },
    {
      id: "12",
      name: "Carlos Gutierrez",
      role: "Operations Manager at LogiFlow",
      img: "https://randomuser.me/api/portraits/men/38.jpg",
      description: (
        <p>
          Fivra&apos;s workflow insights have streamlined our supply chain operations dramatically.
          <Highlight>Bringing efficiency and intelligence together.</Highlight> A game-changer for logistics.
        </p>
      ),
    },
    {
      id: "13",
      name: "Rachel Green",
      role: "Founder at ConsultPro",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      description: (
        <p>
          Fivra&apos;s intelligent automation has been invaluable for scaling our consulting business.
          <Highlight>
            Empowering small businesses with enterprise-level tools.
          </Highlight>{" "}
          A catalyst for growth.
        </p>
      ),
    },
  ],
  faqSection: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about Fivra and its features. If you have any other questions, please don't hesitate to contact us.",
    faQitems: [
      {
        id: 1,
        question: "What is Fivra?",
        answer:
          "Fivra is an AI-powered productivity and communication platform that helps teams work faster and smarter. It transforms scattered ideas, notes, and conversations into clear, actionable results by automating workflows, integrating tools, and providing intelligent insights.",
      },
      {
        id: 2,
        question: "How does Fivra analyze workflows?",
        answer:
          "Fivra uses advanced AI algorithms to understand your team's communication patterns, identify bottlenecks, detect inefficiencies, and suggest optimizations. It learns from your work habits to provide increasingly personalized recommendations and automate repetitive tasks.",
      },
      {
        id: 3,
        question: "Is my team's data secure?",
        answer:
          "Yes, Fivra uses enterprise-grade encryption and security measures that meet or exceed industry standards. We employ end-to-end encryption, secure data centers, and never access your sensitive information without permission. Your data privacy and security are our top priorities.",
      },
      {
        id: 4,
        question: "Which tools and platforms can I connect?",
        answer:
          "Fivra integrates with over 100+ popular tools including Slack, Microsoft Teams, Google Workspace, Notion, Asana, Trello, Salesforce, HubSpot, GitHub, and many more. We're constantly adding new integrations based on user requests.",
      },
      {
        id: 5,
        question: "Is there a free version available?",
        answer:
          "Yes, Fivra offers a free tier that includes basic task management, simple workflow automation, up to 3 team members, and 5 tool integrations. You can access core features without any cost and upgrade as your team grows.",
      },
      {
        id: 6,
        question: "How does Fivra help teams save time?",
        answer:
          "Fivra automates repetitive tasks, streamlines communication, eliminates context switching, and provides intelligent insights about productivity patterns. Teams typically save 15-20 hours per week by using Fivra's AI-powered automation and workflow optimization features.",
      },
    ],
  },
  ctaSection: {
    id: "cta",
    title: "Organize. Automate. Succeed.",
    backgroundImage: "/cta-background.png",
    button: {
      text: "Transform Your Workflow Today",
      href: "#",
    },
    subtext: "No credit card required, cancel anytime",
  },
  footerLinks: [
    {
      title: "Company",
      links: [
        { id: 1, title: "About", url: "/about" },
        { id: 2, title: "Contact", url: "/contact" },
        { id: 3, title: "Blog", url: "/blog" },
        { id: 4, title: "Careers", url: "/careers" },
      ],
    },
    {
      title: "Products",
      links: [
        { id: 5, title: "Features", url: "/features" },
        { id: 6, title: "Integrations", url: "/integrations" },
        { id: 7, title: "Pricing", url: "/pricing" },
        { id: 8, title: "API", url: "/api" },
      ],
    },
    {
      title: "Resources",
      links: [
        { id: 9, title: "Documentation", url: "/docs" },
        { id: 10, title: "Help Center", url: "/help" },
        { id: 11, title: "Community", url: "/community" },
        { id: 12, title: "Status", url: "/status" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;