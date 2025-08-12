import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Honest Reviews",
      description: "We test every product extensively and provide unbiased assessments based on real-world usage."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our reviewers include ergonomics specialists, productivity experts, and office professionals."
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "We maintain strict testing protocols and only recommend products that meet our high standards."
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "We're passionate about helping people create healthier, more productive work environments."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Editor-in-Chief",
      bio: "15+ years in ergonomics consulting and workplace design. Passionate about creating healthier office environments."
    },
    {
      name: "Mike Chen",
      role: "Senior Product Reviewer",
      bio: "Former tech journalist with expertise in monitors, keyboards, and productivity tools. Detail-oriented testing approach."
    },
    {
      name: "Dr. Amanda Rodriguez",
      role: "Ergonomics Specialist",
      bio: "PhD in Occupational Health. Specializes in chair and desk ergonomics with focus on preventing workplace injuries."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-background to-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-heading mb-6">
              About OfficeSetups Lab
            </h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We're dedicated to helping you create the perfect office setup for maximum 
              comfort, productivity, and well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-text-body leading-relaxed">
              At OfficeSetups Lab, we believe that your workspace should work for you, not against you. 
              Poor office equipment can lead to discomfort, reduced productivity, and long-term health issues. 
              That's why we thoroughly test and review office furniture, equipment, and accessories to help you 
              make informed decisions about your workspace.
            </p>
          </div>
          
          <div className="bg-accent/50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-text-heading mb-4">
              Why We Started OfficeSetups Lab
            </h3>
            <p className="text-text-body leading-relaxed">
              After years of experiencing back pain from poor office chairs and eye strain from inadequate 
              monitors, our founder Sarah Johnson realized how difficult it was to find reliable, detailed 
              reviews of office equipment. Most reviews lacked real-world testing and honest assessments. 
              We created OfficeSetups Lab to fill this gap, providing the kind of thorough, honest reviews 
              we wished we had when setting up our own workspaces.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Our Values
            </h2>
            <p className="text-xl text-text-light">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading">
                    {value.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-light">
              Experts passionate about creating better workspaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-heading">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium">
                    {member.role}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-text-light">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-6">
              Our Testing Process
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-heading mb-2">
                  Real-World Testing
                </h3>
                <p className="text-text-light">
                  Every product is used in actual office environments for weeks or months. 
                  We don't just test for a few hours – we live with these products daily.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-heading mb-2">
                  Multiple Perspectives
                </h3>
                <p className="text-text-light">
                  Products are tested by team members with different body types, work styles, 
                  and preferences to ensure comprehensive evaluation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-heading mb-2">
                  Detailed Documentation
                </h3>
                <p className="text-text-light">
                  We document everything from assembly experience to long-term durability, 
                  ensuring our reviews cover all aspects that matter to real users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;