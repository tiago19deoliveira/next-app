/* eslint-disable @typescript-eslint/no-unused-vars */
type Props = {
  children?: string;
  clickClient?: VoidFunction;
};

function ButtonChat({ children, clickClient }: Props) {
  return (
    <div>
      <button onClick={clickClient}>{children} </button>
    </div>
  );
}

export default ButtonChat;
