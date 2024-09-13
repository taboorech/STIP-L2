import FirstExercise from "../../components/FirstExercise/FirstExercise";
import SecondExercise from "../../components/SecondExercise/SecondExercise";
import Tabs from "../../components/Tabs/Tabs";
import { Tab } from "../../types/tab.type";

const Home = () => {

  const tabs: Tab[] = [
    {
      title: 'Exercise 1',
      element: <FirstExercise/>
    },
    {
      title: 'Exercise 2',
      element: <SecondExercise/>
    },
  ];

  return (
    <div className="flex flex-col">
      <Tabs tabs={tabs} />
    </div>
  )
};

export default Home;