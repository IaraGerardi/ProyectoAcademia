import './Proposal.css';
function Proposal() {
  return (
    <div className="containerProposal">
       <div className="boxProposalText">
            <h2>¿Cual es nuestra propuesta?</h2>
            <p className='pProposal'>Programas de desarrollo profesional y descubrimiento.</p>
       </div>
        <div className="boxsProposalChildren">
            <div className="proposalBox ">
              <h3>Orientación vocacional</h3>
              <p className='pProposal'>Te entrenamos en la toma de decision tu trayecto profesional.</p>
              <button className='btnInfo'>Mas informacion</button>
            </div>
            <div className="proposalBox ">
              <h3>Re-orientacion vocacional</h3>
              <p className='pProposal'>Reinversion personal, laboral y profesional.</p>
              <button className='btnInfo'>Mas informacion</button>
            </div>
            <div className="proposalBox ">
              <h3>Espacios de aprendizaje</h3>
              <p className='pProposal'>Aprende a pensar desde otra logica.</p>
              <button className='btnInfo'>Mas informacion</button>
            </div>
        </div>
    </div>
  )
}

export default Proposal;
