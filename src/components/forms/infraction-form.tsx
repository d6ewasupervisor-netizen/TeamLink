"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

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
import { InfractionType, User } from "@/lib/types"
import { api } from "@/services/api"

const formSchema = z.object({
  employeeId: z.string({
    required_error: "Please select an employee.",
  }),
  type: z.nativeEnum(InfractionType, {
    required_error: "Please select an infraction type.",
  }),
  occurredDate: z.string({
    required_error: "Date is required.",
  }).regex(/^\d{4}-\d{2}-\d{2}$/, {
    message: "Please enter a valid date in YYYY-MM-DD format.",
  }),
  occurredTime: z
    .string({
      required_error: "Time is required.",
    })
    .regex(/^([01]\d|2[0-3]):[0-5]\d$/, {
      message: "Enter time as HH:MM (24-hour).",
    }),
  location: z.string().optional(),
  details: z.string().min(10, {
    message: "Details must be at least 10 characters.",
  }),
})

interface InfractionFormProps {
  reporterId: string;
  reporterName: string;
  onSuccess?: () => void;
}

export function InfractionForm({ reporterId, reporterName, onSuccess }: InfractionFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [employees, setEmployees] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await api.getUsers()
      // Filter for teammates/leads that report to this supervisor? 
      // For now, just show all teammates/leads
      setEmployees(users.filter(u => u.role === 'teammate' || u.role === 'lead'))
    }
    fetchUsers()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      employeeId: undefined,
      type: undefined,
      occurredDate: "",
      occurredTime: "",
      location: "",
      details: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const employee = employees.find(u => u.uid === values.employeeId)
      if (!employee) throw new Error("Employee not found")

      const [hours, minutes] = values.occurredTime.split(":").map(Number)
      const occurredAt = new Date(values.occurredDate)
      occurredAt.setHours(hours, minutes, 0, 0)

      await api.createInfraction({
        userId: values.employeeId,
        userName: employee.displayName,
        reportedByUid: reporterId,
        reportedByName: reporterName,
        type: values.type,
        occurredAt: occurredAt.toISOString(),
        location: values.location,
        details: values.details,
      })
      
      toast({
        title: "Infraction Reported",
        description: "The infraction has been recorded.",
      })
      form.reset()
      onSuccess?.()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to report infraction.",
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
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Infraction Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(InfractionType).map((type) => (
                    <SelectItem key={type} value={type}>
                      {type.replace(/_/g, " ")}
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
          name="occurredDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="occurredTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time</FormLabel>
              <FormControl>
                <Input
                  type="time"
                  step={300}
                  placeholder="HH:MM"
                  {...field}
                />
              </FormControl>
              <FormDescription>Use local time the infraction occurred.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Sales Floor, Break Room" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe what happened..."
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
          Report Infraction
        </Button>
      </form>
    </Form>
  )
}
