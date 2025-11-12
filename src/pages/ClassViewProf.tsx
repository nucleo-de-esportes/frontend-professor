import MainContainer from '../components/MainContainer'

const TurmasGrid = () => {
  const turmas = [
    {
      id_turma: 1,
      modalidade: "FUTEBOL",
      sigla: "A1",
      hora_inicio: "10:00",
      hora_fim: "11:00",
      dia_semana: "SEG/QUA",
      local: "BLOCO 10",
      total_alunos: 15
    },
    {
      id_turma: 2,
      modalidade: "VOLEI",
      sigla: "C4",
      hora_inicio: "13:00",
      hora_fim: "14:00",
      dia_semana: "TER/QUI",
      local: "BLOCO 10",
      total_alunos: 12
    },
    {
      id_turma: 3,
      modalidade: "CORRIDA",
      sigla: "B5",
      hora_inicio: "15:00",
      hora_fim: "16:00",
      dia_semana: "SEG/QUA",
      local: "BLOCO 10",
      total_alunos: 20
    },
    {
      id_turma: 4,
      modalidade: "FUTEBOL",
      sigla: "A3",
      hora_inicio: "10:00",
      hora_fim: "11:00",
      dia_semana: "QUA/SEX",
      local: "BLOCO 10",
      total_alunos: 18
    }
  ];

  return (
<MainContainer>
    <div className="h-full w-full p-8">
      <div className="w-full h-full mx-auto">
        <h1 className="text-3xl font-bold text-[#340C2F] mb-8">
          TURMAS LECIONADAS
        </h1>
        
        <div className="w-[90%] mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {turmas.map((turma) => (
              <div
                key={turma.id_turma}
                className="bg-white border-1 border-[#340C2F] rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-xl font-bold text-[#340C2F] mb-2">
                  {turma.sigla} - {turma.modalidade}
                </h2>
                <div className="space-y-1 text-[#340C2F]">
                  <p className="font-medium">{turma.dia_semana}</p>
                  <p className="font-medium">
                    {turma.hora_inicio}-{turma.hora_fim}/{turma.local}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </MainContainer>
  );
};

export default TurmasGrid;