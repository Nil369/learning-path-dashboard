"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CoursesPage = () => {
  return (
        <div className="text-2xl text-cyan-500 font-[500] p-6 flex flex-col m-4">
            Courses Page Works!📚
            <Link href="/dashboard/teacher/create-course">
                <Button size="lg" variant="cyan">
                    New Course
                </Button>
            </Link>
        </div>
    )
};

export default CoursesPage;
