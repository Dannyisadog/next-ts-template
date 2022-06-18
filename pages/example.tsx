import { NextPage } from 'next';
import ExampleProvider from 'providers/example/Provider';
import { ContextProperty } from 'providers/shared/constants';
import Example from 'views/desktop/Example';

interface Props {
  data: ContextProperty;
}

const ExamplePage: NextPage<Props> = (props) => {
	return (
		<ExampleProvider data={{ ...props }}>
			<Example />
		</ExampleProvider>
	);
};

export default ExamplePage;

export async function getServerSideProps() {
	return {
		props: {
			data: {
				title: 'Example',
				description: 'Example',
				url: 'https://example.com',
				image: 'https://example.com/image.jpg',
			},
		},
	};
}
