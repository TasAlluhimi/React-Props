import React from 'react'
import Programers from './Programers'
import Services from './Services'

function Companies(props) {
  return (
    <div>
            <h1>Company Name: {props.com_name}</h1>
            <h2>Employees num: {props.emp_num}</h2>
            <h2>Founded Year: {props.year}</h2>
            <Services services={props.services} Prices={props.Prices}></Services> 

            <br></br>
            <h1>Employee:</h1>
    <div className='card-cont'>
            <div className={props.cn == 'Tuwaiq Academy'? 'purple' : 'silver'}>
            <Programers name={props.name} Languages={props.Languages} exp={props.exp} cn={props.cn}></Programers>
            </div>
            <div className={props.cn1 == 'Tuwaiq Academy'? 'purple' : 'silver'}>
            <Programers name={props.name1} Languages={props.Languages1} exp={props.exp1} cn={props.cn1}></Programers>
            </div>
            <div className={props.cn2 == 'Tuwaiq Academy'? 'purple' : 'silver'}>
            <Programers name={props.name2} Languages={props.Languages2} exp={props.exp2} cn={props.cn2}></Programers>
            </div>
    </div>

        
        
    </div>
  )
}

export default Companies