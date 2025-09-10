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
import SearchWithDebounce from "../pages/SearchWithDebounce";
import CopyToClipboard from "../pages/CopyToClipboard";
import ScrollToTop from "../pages/ScrollToTop";
import PaginationTable from "../pages/PaginationTable";
import AutoCompleteInputWithAPI from "../pages/AutoCompleteInputWithAPI";
export const PagesData = [
  {
    link: "/loginFormWithValidation",
    screen: <LoginFormWithValidation />,
    name: "Login Form With Validation",
    difficulty: "easy",
    description:
      "Create a login form with client-side validation for email and password fields.",
  },
  {
    link: "/todoList",
    screen: <TodoList />,
    name: "Todo List",
    difficulty: "easy",
    description:
      "Build a todo list with add, delete, and mark-as-complete functionality.",
  },
  {
    link: "/FormDataToCards",
    screen: <FormDataCards />,
    name: "Form Data to Cards",
    difficulty: "easy",
    description:
      "Convert form input data into visually appealing card components.",
  },
  {
    link: "/gridsLights",
    screen: <GridsLights />,
    name: "Grid Lights",
    difficulty: "medium",
    description:
      "Create an interactive grid of lights that can be toggled with user interactions.",
  },
  {
    link: "/vsCodeFilesFolder",
    screen: <VsCodeTask />,
    name: "Vs Code Files And Folders",
    difficulty: "hard",
    description:
      "Build a file explorer interface similar to VS Code's sidebar.",
  },
  {
    link: "/stopWatch",
    screen: <StopWatch />,
    name: "Stop Watch",
    difficulty: "medium",
    description:
      "Implement a stopwatch with start, pause, reset, and lap time functionality.",
  },
  {
    link: "/searchFilterInput",
    screen: <SearchFilterInput />,
    name: "Search Filter Input",
    difficulty: "easy",
    description:
      "Create a search input that filters results in real-time as the user types.",
  },
  {
    link: "/fetchAndDisplayData",
    screen: <FetchAndDisplayData />,
    name: "Fetch And Display Data",
    difficulty: "medium",
    description:
      "Fetch data from an API and display it in a well-formatted UI.",
  },
  {
    link: "/themeToggle",
    screen: <ThemeToggle />,
    name: "Build a Dark Mode Toggle",
    difficulty: "easy",
    description:
      "Implement a theme toggle switch that changes between light and dark modes.",
  },
  {
    link: "/counter",
    screen: <Counter />,
    name: "Build a Counter using Redux",
    difficulty: "medium",
    description:
      "Create a counter application using Redux for state management.",
  },
  {
    link: "/tabs",
    screen: <Tabs />,
    name: "Build Tabs Components",
    difficulty: "medium",
    description:
      "Design a tabbed interface where content changes based on the selected tab.",
  },
  {
    link: "/starRating",
    screen: <StarRating />,
    name: "Build Star Ratings Components",
    difficulty: "easy",
    description:
      "Create an interactive star rating component that users can click to rate items.",
  },
  {
    link: "/password-strength-meter",
    screen: <PasswordStrengthMeter />,
    name: "Implement a Password Strength Meter",
    difficulty: "medium",
    description:
      "Build a password input with visual feedback on password strength.",
  },
  {
    link: "/modal",
    screen: <Modal />,
    name: "Build Modal Components",
    difficulty: "medium",
    description:
      "Create a reusable modal dialog component with overlay and close functionality.",
  },
  {
    link: "/toggleAccordion",
    screen: <ToggleAccordion />,
    name: "Build Accordion Components",
    difficulty: "easy",
    description:
      "Implement an accordion component that expands/collapses content sections.",
  },
  {
    link: "/searchFilterInputDebounce",
    screen: <SearchWithDebounce />,
    name: "Real-time search with debouncing",
    difficulty: "hard",
    description:
      "Create a search input that uses debouncing to optimize API calls.",
  },
  {
    link: "/copyToClipboard",
    screen: <CopyToClipboard />,
    name: "Add a Copy to Clipboard button",
    difficulty: "easy",
    description:
      "Implement a button that copies text to the clipboard with feedback.",
  },
  {
    link: "/scrollToTop",
    screen: <ScrollToTop />,
    name: "Build a Scroll-to-Top button",
    difficulty: "easy",
    description:
      "Create a button that smoothly scrolls the page back to the top.",
  },
  {
    link: "/paginationTable",
    screen: <PaginationTable />,
    name: "Build a Pagination Table ",
    difficulty: "hard",
    description:
      "**Pagination Table** with a search filter input. Users can search items by title",
  },
  {
    link: "/autoCompleteInputWithAPI",
    screen: <AutoCompleteInputWithAPI />,
    name: " autocomplete input with API",
    difficulty: "hard",
    description:
      " Implement an autocomplete input field that fetches suggestions from an API",
  },
];
