import {
  Button,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/atoms";
import "./App.css";

function App() {
  return (
    <>
      <h1>W-DESIGN</h1>
      <Button></Button>
      <Input type='email' />
      <Select>
        <SelectTrigger className='w-[400px]'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectContent>
      </Select>
      <Textarea />
    </>
  );
}

export default App;
