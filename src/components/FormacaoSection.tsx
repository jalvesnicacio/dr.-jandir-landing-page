import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const formacoes = [
  {
    ano: "1998 - 2003",
    titulo: "Graduação em Medicina",
    instituicao: "Universidade Federal de Alagoas  - UFAL"
  },
  {
    ano: "2005 - 2007",
    titulo: "Especialização - residência médica em Clínica Médica.",
    instituicao: "Hospital Regional de Taguatinga - HRT"
  },
  {
    ano: "2007 - 2009",
    titulo: "Especialização - residência médica em: Hematologia e Hemoterapia.",
    instituicao: "Faculdade de Medicina de São José do Rio Preto - FAMERP "
  },
  {
    ano: "2018 - 2020",
    titulo:
      "Especialização em IMUNOFENOTIPAGEM POR CITOMETRIA DE FLUXO E IMUNOLOGIA.",
    instituicao:
      "Instituto de Pesquisa e Educação em Saúde de São Paulo - IPESSP"
  },
  {
    ano: "2019 - 2021",
    titulo: "Mestrado em Ciências da Saúde e Biológicas.",
    instituicao: "Universidade Federal do Vale do São Francisco  - UNIVASF"
  },
  {
    ano: "2021 - 2025",
    titulo: "Doutorado em Ecologia Humana e Gestão Sócio Ambiental.",
    instituicao: "Universidade Estadual do Sudoeste da Bahia - UESB"
  }
];

const FormacaoSection = () => {
  return (
    <section id="formacao" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Formação Acadêmica</h2>
          <p className="section-subtitle mx-auto">
            Trajetória de excelência acadêmica e profissional
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-0 relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          {formacoes.map((item, i) => (
            <motion.div
              key={item.titulo}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-8 pb-12"
            >
              {/* Dot */}
              <div className="absolute left-[18px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-secondary border-4 border-background z-10" />

              <div
                className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}
              >
                <span className="text-secondary font-bold text-sm">
                  {item.ano}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1">
                  {item.titulo}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {item.instituicao}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormacaoSection;
