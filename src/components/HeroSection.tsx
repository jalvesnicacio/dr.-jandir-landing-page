import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-drjandir.png";

const HeroSection = () => {
  const phone = "5587999763035";
  const message = encodeURIComponent(
    "Olá, gostaria de agendar uma consulta com o Dr. Jandir Nicacio."
  );
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-secondary font-semibold uppercase tracking-widest text-sm mb-4">
            Médico — Petrolina, PE
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Dr. Jandir
            <br />
            <span className="text-primary">Nicacio</span>
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Hematologista com ênfase em Coagulopatias e Onco-Hematologia
          </h3>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Sou o Dr. Jandir, médico hematologista e onco-hematologista,
            comprometido em oferecer um atendimento humanizado para pacientes
            com doenças do sangue e do sistema imunológico.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
            Aqui, você encontra informações sobre meu trabalho e como posso
            ajudar no seu tratamento. Cuidado médico humanizado com excelência e
            dedicação. Sua saúde em boas mãos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <a
                href={`https://wa.me/${phone}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#sobre">Conheça o Doutor</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 md:w-96 lg:w-[28rem]">
            <div className="absolute -inset-4 bg-secondary/20 rounded-3xl -rotate-3" />
            <img
              src={heroImg}
              alt="Dr. Jandir Nicacio"
              className="relative rounded-3xl shadow-2xl object-cover w-full aspect-[4/5]"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
