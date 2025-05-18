
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { UserCircle, Shield, Key } from "lucide-react";

// Schema for profile form
const profileFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  department: z.string().min(1, "Department is required"),
  bio: z.string().optional(),
  phoneNumber: z.string().optional(),
});

// Schema for password form
const passwordFormSchema = z.object({
  currentPassword: z.string().min(6, "Password must be at least 6 characters"),
  newPassword: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const AccountAdmin = () => {
  const { toast } = useToast();
  
  // Profile form
  const profileForm = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: "Admin User",
      email: "admin@citygovernment.org",
      title: "System Administrator",
      department: "IT Department",
      bio: "Responsible for managing the Citizen Engagement System and handling system administration tasks.",
      phoneNumber: "(555) 123-4567",
    },
  });
  
  // Password form
  const passwordForm = useForm<z.infer<typeof passwordFormSchema>>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });
  
  // Submit handlers
  const onProfileSubmit = (data: z.infer<typeof profileFormSchema>) => {
    console.log("Profile updated:", data);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  const onPasswordSubmit = (data: z.infer<typeof passwordFormSchema>) => {
    console.log("Password updated");
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
    });
    passwordForm.reset({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  
  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-display">Account Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account information and security</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <UserCircle className="h-16 w-16 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg">Admin User</h3>
                <p className="text-muted-foreground">System Administrator</p>
                <p className="text-sm text-muted-foreground mt-2">IT Department</p>
                
                <div className="mt-6 space-y-3 w-full">
                  <div className="flex items-center p-2 bg-muted/40 rounded-md">
                    <Shield className="h-4 w-4 text-muted-foreground mr-2" />
                    <div className="text-sm">
                      <p className="font-medium">Admin Access</p>
                      <p className="text-muted-foreground text-xs">Full system permissions</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/40 rounded-md">
                    <div className="text-sm">
                      <p className="font-medium">Last Login</p>
                    </div>
                    <p className="text-sm">Today, 10:32 AM</p>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/40 rounded-md">
                    <div className="text-sm">
                      <p className="font-medium">Account Created</p>
                    </div>
                    <p className="text-sm">Jan 15, 2023</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your personal information and contact details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          {...profileForm.register("name")}
                        />
                        {profileForm.formState.errors.name && (
                          <p className="text-sm text-destructive">{profileForm.formState.errors.name.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...profileForm.register("email")}
                        />
                        {profileForm.formState.errors.email && (
                          <p className="text-sm text-destructive">{profileForm.formState.errors.email.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title</Label>
                        <Input
                          id="title"
                          {...profileForm.register("title")}
                        />
                        {profileForm.formState.errors.title && (
                          <p className="text-sm text-destructive">{profileForm.formState.errors.title.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input
                          id="department"
                          {...profileForm.register("department")}
                        />
                        {profileForm.formState.errors.department && (
                          <p className="text-sm text-destructive">{profileForm.formState.errors.department.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number</Label>
                        <Input
                          id="phoneNumber"
                          {...profileForm.register("phoneNumber")}
                        />
                      </div>
                      
                      <div className="col-span-1 md:col-span-2 space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                          id="bio"
                          className="min-h-32"
                          {...profileForm.register("bio")}
                        />
                      </div>
                    </div>
                    
                    <Button type="submit" className="mt-6">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>
                    Update your password to secure your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)}>
                    <div className="grid gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type="password"
                            {...passwordForm.register("currentPassword")}
                          />
                          <Key className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                        {passwordForm.formState.errors.currentPassword && (
                          <p className="text-sm text-destructive">{passwordForm.formState.errors.currentPassword.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          {...passwordForm.register("newPassword")}
                        />
                        {passwordForm.formState.errors.newPassword && (
                          <p className="text-sm text-destructive">{passwordForm.formState.errors.newPassword.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          {...passwordForm.register("confirmPassword")}
                        />
                        {passwordForm.formState.errors.confirmPassword && (
                          <p className="text-sm text-destructive">{passwordForm.formState.errors.confirmPassword.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <Button type="submit" className="mt-6">
                      Update Password
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="bg-muted/50 flex flex-col items-start">
                  <div className="text-sm">
                    <h4 className="font-medium">Password Requirements:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                      <li>At least 8 characters long</li>
                      <li>Include at least one uppercase letter</li>
                      <li>Include at least one number</li>
                      <li>Include at least one special character</li>
                    </ul>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AccountAdmin;
