
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Check, Clock, Search, ArrowRight, Megaphone, BarChart, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { departments } from "@/utils/mockData";

const Index = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
      
      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold mb-1">5k+</h3>
                <p className="text-sm text-muted-foreground">Complaints Resolved</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold mb-1">24h</h3>
                <p className="text-sm text-muted-foreground">Avg. Response Time</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold mb-1">15+</h3>
                <p className="text-sm text-muted-foreground">Government Agencies</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-4xl font-bold mb-1">94%</h3>
                <p className="text-sm text-muted-foreground">Citizen Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-display">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform streamlines the process of submitting and resolving civic complaints through a simple, transparent workflow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Submit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  File your complaint or feedback through our easy-to-use form with relevant details.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Track</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Monitor the status of your submission through our real-time tracking system.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Wait</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive updates as your complaint is processed by the relevant government agency.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Resolved</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get notified when your issue is resolved and provide feedback on the resolution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-primary/10 text-primary inline-flex rounded-full px-3 py-1 text-sm font-medium mb-2">
                Powerful Features
              </div>
              <h2 className="text-3xl font-bold tracking-tight font-display">Empower citizens and improve public services</h2>
              <p className="text-lg text-muted-foreground">
                Our platform helps bridge the gap between citizens and government agencies, making public service delivery more efficient and responsive.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 rounded-full p-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Real-time tracking</h3>
                    <p className="text-muted-foreground">Monitor the status of your complaints with live updates</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 rounded-full p-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Direct communication</h3>
                    <p className="text-muted-foreground">Communicate directly with government officials handling your case</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-3 bg-primary/10 rounded-full p-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Data-driven insights</h3>
                    <p className="text-muted-foreground">Help government agencies identify and address systemic issues</p>
                  </div>
                </li>
              </ul>
              
              <Button asChild className="mt-2">
                <Link to="/submit">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Citizens engaging with government services" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight font-display mb-4">Report Issues By Category</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our platform handles a wide range of public service issues, categorized for efficient routing and resolution.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(departments).map(([key, value]) => (
              <Link key={key} to={`/submit?category=${key}`}>
                <div className="bg-card rounded-lg p-6 text-center h-full flex flex-col justify-center items-center shadow-sm hover:shadow-md transition-shadow border">
                  <h3 className="font-medium">{value}</h3>
                  <p className="text-sm text-muted-foreground mt-2">Report an issue</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-display">What Citizens Are Saying</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from citizens who have used our platform to resolve their issues with public services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Megaphone className="h-5 w-5 text-primary mr-2" />
                <p className="font-medium">Road Maintenance</p>
              </div>
              <p className="text-muted-foreground mb-4">
                "I reported a pothole on my street and it was fixed within a week. The ability to track the status of my complaint in real-time was really helpful."
              </p>
              <div className="flex items-center mt-auto pt-4 border-t">
                <div className="w-10 h-10 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                  <span className="font-medium text-primary">JS</span>
                </div>
                <div>
                  <p className="font-medium">James Smith</p>
                  <p className="text-xs text-muted-foreground">Downtown Resident</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Megaphone className="h-5 w-5 text-primary mr-2" />
                <p className="font-medium">Public Parks</p>
              </div>
              <p className="text-muted-foreground mb-4">
                "I submitted a complaint about broken playground equipment at our local park. Not only was it fixed quickly, but I received updates throughout the entire process."
              </p>
              <div className="flex items-center mt-auto pt-4 border-t">
                <div className="w-10 h-10 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                  <span className="font-medium text-primary">ML</span>
                </div>
                <div>
                  <p className="font-medium">Maria Lopez</p>
                  <p className="text-xs text-muted-foreground">Parent & Community Advocate</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Megaphone className="h-5 w-5 text-primary mr-2" />
                <p className="font-medium">Waste Management</p>
              </div>
              <p className="text-muted-foreground mb-4">
                "After struggling with irregular garbage collection for months, I submitted a complaint through this platform. The issue was resolved permanently, and follow-up was excellent."
              </p>
              <div className="flex items-center mt-auto pt-4 border-t">
                <div className="w-10 h-10 bg-primary/20 rounded-full mr-3 flex items-center justify-center">
                  <span className="font-medium text-primary">RT</span>
                </div>
                <div>
                  <p className="font-medium">Robert Thompson</p>
                  <p className="text-xs text-muted-foreground">Business Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* App Download Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight font-display">Get the Mobile App</h2>
              <p className="text-xl opacity-90">
                Report issues on the go and receive notifications directly to your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" className="gap-2">
                  <Download className="h-5 w-5" />
                  <span>App Store</span>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 gap-2">
                  <Download className="h-5 w-5" />
                  <span>Google Play</span>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Mobile app on smartphone" 
                  className="relative w-full max-w-[280px] rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Analytics Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 font-display">Improving Services Through Data</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We analyze complaint data to help government agencies identify patterns and improve services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Data Analytics</CardTitle>
                <CardDescription>Helping agencies identify trends and patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our platform aggregates complaint data to help agencies identify common issues and allocate resources effectively.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Response Time</CardTitle>
                <CardDescription>Tracking and improving service delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We measure and report on response times, helping agencies improve their service delivery standards.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Citizen Feedback</CardTitle>
                <CardDescription>Continuous improvement through feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Citizen feedback on resolved complaints helps agencies continually improve their services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6 font-display">Ready to make your voice heard?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of citizens who are actively improving our community through feedback and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
              <Link to="/submit">
                Submit a Complaint
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold border-white text-white hover:bg-white/10">
              <Link to="/dashboard">
                View Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
