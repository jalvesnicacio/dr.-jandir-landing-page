import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const perguntas = [
  {
    pergunta: "Quando devo me preocupar com um linfonodo aumentado?",
    resposta:
      "Linfonodos (ínguas) podem aumentar por infecções comuns e geralmente regridem em algumas semanas. No entanto, você deve procurar avaliação médica quando o linfonodo persiste por mais de 3 semanas, cresce progressivamente, tem consistência endurecida, é indolor, está fixo aos tecidos ao redor, ou vem acompanhado de sintomas como febre persistente, perda de peso inexplicada ou sudorese noturna. Nesses casos, uma investigação hematológica é fundamental para descartar condições mais graves como linfomas."
  },
  {
    pergunta: "Quais são os sinais de alerta para doenças do sangue?",
    resposta:
      "Alguns sinais que merecem atenção incluem: cansaço excessivo e persistente, palidez, sangramentos frequentes ou difíceis de controlar (como sangramento nasal, gengival ou manchas roxas na pele sem trauma), infecções recorrentes, febre prolongada sem causa aparente e perda de peso sem motivo. Se você apresenta um ou mais desses sintomas, é importante realizar um hemograma e procurar um hematologista para uma avaliação completa."
  },
  {
    pergunta: "Com que frequência devo fazer exames de sangue de rotina?",
    resposta:
      "Para adultos saudáveis, recomenda-se a realização de um hemograma completo ao menos uma vez por ano como parte do check-up. Porém, pacientes com histórico de doenças hematológicas, uso de medicamentos que afetam a medula óssea, ou condições crônicas como anemia, devem realizar exames com maior frequência, conforme orientação médica. O acompanhamento regular permite a detecção precoce de alterações e um tratamento mais eficaz."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle mx-auto">
            Dúvidas comuns sobre saúde hematológica
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {perguntas.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
