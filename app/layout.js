import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import FloatingShapes from "@/components/FloatingShapes";
import Header from "@/components/Header";
import { ConvexClientProvider } from "../components/ConvexClientProvider";
import { dark,customGradientTheme  } from "@clerk/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "PX4",
  description: "AI Powered photo editor",
};

export default function RootLayout({ children }) {
  return (
   
    <html lang="en" suppressHydrationWarning>
    <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable}antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
     >  
     
     
     <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY} appearance={{
      baseTheme: customGradientTheme,
    }}>
       
      <ConvexClientProvider>
        <main className="bg-[#264653] min-h-[2222] text-white  overflow-x-hidden"> 
           <Header/>
            <Toaster richColors/>
               {children}
        </main>
     </ConvexClientProvider>
         </ClerkProvider>
   
      </ThemeProvider>
      
    </body>
    </html>

  );
}
