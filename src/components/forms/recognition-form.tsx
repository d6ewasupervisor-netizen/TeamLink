"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState, useEffect } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { RecognitionCategory, User, RecognitionTier } from "@/lib/types"
import { api } from "@/services/api"

const formSchema = z.object({
  employeeId: z.string({
    required_error: "Please select an employee.",
  }),
  category: z.nativeEnum(RecognitionCategory, {
    required_error: "Please select a category.",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters.",
  }),
  impactStatement: z.string().optional(),
})

interface RecognitionFormProps {
  submitterId: string;
  submitterName?: string; // Optional if not available immediately
  onSuccess?: () => void;
}

export function RecognitionForm({ submitterId, submitterName, onSuccess }: RecognitionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [employees, setEmployees] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await api.getUsers()
      setEmployees(users.filter(u => u.uid !== submitterId)) // Can't recognize self usually
    }
    fetchUsers()
  }, [submitterId])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      impactStatement: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const employee = employees.find(u => u.uid === values.employeeId)
      if (!employee) throw new Error("Employee not found")

      await api.createRecognition({
        userId: values.employeeId,
        submittedByUid: submitterId,
        submittedByName: submitterName,
        category: values.category,
        tier: RecognitionTier.VERBAL, // Default to verbal, upgraded by logic or supervisor
        description: values.description,
        impactStatement: values.impactStatement,
      })
      
      toast({
        title: "Recognition Submitted",
        description: "Thank you for recognizing a team member!",
      })
      form.reset()
      onSuccess?.()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit recognition.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="employeeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an employee" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {employees.map((emp) => (
                    <SelectItem key={emp.uid} value={emp.uid}>
                      {emp.displayName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(RecognitionCategory).map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat.replace(/_/g, " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the positive behavior..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Minimum 20 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="impactStatement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Impact Statement (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How did this positively impact the team or store?"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Submit Recognition
        </Button>
      </form>
    </Form>
  )
}
