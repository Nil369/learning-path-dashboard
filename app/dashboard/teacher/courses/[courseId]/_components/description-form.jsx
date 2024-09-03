"use client";

import { React, useState } from "react";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
    description: z.string().min(1, {
        message: "Description is required!",
      }),
});

const DescriptionForm = ({ initialData, courseId }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: initialData.description||"",
  });

  const { isSubmitting, isValid } = form.formState;

  const [isEditing, setIsEditing] = useState(false);
  const toggleEdit = () => {
    setIsEditing((current) => !current);
  };
  const router = useRouter();

  const onSubmit = async (values) => {
    console.log(values)
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course updated!");
      toggleEdit();
      router.refresh();

    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="mt-6 bg-slate-100 rounded-md p-4 text-black">
      <div className="font-medium flex items-center justify-between ">
        Course Description
        <Button variant="ghost" onClick={toggleEdit}>
          {isEditing && <>Cancel</>}
          {!isEditing && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit
            </>
          )}
        </Button>
      </div>
      {!isEditing &&(
         <p className={cn("text-sm mt-2",
            !initialData.description && "text-slate-500 italic"
         )}>            
        {initialData.description || "No Description"}
        </p>
      )}
      <div>
        {isEditing && (
        
         
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 mt-4"
            >
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        disabled={isSubmitting}
                        className="bg-white"
                        placeholder="e.g. 'This course is about...'"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-x-3">
                <Button
                  className="bg-slate-900 text-white hover:bg-slate-950"
                  disabled={!isValid || isSubmitting}
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </form>
          </Form>

        )}
      </div>
    </div>
    
  );
};

export default DescriptionForm;
