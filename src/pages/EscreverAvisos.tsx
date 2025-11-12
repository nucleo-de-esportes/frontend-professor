import MainContainer from '../components/MainContainer';
import Button from '../components/Button';

export default function SeusAvisos() {
    return (
      <MainContainer>
        <div className="h-full w-full p-8">
          <div className="w-full h-full flex flex-col">
            <h1 className="text-4xl font-bold text-[#340C2F] mb-8">
              NOVO AVISO
            </h1>
            
            <div className="w-[85%] h-[80%] border-1 border-[#340C2F] rounded-lg p-6 flex flex-col mx-auto">
              <div className="mb-4 flex items-center gap-2">
                <p className="text-lg font-bold text-[#340C2F]">
                  PARA:
                </p>
                <input 
                  type="text" 
                  className="flex-grow outline-none text-lg text-[#340C2F] bg-transparent"
                  placeholder="Digite o destinatário"
                />
              </div>
              
              <div className="mb-4 flex-grow flex flex-col">
                <p className="text-lg font-bold text-[#340C2F] mb-2">
                  ASSUNTO:
                </p>
                <textarea 
                  className="w-full flex-grow outline-none text-lg text-[#340C2F] resize-none bg-transparent"
                  placeholder="Digite o assunto do aviso"
                />
              </div>
              
              <div className='flex w-full justify-end'>
                <div>
                    <Button text='Enviar' size='lg'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    );
}