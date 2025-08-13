import { Card, CardContent } from "@/components/ui/card";

interface StatsSectionProps {
  stats: {
    number: string;
    label: string;
    description: string;
  }[];
}

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Join our community of professionals who've transformed their workspaces
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-text-heading mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-text-light">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;