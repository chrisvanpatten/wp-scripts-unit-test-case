import { useSelect } from "@wordpress/data";
import { BaseControl } from "@wordpress/components";

function MyComponent(props) {
  const { prefix } = props;

  const { title = "" } = useSelect((select) => {
    return select("core/editor").getCurrentPost();
  }, []);

  return (
    <BaseControl>
      <h1>
        {prefix} {title}
      </h1>
    </BaseControl>
  );
}

export default MyComponent;
