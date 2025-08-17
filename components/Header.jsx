'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignInButton } from '@clerk/nextjs';
import { SignUpButton, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { useStoreUser } from '@/hooks/useStoreUserEffect';
import { BarLoader } from 'react-spinners';
import { Unauthenticated, Authenticated } from 'convex/react';
import { LayoutDashboard, Sparkles } from 'lucide-react';

export default function Header() {
    const path = usePathname();
    const { isLoading } = useStoreUser();

    if (path.includes('/editor')) {
        return null;
    }

    return (
        <div>
            <header className='fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl'>
                <div className='relative overflow-hidden'>
                    {/* Gradient border */}
                    <div className='absolute inset-0 bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] rounded-2xl p-[1px]'>
                        <div className='w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl'></div>
                    </div>
                    
                    {/* Main content */}
                    <div className='relative bg-[#7D8D86] backdrop-blur-xl rounded-2xl px-6 sm:px-8 py-4 flex items-center justify-between shadow-2xl shadow-black/10'>
                        {/* Logo */}
                        <Link href="/" className='flex items-center space-x-2 group'>
                            <div className='w-10 h-10 bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                                <Image src={'/logo.png'} width={40} height={30} alt='loading..'/>
                            </div>
                            <span className='font-black text-xl bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] bg-clip-text text-transparent hidden sm:block'>
                                Capture!
                            </span>
                        </Link>

                        {/* Navigation - Only on homepage */}
                        {path === '/' && (
                            <nav className='hidden lg:flex items-center space-x-8'>
                                <Link 
                                    href="#features" 
                                    className='relative font-semibold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#FED16A] hover:via-[#78B9B5] hover:to-[#F97A00] hover:bg-clip-text transition-all duration-300 group'
                                >
                                    Features
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FED16A] to-[#F97A00] group-hover:w-full transition-all duration-300'></span>
                                </Link>
                                <Link 
                                    href="#pricing" 
                                    className='relative font-semibold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#FED16A] hover:via-[#78B9B5] hover:to-[#F97A00] hover:bg-clip-text transition-all duration-300 group'
                                >
                                    Pricing
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FED16A] to-[#F97A00] group-hover:w-full transition-all duration-300'></span>
                                </Link>
                                <Link 
                                    href="#contact" 
                                    className='relative font-semibold text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#FED16A] hover:via-[#78B9B5] hover:to-[#F97A00] hover:bg-clip-text transition-all duration-300 group'
                                >
                                    Contact
                                    <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FED16A] to-[#F97A00] group-hover:w-full transition-all duration-300'></span>
                                </Link>
                            </nav>
                        )}

                        {/* Auth Buttons */}
                        <div className='flex items-center space-x-3'>
                            <Unauthenticated>
                                <SignInButton>
                                    <button className='hidden sm:flex items-center px-6 py-2.5 font-semibold text-white hover:text-gray-900 rounded-xl hover:bg-gray-400 transition-all duration-300'>
                                        Sign In
                                    </button>
                                </SignInButton>
                                <SignUpButton>
                                    <button className='flex items-center px-6 py-2.5 font-bold text-white bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 active:scale-95'>
                                        <span className="hidden sm:inline">Get Started</span>
                                        <span className="sm:hidden">Start</span>
                                        <Sparkles className='ml-2 w-4 h-4' />
                                    </button>
                                </SignUpButton>
                            </Unauthenticated>

                            <Authenticated>
                                <Link href="/dashboard">
                                    <button className='flex items-center px-4 sm:px-6 py-2.5 font-bold text-white bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 active:scale-95'>
                                        <LayoutDashboard className='w-4 h-4 sm:mr-2' />
                                        <span className="hidden sm:inline">Dashboard</span>
                                    </button>
                                </Link>
                                
                                <div className='relative'>
                                    <div className='p-0.5 bg-gradient-to-r from-[#FED16A] via-[#78B9B5] to-[#F97A00] rounded-full'>
                                        <UserButton 
                                            appearance={{
                                                elements: {
                                                    avatarBox: 'w-10 h-10 rounded-full',
                                                    userButtonPopoverCard: 'shadow-2xl border-0',
                                                    userButtonPopoverActions: 'bg-white'
                                                }
                                            }} 
                                        />
                                    </div>
                                </div>
                            </Authenticated>
                        </div>
                    </div>

                    {/* Floating glow effect */}
                    <div className='absolute -inset-4 bg-gradient-to-r from-[#FED16A]/20 via-[#78B9B5]/20 to-[#F97A00]/20 rounded-3xl blur-xl -z-10 opacity-60'></div>
                </div>

                {/* Loading bar */}
                {isLoading && (
                    <div className='fixed bottom-0 left-0 w-full z-40'>
                        <BarLoader 
                            width={'100%'} 
                            color='#F97A00'
                            height={3}
                            cssOverride={{
                                background: 'linear-gradient(to right, #FED16A, #78B9B5, #F97A00)'
                            }}
                        />
                    </div>
                )}
            </header>
        </div>
    )
}