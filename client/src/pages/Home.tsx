/**
 * Gliniana Przystań - Home Page
 * 
 * Design Philosophy: Artisanal Minimalism
 * - Whitespace and breathing room between sections
 * - Warm earth tones: cream, terracotta, sage green
 * - Asymmetric, organic layouts that feel human
 * - Authentic imagery of real hands, real clay, real moments
 * - Serif display fonts (Lora) for elegance, sans-serif body (Poppins) for readability
 */

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Gliniana Przystań" className="h-10 w-auto" />
            <span className="font-serif font-semibold text-lg hidden sm:inline">Gliniana Przystań</span>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={scrollToContact}
            className="border-accent text-accent hover:bg-accent/10"
          >
            Kontakt
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <div className="flex flex-col justify-center space-y-6 lg:pr-8">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl md:text-6xl leading-tight">
                Miejsce, gdzie glina zamienia się w radość tworzenia
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Kameralna pracownia ceramiczna, w której dzieci i dorośli mogą zwolnić, pobrudzić ręce gliną i po prostu tworzyć.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={scrollToContact}
              >
                Umów się na zajęcia
              </Button>
            </div>
          </div>

          {/* Hero Image - Right Side */}
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/search_images/hero-sculptures.jpg"
              alt="Rzeźby ceramiczne w pracowni"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-center">O nas</h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Gliniana Przystań to kameralna pracownia ceramiczna, w której dzieci i dorośli mogą zwolnić, pobrudzić ręce gliną i po prostu tworzyć.
            </p>
            <p>
              Stawiamy na swobodę, radość i proces — bez ocen, bez presji, bez pośpiechu. Każde spotkanie to czas na kreatywność, skupienie i dobrą energię.
            </p>
            <p className="italic text-accent">
              „Tutaj nie ma błędów, tylko odkrycia. Każda ręka tworzy inaczej, i to jest piękne."
            </p>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 text-center">Pracownia i zajęcia</h2>
          <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Prowadzimy warsztaty ceramiczne dla dzieci oraz zajęcia indywidualne i grupowe. To przestrzeń, w której można spróbować czegoś nowego, rozwinąć wyobraźnię i stworzyć własne, niepowtarzalne prace z gliny.
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Workshop Interior */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/search_images/workshop-interior-real.jpg"
                alt="Wnętrze pracowni ceramicznej"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                <p className="text-white font-medium">Wnętrze pracowni</p>
              </div>
            </div>

            {/* Children Working */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/search_images/children-class.jpg"
                alt="Dzieci podczas zajęć ceramicznych"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                <p className="text-white font-medium">Zajęcia dla dzieci</p>
              </div>
            </div>

            {/* Finished Works */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src="/search_images/ceramic-products.jpg"
                alt="Gotowe wyroby ceramiczne"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-4">
                <p className="text-white font-medium">Wyroby ceramiczne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">Galeria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {/* Gallery items - all showing workshop class */}
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <img src="/search_images/workshop-class.jpg" alt="Zajęcia w pracowni" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-72">
              <img src="/search_images/pottery-wheel.jpg" alt="Dzieci przy kołach garncarskich" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <img src="/search_images/instructor-portrait.jpg" alt="Instruktor w pracowni" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-72">
              <img src="/search_images/child-pottery.jpg" alt="Dziecko pracujące z gliną" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-72">
              <img src="/search_images/artist-sculpture.jpg" alt="Artysta z rzeźbą" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="rounded-lg overflow-hidden shadow-md h-64">
              <img src="/search_images/wheel-workshop.jpg" alt="Dzieci przy kołach garncarskich" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Clay Section */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-center">Dlaczego glina?</h2>
          <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Praca z gliną wycisza, rozwija kreatywność i daje ogromną satysfakcję. To nie tylko zajęcie — to forma medytacji, droga do zrelaksowania się i powrotu do prostych przyjemności.
            </p>
            <p>
              Dla dzieci to świetna zabawa i nauka przez działanie. Rozwijają zdolności motoryczne, wyobraźnię i pewność siebie. Dla dorosłych — chwila oddechu od codzienności, przestrzeń do wyrażenia siebie bez osądów.
            </p>
            <div className="bg-secondary/10 border-l-4 border-accent p-6 rounded-r-lg mt-8">
              <p className="italic text-accent font-medium">
                „Glina uczy nas, że niedoskonałość jest piękna, że proces ważniejszy niż rezultat, i że zawsze można zacząć od nowa."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 md:py-24 bg-accent/5">
        <div className="container max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-center">Kontakt</h2>
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border">
            <p className="text-lg text-foreground/90 mb-8 text-center">
              Aby umówić się na zajęcia, zadzwoń do nas w godzinach popołudniowych:
            </p>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Numer telefonu</p>
                <p className="text-3xl font-serif font-semibold text-accent">
                  +48 795 433 109
                </p>
              </div>

              <div className="flex justify-center">
                <a 
                  href="tel:+48123456789"
                  className="inline-flex items-center gap-2"
                >
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Zadzwoń teraz
                  </Button>
                </a>
              </div>

              <p className="text-center text-sm text-muted-foreground italic">
                Najlepiej dzwonić w godzinach popołudniowych (14:00 - 18:00)
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-foreground/80">
              Czekamy na Ciebie i Twoją wyobraźnię w Glinianie Przystani!
            </p>
            <p className="text-sm text-muted-foreground">
              Gliniana Przystań © 2026. Wszystkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
