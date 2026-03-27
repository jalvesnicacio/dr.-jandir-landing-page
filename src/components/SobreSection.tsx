import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

const stats = [
  { icon: Heart, label: "Pacientes Atendidos", value: "2.000+" },
  { icon: Award, label: "Anos de Experiência", value: "20+" },
  { icon: Users, label: "Atendimento Humanizado", value: "100%" }
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
          {/* <h4 className="section-subtitle">Uma medicina com propósito e humanidade.</h4> */}

          <p className="section-quotation my-6">
            "Cada paciente traz uma história única. Meu compromisso é ouvir,
            diagnosticar com precisão e acompanhar com cuidado em cada etapa do
            tratamento."
          </p>

          <p className="section-subtitle mx-auto my-2">
            Médico hematologista e onco-hematologista com mais de 20 anos de
            experiência no tratamento de doenças hematológicas e oncológicas.
            Atua como médico assistente no Hospital Universitário Dr. Washington
            Antonio de Barros e como professor das disciplinas de Hematologia e
            Oncologia Clínica na UNIVASF.
          </p>

          <p className="section-subtitle mx-auto my-3">
            Especialista no diagnóstico e tratamento de leucemias, linfomas,
            mieloma múltiplo, anemias, coagulopatias e doenças do sistema
            imunológico. Desenvolve também pesquisas científicas sobre doenças
            cardíacas subclínicas em populações indígenas do Nordeste
            brasileiro.
          </p>

          <span className="highlight my-10">
            <strong>CRM-PE 23006</strong> — Registro ativo no Conselho Regional
            de Medicina
          </span>
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
              <p className="text-3xl font-bold text-primary font-display mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
