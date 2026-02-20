import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Star } from "lucide-react";

export default function Home() {
  const products = [
    {
      title: "Granola Salgada Lemon Pepper",
      price: "R$ 35,00",
      description: "Uma explosão de sabor com o toque cítrico do lemon pepper. Perfeita para saladas, sopas ou como snack saudável a qualquer hora.",
      image: "/images/granola-salgada-original.png",
      link: "https://loja.infinitepay.io/granarte_granolas/crv9741-granola-salgada-lemon-pepper",
      type: "salty" as const
    },
    {
      title: "Granola Tradicional",
      price: "R$ 35,00",
      description: "A clássica receita caseira. Crocante, dourada e com a doçura equilibrada do mel. Ideal para acompanhar iogurtes, frutas e açaí.",
      image: "/images/granola-doce-original.png",
      link: "https://loja.infinitepay.io/granarte_granolas/nll8466-granola-tradicional",
      type: "sweet" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/images/logo-granarte.png" alt="Gran'Arte Logo" className="h-16 w-auto" />
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">Gran'Arte</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Início</a>
            <a href="#produtos" className="hover:text-primary transition-colors">Produtos</a>
            <a href="#sobre" className="hover:text-primary transition-colors">Nossa História</a>
            <Button size="sm" className="rounded-full" asChild>
              <a href="#produtos">Peça Agora</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src="/images/hero-granola.png" 
            alt="Granola Artesanal" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-20 px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-xs uppercase tracking-widest mb-6 font-medium">
              100% Artesanal & Natural
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              A Arte em forma <br/> de <span className="text-amber-200 italic">Granola</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Produzida artesanalmente com ingredientes selecionados para nutrir seu corpo e encantar seu paladar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-100 text-amber-900 hover:bg-white rounded-full px-8 h-12 text-base" asChild>
                <a href="#produtos">Ver Produtos</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Stripe */}
      <div className="bg-primary py-12 text-primary-foreground">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center gap-3">
            <Leaf className="w-8 h-8 opacity-80" />
            <h3 className="font-serif text-lg">Ingredientes Naturais</h3>
            <p className="text-sm opacity-80 max-w-xs">Sem conservantes artificiais, apenas o melhor da natureza.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Heart className="w-8 h-8 opacity-80" />
            <h3 className="font-serif text-lg">Feito com Amor</h3>
            <p className="text-sm opacity-80 max-w-xs">Produção artesanal em pequenos lotes para garantir qualidade.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Star className="w-8 h-8 opacity-80" />
            <h3 className="font-serif text-lg">Sabor Único</h3>
            <p className="text-sm opacity-80 max-w-xs">Receitas exclusivas que equilibram saúde e prazer.</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Nossas Criações</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Escolha entre o doce conforto da tradição ou a ousadia do sabor salgado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="/images/hero-granola.png" 
                  alt="Processo artesanal" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-primary font-bold tracking-wider text-sm uppercase mb-4 block">Nossa Essência</span>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
                Mais que um alimento, <br/> um estilo de vida.
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                A Gran'Arte nasceu do desejo de oferecer uma alimentação de verdade, sem abrir mão do sabor. 
                Acreditamos que o que comemos transforma quem somos.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Cada lote é preparado cuidadosamente, respeitando o tempo de cada ingrediente para alcançar 
                a crocância perfeita e o equilíbrio ideal de sabores.
              </p>
              <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="https://wa.me/5511976350421">Fale Conosco</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
            <img src="/images/logo-granarte.png" alt="Gran'Arte Logo" className="h-16 w-auto brightness-0 invert" />
            <div>
              <h3 className="font-serif text-2xl font-bold mb-2">Gran'Arte</h3>
              <p className="text-white/60 text-sm">Nutrindo corpo e alma.</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-white/80">
            <a href="https://www.instagram.com/granarte_granolas/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/5511976350421" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
          <div className="text-xs text-white/40">
            © 2026 Gran'Arte. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}