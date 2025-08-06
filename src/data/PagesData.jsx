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
import Tabs from "../pages/Tabs";
import StarRating from "../pages/StarRating";
import PasswordStrengthMeter from "../pages/PasswordStrengthMeter";
import Modal from "../pages/Modal";
import ToggleAccordion from "../pages/ToggleAccordion";
export const PagesData = [
  {
    link: "/loginFormWithValidation",
    screen: <LoginFormWithValidation />,
    name: "Login Form With Validation",
  },
  {
    link: "/todoList",
    screen: <TodoList />,
    name: "Todo List",
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
    link: "/stopWatch",
    screen: <StopWatch />,
    name: "Stop Watch ",
  },
  {
    link: "/searchFilterInput",
    screen: <SearchFilterInput />,
    name: "Search Filter Input",
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
  {
    link: "/tabs",
    screen: <Tabs />,
    name: "Build Tabs Components",
  },
  {
    link: "/starRating",
    screen: <StarRating />,
    name: "Build Star Ratings Components",
  },
  {
    link: "/password-strength-meter",
    screen: <PasswordStrengthMeter />,
    name: "Implement a Password Strength Meter",
  },
  {
    link: "/modal",
    screen: <Modal />,
    name: "Build Modal Components",
  },
  {
    link: "/toggleAccordion",
    screen: <ToggleAccordion />,
    name: "Build Accordion Components",
  },
];
