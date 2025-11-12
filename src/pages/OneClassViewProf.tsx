import { useState } from 'react';
import { Calendar, User } from 'lucide-react';
import MainContainer from '../components/MainContainer';

export default function AttendanceList() {
    const [players, setPlayers] = useState([
        { name: 'Fulano da Silva', id: '22485926', score: '12/20', present: true },
        { name: 'Cicrano Pereira', id: '22485926', score: '15/20', present: true },
        { name: 'Beltreno de Souza', id: '22485926', score: '20/20', present: true }
      ]);

      const togglePresence = (index: number) => {
        setPlayers(players.map((player, i) => 
          i === index ? { ...player, present: !player.present } : player
        ));
      };

  return (
    <MainContainer>
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full h-full max-w-4xl bg-white p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">AI - FUTEBOL</h1>
          
          {/* Date */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Calendar className="w-6 h-6 text-[#340C2F]" />
            <span className="text-xl font-semibold text-[#340C2F]">18/04</span>
          </div>
        </div>

        {/* Players List */}
        <div className="space-y-6 mb-8">
          {players.map((player, index) => (
            <div key={index} className="flex items-center justify-between bg-white py-4">
              {/* Left side - Avatar and Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#340C2F] rounded-lg flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{player.name}</h3>
                  <p className="text-sm text-gray-600">{player.id}</p>
                </div>
              </div>

              {/* Right side - Score */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-800">{player.score}</span>
                <button
                  onClick={() => togglePresence(index)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 transition-colors cursor-pointer ${
                    player.present 
                      ? 'bg-white border-[#340C2F]' 
                      : 'bg-[#340C2F] border-[#340C2F]'
                  }`}
                >
                  <span className={`font-bold text-lg ${
                    player.present ? 'text-[#340C2F]' : 'text-white'
                  }`}>
                    F
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-[#A51692] hover:bg-[#A51692] text-white font-semibold px-12 py-3 rounded-lg shadow-md transition-colors cursor-pointer">
            Salvar
          </button>
        </div>
      </div>
    </div>
    </MainContainer>
  );
}