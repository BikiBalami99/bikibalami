import type { Preview } from '@storybook/react-vite';
import '../src/global.css';
import '../src/index.css';
import './storybook.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0f0f0f',
        },
        {
          name: 'light',
          value: '#f1f1f1',
        },
      ],
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;