import { Inter } from "next/font/google";
import Button from "./components/Buttons";
import Input from "./components/Input";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState<number | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const handleAdd = () => {
    const value = parseInt(
      (document.getElementById("input") as HTMLInputElement).value
    );
    if (isNaN(value)) return alert("Please enter a number");
    const newCount = count! + value;
    setCount(newCount);
    setHistory([...history, `Added ${value}`]);
  };

  const handleSubtract = () => {
    const value = parseInt(
      (document.getElementById("input") as HTMLInputElement).value
    );
    if (isNaN(value)) return alert("Please enter a number");

    const newCount = count! - value;
    setCount(newCount);
    setHistory([...history, `Subtracted ${value}`]);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-[100%] px-80">
        <h1 className="text-3xl my-4">Counter App</h1>
        <div className="flex items-center">
          <Input
            count={count}
            type="number"
            id="input"
            placeholder="Enter Number"
          />
          <span
            className={count === null ? "text-xl ms-2 hidden" : "text-xl ms-2"}
          >
            = {count}
          </span>
        </div>
        <div className="grid gap-5 grid-cols-2 py-4">
          <Button Function={handleAdd} name="Add" />
          <Button Function={handleSubtract} name="Subtract" />
        </div>
        <div>
          <h2 className="text-xl">History</h2>
          <ul className="mt-2">
            {history.map((entry, index) => (
              <li key={index}>{entry}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
