import "./App.css";
import { SelectInput } from "./components";

function App() {
  return (
    <main>
      <h1 className='text-xl'>
        Please run storybook to see all the components
      </h1>
      <SelectInput
        // multiple
        className='w-[500px]'
        options={[
          {
            label: "Option 1",
            value: "option1",
          },
          {
            label: "Option 2",
            value: "option2",
          },
          {
            label: "Option 3",
            value: "option3",
          },
        ]}
      />
    </main>
  );
}

export default App;
