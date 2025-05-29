import { useTaskContext } from '../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../utils/getNextCycle'
import { getNextCycleType } from '../utils/getNextCycleType'
import styles from './styles.module.css'

export const Cycles = () => {

  const { state } = useTaskContext()

  //Array.from({length:}) cria um array com o numero de posições que você deseja, declarando o numero depois de length
  //Aqui passamos o valor current que vai adicionando de 1 em 1 quando enviamos nosso form e o setState seta o currentCycle como 1,2,3...
  const cycleStep = Array.from({ length: state.currentCycle })
 
  //Para descrever os icones de ciclos para melhor acessibilidade
  const cycleDescriptionMap = {
    workTime: 'foco',
    shortBreakTime: 'descando curto',
    longBreakTime: 'descanso longo'
  }

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      <div className={styles.cycleDots}>

{/* Aqui mapeamos os index do nosso array para passar a nossa função que sempre retorna em sequencia os ciclos de 1 a 8 */}
{/* Utilizamos nossa outra função para retornar o tipo de ação que deve ser tomada com base nos ciclos  */}
{/*Por fim retornamos os cycleDots porém o estilo vai se alterando de acordo com o que retorna da função armazenada em nextCycleType  */}
        {
          cycleStep.map((_, index) => {
            const nextCycle = getNextCycle(index)
            const nextCycleType = getNextCycleType(nextCycle)
            return (
              <span 
              //No react precisamos passar uma key sempre que renderizarmos componentes em uma função .map
              //No caso você pode usar qualquer valor que seja unico, talvez o parametro index da função .map resolva porém não é uma boa prática
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`} //para descrever o que significa a bolinha
              title={`indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              ></span>
              
            )
          }
          )
        }

      </div>

    </div>
  )
}