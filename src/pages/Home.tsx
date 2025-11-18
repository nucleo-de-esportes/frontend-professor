import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, CheckSquare, Square } from 'lucide-react';
import MainContainer from '../components/MainContainer'
import Button from '../components/Button';

interface Turma {
  id_turma: number;
  modalidade: string;
  sigla: string;
  hora_inicio: string;
  hora_fim: string;
  dia_semana: string;
  local: string;
  total_alunos: number;
}

interface Aluno {
  id: number;
  nome: string;
  presente: boolean;
}

type AlunosPorTurma = Record<number, Aluno[]>;

const AttendanceSystem = () => {
  const [selectedDate] = useState('26/09');

  // Dados hardcoded das turmas
  const turmas: Turma[] = [
    {
      id_turma: 1,
      modalidade: "FUTEBOL",
      sigla: "A",
      hora_inicio: "14:00",
      hora_fim: "15:00",
      dia_semana: "Segunda-feira",
      local: "BLOCO 10",
      total_alunos: 15
    },
    {
      id_turma: 2,
      modalidade: "CORRIDA",
      sigla: "B2",
      hora_inicio: "16:00",
      hora_fim: "17:00",
      dia_semana: "Segunda-feira",
      local: "BLOCO 10",
      total_alunos: 12
    },
    {
      id_turma: 3,
      modalidade: "FUTEBOL",
      sigla: "A",
      hora_inicio: "14:00",
      hora_fim: "15:00",
      dia_semana: "Segunda-feira",
      local: "BLOCO 10",
      total_alunos: 15
    }
  ];

  const [selectedTurma, setSelectedTurma] = useState<Turma | null>(turmas[0]);

  // Dados hardcoded dos alunos por turma
  const alunosPorTurma: AlunosPorTurma = {
    1: [
      { id: 1, nome: "Fulano da Silva", presente: true },
      { id: 2, nome: "Ciclano Pereira", presente: true },
      { id: 3, nome: "Beltrano de Souza", presente: false }
    ],
    2: [
      { id: 4, nome: "João Santos", presente: true },
      { id: 5, nome: "Maria Oliveira", presente: false },
      { id: 6, nome: "Pedro Costa", presente: true }
    ],
    3: [
      { id: 7, nome: "Ana Paula", presente: true },
      { id: 8, nome: "Carlos Mendes", presente: true },
      { id: 9, nome: "Juliana Rocha", presente: false }
    ]
  };

  const [alunos] = useState<AlunosPorTurma>(alunosPorTurma);

  const handleTurmaClick = (turma: Turma) => {
    setSelectedTurma(turma);
  };

  return (
    <MainContainer>
    <div className="h-full w-full p-8 flex flex-col">
      <div className="mx-auto w-full flex flex-col h-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#340C2F] mb-8">
          BEM VINDO, PROF. LUIZ FELIPE III!
        </h1>

        <div className="flex gap-6 flex-grow">
          {/* Painel Esquerdo - Lista de Turmas */}
          <div className="bg-white rounded-lg shadow-md p-6 w-1/2 border-2 border-[#340C2F]">
            {/* Seletor de Data */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <button className="p-2 hover:bg-gray-100 rounded">
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Calendar size={20} />
                <span>{selectedDate}</span>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded">
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lista de Turmas */}
            <div className="space-y-2 -mx-6">
              {turmas.map((turma) => (
                <div
                key={turma.id_turma}
                onClick={() => handleTurmaClick(turma)}
                className={`p-4 px-6 cursor-pointer transition-colors ${
                  selectedTurma?.id_turma === turma.id_turma
                    ? 'bg-[#FFDAFA]'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="flex flex-col font-semibold text-[#340C2F]">
                        <span>{turma.hora_inicio}</span>
                        <span>{turma.hora_fim}</span>
                      </div>
                      <div className="h-12 w-0.5" style={{ backgroundColor: '#FF7AED' }}></div>
                      <div>
                        <div className="font-semibold text-[#340C2F]">
                          TURMA {turma.sigla} - {turma.modalidade}
                        </div>
                        <div className="text-[#340C2F]">
                          {turma.local}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Painel Direito - Lista de Alunos */}
          <div className="bg-white p-6 w-1/2 flex flex-col">
            {selectedTurma ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#340C2F] mb-1">
                    TURMA {selectedTurma.sigla} - {selectedTurma.modalidade}
                  </h2>
                  <p className="text-[#340C2F]">{selectedTurma.local}</p>
                </div>

            {/* Lista de Alunos */}
            <div className="space-y-3">
              {alunos[selectedTurma.id_turma]?.map((aluno) => (
                <div
                  key={aluno.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                      <User size={24} className="text-[#340C2F]" />
                    </div>
                    <span className="font-medium text-[#340C2F]">{aluno.nome}</span>
                  </div>
                  <button
                    className="p-1"
                  >
                    {aluno.presente ? (
                      <CheckSquare size={28} className="text-[#340C2F]" />
                    ) : (
                      <Square size={28} className="text-[#340C2F]" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Botão Chamada logo abaixo da lista */}
            <div className="mt-4 flex justify-end">
              <div className="w-[35%]">
                <Button icon={Calendar} text='Chamada'/>
              </div>
            </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-[#340C2F] text-lg">
                Selecione uma turma para ver os alunos
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </MainContainer>
  );
};

export default AttendanceSystem;