//Componentes sempre com CamelCase!

//Importanto arquivos css, não precisar ter um nome, importe diretamente o arquivo
import './styles/theme.css';
import './styles/global.css';

//Importando Componente

export const App = () => {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <section>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat soluta alias, molestias beatae rerum quas quis distinctio ipsum expedita accusantium! Aliquid necessitatibus voluptatem voluptatibus minima est magnam maiores sunt incidunt!</p>
          </section>
        </div>
      </div>

      <div className='container-fluid'> {/*Esse container é esticado pela pagina inteira*/}
        <div className='container'>  {/*Para alinhar o conteudo ao centro e limita-lo */}
          <div className='content'> {/*Abrigar o conteudo */}
            <section>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sit dolor assumenda beatae molestias repellat nulla laborum temporibus excepturi vel. Odit nemo consequuntur sapiente maiores odio quo praesentium vero tempora.</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
