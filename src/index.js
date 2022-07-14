import { useSelect } from "@wordpress/data";

function MyComponent(props) {
  const { prefix } = props;

  const { title = "" } = useSelect((select) => {
    return select("core/editor").getCurrentPost();
  }, []);

  return (
    <h1>
      {prefix} {title}
    </h1>
  );
}

export default MyComponent;
