interface ButtonProps {
  value?: string;
}

export default function Button({ value }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => alert(`Hello from your app!`)}
    >
      {value}
    </button>
  );
}
