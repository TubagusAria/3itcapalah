import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const insights: any[] = [];

export function InsightSection() {
  return (
    <section id="insight" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Tech Insight & Analisis</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wawasan mendalam dari para tech expert dan industry leaders untuk membantu Anda stay ahead
          </p>
        </div>

        {insights.length > 0 && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Featured Insight */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-2 h-full">
                    <div className="relative h-64 md:h-full">
                      <ImageWithFallback
                        src={insights[0].image}
                        alt={insights[0].title}
                        className="w-full h-full object-cover"
                      />
                      {insights[0].trending && (
                        <Badge className="absolute top-4 left-4 bg-accent gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <Badge variant="outline" className="mb-3">
                          {insights[0].category}
                        </Badge>
                        <h3 className="mb-3">{insights[0].title}</h3>
                        <p className="text-muted-foreground mb-4">{insights[0].excerpt}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{insights[0].readTime}</span>
                        <Button variant="ghost" className="gap-2">
                          Baca Selengkapnya
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Side Insights */}
              <div className="space-y-6">
                {insights.slice(1).map((insight) => (
                  <Card key={insight.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-40">
                      <ImageWithFallback
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover"
                      />
                      {insight.trending && (
                        <Badge className="absolute top-4 left-4 bg-accent gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <CardHeader>
                      <Badge variant="outline" className="w-fit mb-2">
                        {insight.category}
                      </Badge>
                      <h4>{insight.title}</h4>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{insight.readTime}</span>
                        <Button variant="ghost" size="sm" className="gap-2">
                          Baca
                          <ArrowRight className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Jelajahi Semua Insight
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
