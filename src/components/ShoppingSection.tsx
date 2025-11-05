import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products: any[] = [];

export function ShoppingSection() {
  return (
    <section id="shopping" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4">Tech Store & Gadgets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Peralatan tech, software licenses, dan learning materials eksklusif untuk developer dan IT professionals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <Badge className="absolute top-4 right-4 bg-destructive">
                    -{product.discount}%
                  </Badge>
                )}
              </div>
              <CardHeader>
                <h4>{product.name}</h4>
                <p className="text-muted-foreground">{product.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span>{product.rating}</span>
                  </div>
                  <span className="text-muted-foreground">({product.reviews})</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-primary">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Tambah ke Keranjang
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Lihat Semua Produk
          </Button>
        </div>
      </div>
    </section>
  );
}
