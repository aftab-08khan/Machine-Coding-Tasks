import FormDataCards from "../pages/FormDataCards";
import GridsLights from "../pages/GridsLights";
import Home from "../pages/Home";
import StopWatch from "../pages/StopWatch";
import TodoList from "../pages/TodoList";

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
];
