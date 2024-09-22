"use client";
import { Component1 } from "@/components/charts/component1";
import { Component2 } from "@/components/charts/component2";
import { Component3 } from "@/components/charts/component3";
import { Component4 } from "@/components/charts/component4";
import { Component5 } from "@/components/charts/component5";
import { Component6 } from "@/components/charts/component6";
import { Component7 } from "@/components/charts/component7";
import { Component8 } from "@/components/charts/component8";
import { Component9 } from "@/components/charts/component9";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative overflow-hidden -mt-14 min-h-screen">
      <section className="container w-full h-screen -my-10 max-h-screen flex items-center">
        <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
          <div className="text-center space-y-8 relative z-10 reflection glassomorphism glow py-10">
            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>Empower Your Business with Data</h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              Unlock insights and automate processes with SevenTons Software.
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Link href="#contact">
                <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
                  Get Started
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 grid flex-col w-[2000px] mx-auto h-screen grid-cols-6 gap-4">
          <div className="col-span-1">
            <Component1 />
          </div>
          <div className="col-span-1">
            <Component2 />
          </div>
          <div className="col-span-1">
            <Component3 />
          </div>
          <div className="col-span-2">
            <Component4 />
          </div>
          <div className="col-span-1">
            <Component6 />
          </div>
          <div className="col-span-2">
            <Component5 />
          </div>
          <div className="col-span-1">
            <Component1 />
          </div>
          <div className="col-span-1">
            <Component2 />
          </div>
          <div className="col-span-1">
            <Component3 />
          </div>
          <div className="col-span-1">
            <Component7 />
          </div>
          <div className="col-span-1">
            <Component8 />
          </div>
          <div className="col-span-1">
            <Component3 />
          </div>
          <div className="col-span-1">
            <Component7 />
          </div>
          <div className="col-span-2">
            <Component8 />
          </div>
          <div className="col-span-1">
            <Component9 />
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-screen"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%)",
          }}
        ></div>
        <div className="absolute inset-x-0 bottom-0 w-full h-[400px] bg-gradient-to-b from-transparent to-black"></div>
      </section>
    </div>
  );
};
