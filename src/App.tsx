import { Switch } from "@/components/atoms";
import "./App.css";
import { HandCoinsIcon } from "lucide-react";

function App() {
  return (
    <main className='flex flex-col space-y-8'>
      <Switch size='default' label={"Label"} variant='default' defaultChecked />
      <Switch
        size='small'
        label={
          <p className='flex items-center gap-1'>
            Click Me
            <span>
              <HandCoinsIcon className='h-4 w-4' />
            </span>
          </p>
        }
      />

      <Switch
        size='default'
        label={"Label"}
        variant='primary'
        defaultChecked
        disabled
      />
      <Switch
        size='default'
        label={"Label"}
        variant='secondary'
        defaultChecked
      />
    </main>
  );
}

export default App;
