import Counter from "../pages/Counter";
import FetchAndDisplayData from "../pages/FetchAndDisplayData";
import FormDataCards from "../pages/FormDataCards";
import GridsLights from "../pages/GridsLights";
import Home from "../pages/Home";
import LoginFormWithValidation from "../pages/LoginFormWithValidation";
import SearchFilterInput from "../pages/SearchFilterInput";
import StopWatch from "../pages/StopWatch";
import ThemeToggle from "../pages/ThemeToggle";
import TodoList from "../pages/TodoList";
import VsCodeTask from "../pages/VsCodeTask";

export const PagesData = [
  {
    link: "/todoList",
    screen: <TodoList />,
    name: "Todo List",
  },
  {
    link: "/stopWatch",
    screen: <StopWatch />,
    name: "Stop Watch ",
  },
  {
    link: "/FormDataToCards",
    screen: <FormDataCards />,
    name: "Form Data to Cards  ",
  },
  {
    link: "/gridsLights",
    screen: <GridsLights />,
    name: "Grids Lights  ",
  },
  {
    link: "/vsCodeFilesFolder",
    screen: <VsCodeTask />,
    name: "Vs Code Files And Folders ",
  },
  {
    link: "/searchFilterInput",
    screen: <SearchFilterInput />,
    name: "Search Filter Input",
  },
  {
    link: "/loginFormWithValidation",
    screen: <LoginFormWithValidation />,
    name: "Login Form With Validation",
  },
  {
    link: "/fetchAndDisplayData",
    screen: <FetchAndDisplayData />,
    name: "fetch And Display Data",
  },
  {
    link: "/themeToggle",
    screen: <ThemeToggle />,
    name: "Build a Dark Mode Toggle",
  },
  {
    link: "/counter",
    screen: <Counter />,
    name: "Build a Counter using Redux",
  },
];
