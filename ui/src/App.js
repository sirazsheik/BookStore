import Welcome from './components/Welcome/welcome.jsx'
import './App.css';
import Timer from './components/timer/timer.js';

function App() {
//   const userDetailsList = [
//   {
//     uniqueNo: 1,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
//     name: 'Esther Howard',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 2,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
//     name: 'Floyd Miles',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 3,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
//     name: 'Jacob Jones',
//     role: 'Software Developer'
//   },
//   {
//     uniqueNo: 4,
//     imageUrl:
//       'https://assets.ccbp.in/frontend/react-js/esther-devon-lane.png',
//     name: 'Devon Lane',
//     role: 'Software Developer'
//   }
// ]

//   return (
//     <div className="App"> 
//    {
//     userDetailsList.map((e)=> <Welcome user={e.name} img={e.imageUrl} key={e.uniqueNo}/>
//     )
//    }
//     </div>
//   );
return <Timer />
}

export default App;
