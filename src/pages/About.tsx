import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap } from "lucide-react";

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">About TaskMaster</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Helping you achieve clarity and focus, one task at a time.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
              <Target className="h-8 w-8" />
            </div>
            <CardTitle className="mt-4">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Our mission is to provide a simple, elegant, and powerful tool to help individuals and teams organize their work and life. We believe that a clear mind leads to better results.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
              <Zap className="h-8 w-8" />
            </div>
            <CardTitle className="mt-4">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We envision a world where everyone can effortlessly manage their responsibilities, reduce stress, and have more time for what truly matters. Productivity should be accessible to all.
            </p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
              <Users className="h-8 w-8" />
            </div>
            <CardTitle className="mt-4">Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We are a passionate group of designers, developers, and product thinkers dedicated to creating beautiful and functional software that makes a real difference in people's lives.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}