import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, User, CheckSquare, Square } from 'lucide-react';
import MainContainer from '../components/MainContainer'

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
      { id: 2, nome: "Cicarano Pereira", presente: true },
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

  const [alunos, setAlunos] = useState<AlunosPorTurma>(alunosPorTurma);

  const handleTurmaClick = (turma: Turma) => {
    setSelectedTurma(turma);
  };

  const togglePresenca = (alunoId: number) => {
    if (!selectedTurma) return;
    
    setAlunos(prev => ({
      ...prev,
      [selectedTurma.id_turma]: prev[selectedTurma.id_turma].map(aluno =>
        aluno.id === alunoId ? { ...aluno, presente: !aluno.presente } : aluno
      )
    }));
  };

  return (
    <MainContainer>
    <div className="h-screen w-screen p-8 flex flex-col">
      <div className="mx-auto w-full flex flex-col h-full">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          BEM VINDO, PROF. LUIZ FELIPE III!
        </h1>

        <div className="flex gap-6 flex-grow">
          {/* Painel Esquerdo - Lista de Turmas */}
          <div className="bg-white rounded-lg shadow-md p-6 w-1/2">
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
            <div className="space-y-2">
              {turmas.map((turma, index) => (
                <div
                  key={turma.id_turma}
                  onClick={() => handleTurmaClick(turma)}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedTurma?.id_turma === turma.id_turma
                      ? 'bg-purple-200 border-2 border-purple-400'
                      : index === 0
                      ? 'bg-pink-100'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-semibold text-gray-800">
                        {turma.hora_inicio} TURMA {turma.sigla} - {turma.modalidade}
                      </div>
                      <div className="text-gray-600">
                        {turma.hora_fim} {turma.local}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Painel Direito - Lista de Alunos */}
          <div className="bg-white rounded-lg shadow-md p-6 w-1/2 flex flex-col">
            {selectedTurma ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">
                    TURMA {selectedTurma.sigla} - {selectedTurma.modalidade}
                  </h2>
                  <p className="text-gray-600">{selectedTurma.local}</p>
                </div>

                {/* Lista de Alunos */}
                <div className="space-y-3 flex-grow">
                  {alunos[selectedTurma.id_turma]?.map((aluno) => (
                    <div
                      key={aluno.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <User size={24} className="text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-800">{aluno.nome}</span>
                      </div>
                      <button
                        onClick={() => togglePresenca(aluno.id)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        {aluno.presente ? (
                          <CheckSquare size={28} className="text-gray-800" />
                        ) : (
                          <Square size={28} className="text-gray-400" />
                        )}
                      </button>
                    </div>
                  ))}
                </div>

                {/* Botão Chamada no canto inferior direito */}
                <div className="mt-6 flex justify-end">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors">
                    <Calendar size={18} />
                    Chamada
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-lg">
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