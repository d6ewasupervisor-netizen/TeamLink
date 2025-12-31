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
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { CAFSubject, User } from "@/lib/types"
import { api } from "@/services/api"
import { format } from "date-fns"

const formSchema = z.object({
  employeeId: z.string({
    required_error: "Please select an employee.",
  }),
  subject: z.nativeEnum(CAFSubject, {
    required_error: "Please select a subject.",
  }),
  specificDetails: z.string().min(50, {
    message: "Specific details must be at least 50 characters.",
  }),
  requiredImprovement: z.string().min(25, {
    message: "Required improvement must be at least 25 characters.",
  }),
})

interface CAFFormProps {
  supervisorId: string;
  supervisorName: string;
  onSuccess?: () => void;
  // Optional pre-fill data (e.g. from infraction)
  initialData?: Partial<z.infer<typeof formSchema>>;
}

export function CAFForm({ supervisorId, supervisorName, onSuccess, initialData }: CAFFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [employees, setEmployees] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await api.getUsers()
      // Filter for reports of this supervisor
      setEmployees(users.filter(u => u.supervisorId === supervisorId))
    }
    fetchUsers()
  }, [supervisorId])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      specificDetails: initialData?.specificDetails || "",
      requiredImprovement: initialData?.requiredImprovement || "",
      employeeId: initialData?.employeeId,
      subject: initialData?.subject,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const employee = employees.find(u => u.uid === values.employeeId)
      if (!employee) throw new Error("Employee not found")

      // Auto-populate policy expectations based on subject (Simplified logic for now)
      const policyMap: Record<string, string> = {
          [CAFSubject.ATTENDANCE_NO_CALL_NO_SHOW]: "Associates are expected to notify their supervisor at least 2 hours before a scheduled shift...",
          [CAFSubject.ATTENDANCE_LATE_ARRIVAL]: "Associates must arrive on time for their scheduled shifts...",
          // ... add others as needed
      };

      await api.createCAF({
        userId: values.employeeId,
        userName: employee.displayName,
        supervisorId,
        supervisorName,
        subject: values.subject,
        specificDetails: values.specificDetails,
        requiredImprovement: values.requiredImprovement,
        discussionDate: format(new Date(), 'yyyy-MM-dd'),
        policyExpectations: policyMap[values.subject] || "Refer to company policy.",
      })
      
      toast({
        title: "CAF Created",
        description: "Corrective Action Form created as Draft.",
      })
      form.reset()
      onSuccess?.()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create CAF.",
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(CAFSubject).map((subj) => (
                    <SelectItem key={subj} value={subj}>
                      {subj.replace(/_/g, " ")}
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
          name="specificDetails"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Specific Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the specific incident..."
                  className="resize-none min-h-[100px]"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Minimum 50 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requiredImprovement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Required Improvement</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What must happen going forward..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Minimum 25 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Create CAF
        </Button>
      </form>
    </Form>
  )
}
