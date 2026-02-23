import heroImage from '../assets/images/hero-ingredients.png';
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Star } from "lucide-react";

export default function Home() {
  const products = [
    {
      title: "Granola Salgada Lemon Pepper",
      description: "Ingredientes: castanha de caju, lascas de amêndoas, flocos de milho, flocos de arroz, semente de abóbora, semente de girassol e Lemon Pepper. Sem glúten, vegana e sem conservantes.",
      image: "/images/granola-salgada-original.png",
      link: "https://loja.infinitepay.io/granarte_granolas/crv9741-granola-salgada-lemon-pepper",
      type: "salty" as const
    },
    {
      title: "Granola Tradicional",
      description: "Ingredientes: castanha de caju, castanha do Pará, macadâmia, avelã, nozes, amêndoas, sementes de girassol, semente de abóbora, gergelim, canela, essência de baunilha, óleo de coco, chips de coco e rapadura. Vegana e sem conservantes.",
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
            src={heroImage} 
            alt="Ingredientes Naturais" 
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
      <section id="produtos" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Nossas Granolas</h2>
            <div className="w-24 h-1 bg-amber-200 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price=""
                description={product.description}
                image={product.image}
                link={product.link}
                type={product.type}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-amber-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-amber-200/20 rounded-2xl -rotate-2" />
              <img 
                src="/images/processo-artesanal.png" 
                alt="Processo Artesanal" 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                Ingredientes que <br/> contam uma história.
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Na Gran'Arte, acreditamos que a alimentação deve ser um momento de prazer e nutrição. Por isso, selecionamos cada ingrediente para criar uma experiência única de sabor e textura.
                </p>
                <p>
                  Nossas granolas são produzidas artesanalmente, garantindo que cada pacote mantenha o padrão de qualidade e o carinho que sua saúde merece.
                </p>
                <div className="pt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-primary mb-2">100%</h4>
                    <p className="text-xs uppercase tracking-wider font-bold opacity-60">Natural</p>
                  </div>
                  <div>
                    <h4 className="font-serif text-2xl font-bold text-primary mb-2">Sabor</h4>
                    <p className="text-xs uppercase tracking-wider font-bold opacity-60">Incomparável</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/logo-granarte.png" alt="Gran'Arte Logo" className="h-12 w-auto brightness-0 invert" />
                <span className="font-serif text-2xl font-bold tracking-tight">Gran'Arte</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Transformando o seu dia a dia com granolas artesanais, nutritivas e repletas de sabor.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-sm opacity-70">
                <li><a href="#" className="hover:opacity-100 transition-opacity">Início</a></li>
                <li><a href="#produtos" className="hover:opacity-100 transition-opacity">Produtos</a></li>
                <li><a href="#sobre" className="hover:opacity-100 transition-opacity">Nossa História</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-6">Contato</h4>
              <div className="space-y-4 text-sm opacity-70">
                <p>WhatsApp: (11) 97635-0421</p>
                <p>Instagram: @granarte_granolas</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-xs opacity-50">
            <p>&copy; 2026 Gran'Arte. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
