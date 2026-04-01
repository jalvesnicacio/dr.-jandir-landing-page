import { motion } from "framer-motion";
import { Dna, Microscope, Stethoscope } from "lucide-react";

const especialidades = [
  {
    icon: Microscope,
    nome: "Hematologia e Coagulopatias"
  },
  { icon: Dna, nome: "Onco-hematologia" },
  { icon: Stethoscope, nome: "Investigação Diagnóstica" }
];

const EspecialidadesSection = () => {
  return (
    <section id="especialidades" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Especialidades</h2>
          <p className="section-subtitle mx-auto">
            Áreas de atuação e expertise médica
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {especialidades.map((esp, i) => (
            <motion.div
              key={esp.nome}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 hover:shadow-lg transition-all group cursor-default"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <esp.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="font-semibold text-foreground">{esp.nome}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EspecialidadesSection;
