import FormDataCards from "../pages/FormDataCards";
import GridsLights from "../pages/GridsLights";
import Home from "../pages/Home";
import StopWatch from "../pages/StopWatch";
import TodoList from "../pages/TodoList";
import VsCodeTask from "../pages/VsCodeTask";

export const PagesData = [
  {
    link: "/todoList",
    screen: <TodoList />,
    name: "Todo List",
    id: 1,
  },
  {
    link: "/stopWatch",
    screen: <StopWatch />,
    name: "Stop Watch ",
    id: 2,
  },
  {
    link: "/FormDataToCards",
    screen: <FormDataCards />,
    name: "Form Data to Cards  ",
    id: 3,
  },
  {
    link: "/gridsLights",
    screen: <GridsLights />,
    name: "Grids Lights  ",
    id: 4,
  },
  {
    link: "/vsCodeFilesFolder",
    screen: <VsCodeTask />,
    name: "Vs Code Files And Folders ",
    id: 5,
  },
];
