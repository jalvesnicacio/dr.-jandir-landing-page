import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

const stats = [
  { icon: Heart, label: "Pacientes Atendidos", value: "5.000+" },
  { icon: Award, label: "Anos de Experiência", value: "15+" },
  { icon: Users, label: "Atendimento Humanizado", value: "100%" },
];

const SobreSection = () => {
  return (
    <section id="sobre" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">Sobre o Dr. Jandir</h2>
          <p className="section-subtitle mx-auto">
            Com mais de 15 anos de experiência, o Dr. Jandir Nicacio é referência em 
            atendimento médico na região de Petrolina, PE. Comprometido com a medicina 
            baseada em evidências e o cuidado humanizado, oferece um atendimento completo 
            e personalizado para cada paciente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary font-display mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
