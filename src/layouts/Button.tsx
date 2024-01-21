
interface ButtonProps {
  title: string;
}

const Button : React.FC<ButtonProps> =({ title }) => {
  return (
    <div>
      <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out hover:text-black ">
        {title}
      </button>
    </div>
  );
};

export default Button;
