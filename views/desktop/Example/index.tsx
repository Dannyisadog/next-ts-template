import { useExampleContext } from 'providers/example/Provider';

const Example = () => {
	const { data } = useExampleContext();
	return <div>123</div>;
};

export default Example;
