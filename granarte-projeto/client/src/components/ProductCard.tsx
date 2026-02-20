import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  image: string;
  link: string;
  type: "sweet" | "salty";
}

export default function ProductCard({ title, price, description, image, link, type }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-card">
        <div className="relative aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <Badge 
            className={`absolute top-4 right-4 z-20 ${
              type === 'sweet' ? 'bg-amber-100 text-amber-800 hover:bg-amber-100' : 'bg-green-100 text-green-800 hover:bg-green-100'
            }`}
          >
            {type === 'sweet' ? 'Doce' : 'Salgada'}
          </Badge>
        </div>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-serif text-xl font-bold text-foreground">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button 
            asChild 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Comprar Agora
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}