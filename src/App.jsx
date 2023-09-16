import { useGlobalContext } from './context';

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  return <h2>{isSidebarOpen.toString()}</h2>;
};
export default App;
