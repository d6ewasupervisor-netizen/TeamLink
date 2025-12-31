"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { format } from "date-fns"
import { CalendarIcon, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
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
import { cn } from "@/lib/utils"
import { InfractionType, User } from "@/lib/types"
import { api } from "@/services/api"

const formSchema = z.object({
  employeeId: z.string({
    required_error: "Please select an employee.",
  }),
  type: z.nativeEnum(InfractionType, {
    required_error: "Please select an infraction type.",
  }),
  occurredAt: z.date({
    required_error: "Date and time is required.",
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
      details: "",
      location: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const employee = employees.find(u => u.uid === values.employeeId)
      if (!employee) throw new Error("Employee not found")

      await api.createInfraction({
        userId: values.employeeId,
        userName: employee.displayName,
        reportedByUid: reporterId,
        reportedByName: reporterName,
        type: values.type,
        occurredAt: values.occurredAt.toISOString(),
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
          name="occurredAt"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date & Time</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP HH:mm")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                  {/* Note: Standard Calendar component doesn't handle time. 
                      For now we just capture date. Enhancing to DateTime picker would be better later.
                      I'll just assume start of day or use current time if needed, but for "Doing things" date is key.
                  */}
                </PopoverContent>
              </Popover>
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
