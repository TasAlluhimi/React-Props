import './App.css'
import Programers from './assets/component/Programers'
import Companies from './assets/component/Companies'
import Services from './assets/component/Services'

function App() {

  return (
    <>
      <Companies com_name="Aramco" emp_num="10293" year="1978" services="oil-Gas" Prices="1000"
      name = "Tasneem" Languages="HTML, CSS, JS, PHP" exp="2 years" cn="Aramco"
      name1 = "nuha" Languages1="JS" exp1="12 years" cn1="Aramco"
      name2 = "maram" Languages2="PHP" exp2="5 years" cn2="Aramco"
      ></Companies>

      <Companies com_name="Tuwaiq Academy" emp_num="10293" year="1978" services="Education" Prices="0"
      name = "Tasneem" Languages="HTML, CSS, JS, PHP" exp="2 years" cn="Tuwaiq Academy"
      name1 = "nuha" Languages1="JS" exp1="12 years" cn1="Tuwaiq Academy"
      name2 = "maram" Languages2="PHP" exp2="5 years" cn2="Tuwaiq Academy"
      ></Companies>

      <Companies com_name="Tasneem company" emp_num="10293" year="1978" services="oil-Gas" Prices="2000"
      name = "Tasneem" Languages="HTML, CSS, JS, PHP" exp="2 years" cn="Tasneem company"
      name1 = "nuha" Languages1="JS" exp1="12 years" cn1="Tasneem company"
      name2 = "maram" Languages2="PHP" exp2="5 years" cn2="Tasneem company"
      ></Companies>
    </>
  )
}

export default App
