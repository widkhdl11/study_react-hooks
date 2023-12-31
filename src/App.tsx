import { FC, useState } from "react";
import StatePractice from "./components/StatePractice";
import EffectPractice from "./components/EffectPractice";
import Weather from "./components/Weather";

//type Color = "bg-purple-500" | "bg-blue-500" | "bg-pink-500";

const App: FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const onClickView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="bg-red-100 min-h-screen flex flex-col justify-center items-center">
      <Weather />
    </div>
  );
};

export default App;
