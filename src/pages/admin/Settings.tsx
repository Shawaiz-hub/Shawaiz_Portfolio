
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Download, Upload, Moon, Sun, Palette } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SettingsPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("Shawaiz");
  const [email, setEmail] = useState("admin@example.com");
  const [darkMode, setDarkMode] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const { toast } = useToast();

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile details have been updated successfully.",
    });
  };

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Password changed",
      description: "Your password has been updated successfully.",
    });
    setPassword("");
    setConfirmPassword("");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    toast({
      title: `${darkMode ? "Light" : "Dark"} mode activated`,
      description: `Theme has been changed to ${darkMode ? "light" : "dark"} mode.`,
    });
  };

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
    toast({
      title: `Animations ${animationsEnabled ? "disabled" : "enabled"}`,
      description: `Website animations have been ${animationsEnabled ? "disabled" : "enabled"}.`,
    });
  };

  const handleBackup = () => {
    toast({
      title: "Backup created",
      description: "A backup of your website data has been created.",
    });
  };

  const handleRestore = () => {
    toast({
      title: "Data restored",
      description: "Your website data has been restored from backup.",
    });
  };

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <Tabs defaultValue="profile">
        <TabsList className="grid grid-cols-2 w-[400px]">
          <TabsTrigger value="profile">Account Settings</TabsTrigger>
          <TabsTrigger value="preferences">Website Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card className="backdrop-blur-lg bg-black/30 border-white/10">
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your account details
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleProfileUpdate}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </Card>
          
          <Card className="backdrop-blur-lg bg-black/30 border-white/10">
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>
                Update your password
              </CardDescription>
            </CardHeader>
            <form onSubmit={handlePasswordChange}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">New Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit">Change Password</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="mt-6 space-y-6">
          <Card className="backdrop-blur-lg bg-black/30 border-white/10">
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>
                Customize how your website looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Dark Mode</Label>
                  <div className="text-sm text-muted-foreground">
                    Toggle between light and dark theme
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4" />
                  <Switch
                    checked={darkMode}
                    onCheckedChange={toggleDarkMode}
                  />
                  <Moon className="h-4 w-4" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Animations</Label>
                  <div className="text-sm text-muted-foreground">
                    Enable or disable website animations
                  </div>
                </div>
                <Switch
                  checked={animationsEnabled}
                  onCheckedChange={toggleAnimations}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="flex items-center space-x-2">
                  <Palette className="h-4 w-4" />
                  <input
                    type="color"
                    defaultValue="#0066cc"
                    className="w-16 h-8 p-0 cursor-pointer"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-lg bg-black/30 border-white/10">
            <CardHeader>
              <CardTitle>Backup & Restore</CardTitle>
              <CardDescription>
                Manage your website data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Create Backup</Label>
                <div className="text-sm text-muted-foreground">
                  Export all your website data
                </div>
                <Button onClick={handleBackup} className="mt-2">
                  <Download className="mr-2 h-4 w-4" /> Download Backup
                </Button>
              </div>
              
              <div className="space-y-2">
                <Label>Restore Data</Label>
                <div className="text-sm text-muted-foreground">
                  Restore from a previous backup
                </div>
                <Button variant="outline" onClick={handleRestore} className="mt-2">
                  <Upload className="mr-2 h-4 w-4" /> Restore Backup
                </Button>
                <a href="https://drive.google.com/drive/folders/1V_mTVpV1vtTAlk0aW093tYBKdhlhh2FQ?usp=drive_link">click me drvie<a/>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingsPage;
