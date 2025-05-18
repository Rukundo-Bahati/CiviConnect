
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const stripeKey = import.meta.env.VITE_STRIPE_KEY;


// Schema for email notification settings
const notificationFormSchema = z.object({
  newComplaints: z.boolean().default(true),
  statusUpdates: z.boolean().default(true),
  citizenRegistrations: z.boolean().default(false),
  dailyDigest: z.boolean().default(true),
  weeklyReport: z.boolean().default(true),
});

// Schema for API settings
const apiFormSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  webhookUrl: z.string().url("Must be a valid URL").or(z.string().length(0)),
  allowPublicAccess: z.boolean().default(false),
  rateLimitPerMinute: z.coerce.number().min(10).max(1000),
});

// Schema for department settings
const departmentFormSchema = z.object({
  autoAssignment: z.boolean().default(true),
  notifyManager: z.boolean().default(true),
  escalationHours: z.coerce.number().min(1).max(72),
  defaultPriority: z.enum(["low", "medium", "high"]),
});

const PreferencesAdmin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("notifications");
  
  // Notification form
  const notificationForm = useForm<z.infer<typeof notificationFormSchema>>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      newComplaints: true,
      statusUpdates: true,
      citizenRegistrations: false,
      dailyDigest: true,
      weeklyReport: true,
    },
  });
  
  // API form
  const apiForm = useForm<z.infer<typeof apiFormSchema>>({
    resolver: zodResolver(apiFormSchema),
    defaultValues: {
      apiKey: stripeKey,
      webhookUrl: "https://api.example.com/webhooks/ces",
      allowPublicAccess: false,
      rateLimitPerMinute: 100,
    },
  });
  
  // Department form
  const departmentForm = useForm<z.infer<typeof departmentFormSchema>>({
    resolver: zodResolver(departmentFormSchema),
    defaultValues: {
      autoAssignment: true,
      notifyManager: true,
      escalationHours: 24,
      defaultPriority: "medium",
    },
  });
  
  // Submit handlers
  const onNotificationSubmit = (data: z.infer<typeof notificationFormSchema>) => {
    console.log("Notification settings saved:", data);
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved successfully.",
    });
  };
  
  const onApiSubmit = (data: z.infer<typeof apiFormSchema>) => {
    console.log("API settings saved:", data);
    toast({
      title: "API settings updated",
      description: "Your API configuration has been saved successfully.",
    });
  };
  
  const onDepartmentSubmit = (data: z.infer<typeof departmentFormSchema>) => {
    console.log("Department settings saved:", data);
    toast({
      title: "Department preferences updated",
      description: "Your department settings have been saved successfully.",
    });
  };
  
  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-display">System Preferences</h1>
        <p className="text-muted-foreground mt-2">Configure system settings and notifications</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="api">API & Integration</TabsTrigger>
          <TabsTrigger value="departments">Department Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Email Notification Preferences</CardTitle>
              <CardDescription>
                Configure when and how you receive email notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={notificationForm.handleSubmit(onNotificationSubmit)}>
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="newComplaints">New Complaints</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new complaints are submitted
                      </p>
                    </div>
                    <Switch
                      id="newComplaints"
                      checked={notificationForm.watch("newComplaints")}
                      onCheckedChange={(value) => notificationForm.setValue("newComplaints", value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="statusUpdates">Status Updates</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when complaint statuses change
                      </p>
                    </div>
                    <Switch
                      id="statusUpdates"
                      checked={notificationForm.watch("statusUpdates")}
                      onCheckedChange={(value) => notificationForm.setValue("statusUpdates", value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="citizenRegistrations">Citizen Registrations</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive notifications when new citizens register
                      </p>
                    </div>
                    <Switch
                      id="citizenRegistrations"
                      checked={notificationForm.watch("citizenRegistrations")}
                      onCheckedChange={(value) => notificationForm.setValue("citizenRegistrations", value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="dailyDigest">Daily Digest</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive a daily summary of all activity
                      </p>
                    </div>
                    <Switch
                      id="dailyDigest"
                      checked={notificationForm.watch("dailyDigest")}
                      onCheckedChange={(value) => notificationForm.setValue("dailyDigest", value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weeklyReport">Weekly Report</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive a weekly analytics report
                      </p>
                    </div>
                    <Switch
                      id="weeklyReport"
                      checked={notificationForm.watch("weeklyReport")}
                      onCheckedChange={(value) => notificationForm.setValue("weeklyReport", value)}
                    />
                  </div>
                </div>
                
                <Button type="submit" className="mt-6">
                  Save Notification Preferences
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>
                Set up API keys and integration points
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={apiForm.handleSubmit(onApiSubmit)}>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="apiKey">API Key</Label>
                    <div className="relative">
                      <Input
                        id="apiKey"
                        type="password"
                        {...apiForm.register("apiKey")}
                      />
                      <Button
                        type="button" 
                        variant="ghost" 
                        size="sm"
                        className="absolute right-2 top-1/2 -translate-y-1/2"
                        onClick={() => {
                          // Toggle visibility logic would go here
                          toast({
                            title: "API Key copied",
                            description: "The API key has been copied to your clipboard."
                          });
                        }}
                      >
                        Copy
                      </Button>
                    </div>
                    {apiForm.formState.errors.apiKey && (
                      <p className="text-sm text-destructive">{apiForm.formState.errors.apiKey.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="webhookUrl">Webhook URL</Label>
                    <Input
                      id="webhookUrl"
                      type="url"
                      placeholder="https://example.com/webhook"
                      {...apiForm.register("webhookUrl")}
                    />
                    {apiForm.formState.errors.webhookUrl && (
                      <p className="text-sm text-destructive">{apiForm.formState.errors.webhookUrl.message}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="allowPublicAccess">Allow Public API Access</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable public access to the API (not recommended)
                      </p>
                    </div>
                    <Switch
                      id="allowPublicAccess"
                      checked={apiForm.watch("allowPublicAccess")}
                      onCheckedChange={(value) => apiForm.setValue("allowPublicAccess", value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="rateLimitPerMinute">Rate Limit (requests per minute)</Label>
                    <Input
                      id="rateLimitPerMinute"
                      type="number"
                      {...apiForm.register("rateLimitPerMinute")}
                    />
                    {apiForm.formState.errors.rateLimitPerMinute && (
                      <p className="text-sm text-destructive">{apiForm.formState.errors.rateLimitPerMinute.message}</p>
                    )}
                  </div>
                </div>
                
                <Button type="submit" className="mt-6">
                  Save API Configuration
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="departments">
          <Card>
            <CardHeader>
              <CardTitle>Department Settings</CardTitle>
              <CardDescription>
                Configure how complaints are handled across departments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={departmentForm.handleSubmit(onDepartmentSubmit)}>
                <div className="grid gap-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="autoAssignment">Automatic Assignment</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically assign complaints to department staff
                      </p>
                    </div>
                    <Switch
                      id="autoAssignment"
                      checked={departmentForm.watch("autoAssignment")}
                      onCheckedChange={(value) => departmentForm.setValue("autoAssignment", value)}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="notifyManager">Manager Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Notify department managers about new complaints
                      </p>
                    </div>
                    <Switch
                      id="notifyManager"
                      checked={departmentForm.watch("notifyManager")}
                      onCheckedChange={(value) => departmentForm.setValue("notifyManager", value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="escalationHours">Escalation Threshold (hours)</Label>
                    <Input
                      id="escalationHours"
                      type="number"
                      {...departmentForm.register("escalationHours")}
                    />
                    {departmentForm.formState.errors.escalationHours && (
                      <p className="text-sm text-destructive">{departmentForm.formState.errors.escalationHours.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Complaints will be escalated if not addressed within this timeframe
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="defaultPriority">Default Priority</Label>
                    <select
                      id="defaultPriority"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      {...departmentForm.register("defaultPriority")}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                    <p className="text-xs text-muted-foreground">
                      Default priority level for new complaints
                    </p>
                  </div>
                </div>
                
                <Button type="submit" className="mt-6">
                  Save Department Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PreferencesAdmin;
