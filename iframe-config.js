//...
import './query-assigned-elements-214d6340.js';
import { Z as ZincVersion } from './zinc-api-f0859f9f.js';

const config = {
  title: 'Iframe',
  fallbackDisableSubmit: false,
  description: 'Iframe component which renders content from a source URL',
  iconUrl: 'rich-text',
  groupName: 'Visual',
  pluginAuthor: 'John Citizen',
  version: ZincVersion.CurrentVersion,
  properties: {
    src: {
      type: 'string',
      title: 'Source URL',
      description: 'URL of the content to display. Note that some sites may not allow content to be rendered in an iframe'
    },
    height: {
      type: 'string',
      title: 'Height',
      description: 'Height of the iframe'
    }
  },
  standardProperties: {
    readOnly: false,
    required: true,
    description: true
  }
};

export { config };