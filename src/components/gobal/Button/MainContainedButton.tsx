const MainContainedButton = (props: { href: string; text: string }) => {
  return (
    <a
      className="px-10 py-3 bg-main-400 text-gray-200 text-md font-semibold rounded-md hover:bg-main-300 mt-3"
      href={props.href}
    >
      {props.text}
    </a>
  );
};

export default MainContainedButton;
