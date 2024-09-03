"use client";

import React from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation"; // Correctly use useRouter here
import {
  Form,
  FormControl,
  FormDescription,
  FormLabel,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title is required & should be at least 3 characters!",
  }),
});


const TitleForm = ({initialData,courseId}) => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: initialData
      });
    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values) => {
       console.log(values)
      };
  return (
    <div className="mt-6 bg-slate-100 rounded-md p-4 text-black">
        <div className="font-medium flex items-center justify-between ">
            Course Title
            <Button variant="ghost">
                <Pencil classname="h-4 w-4 mr-2"/>
                Edit Title
            </Button>
        </div>
    </div>
  )
}

export default TitleForm
