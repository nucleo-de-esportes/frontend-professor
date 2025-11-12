import MainContainer from '../components/MainContainer';
import { PenLine } from 'lucide-react';
import Button from '../components/Button';

export default function SeusAvisos() {
    return (
      <MainContainer>
        <div className="h-full w-full p-8">
          <div className="w-full h-full flex flex-col">
            <h1 className="text-4xl font-bold text-[#340C2F] mb-12">
              SEUS AVISOS
            </h1>
            
            <div className="flex-grow flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm font-semibold text-[#340C2F] tracking-wide">
                  VOCÊ AINDA NÃO MANDOU
                </p>
                <p className="text-sm font-semibold text-[#340C2F] tracking-wide">
                  NENHUM AVISO
                </p>
              </div>
            </div>

            <div className='flex w-full justify-end'>
                <div>
                    <Button icon={PenLine} text='Escrever' size='lg'/>
                </div>
            </div>
          </div>
        </div>
      </MainContainer>
    );
}