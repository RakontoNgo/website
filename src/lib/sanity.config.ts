/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import StudioNavabar from '@/components/studio/StudioNavBar';
import { colorInput } from '@sanity/color-input';
import { apiVersion, dataset, projectId } from '../../sanity/env';
import schema from '../../sanity/schema';
import myTheme from '../../sanity/theme';

export default defineConfig({
  basePath: '/studio',
  name: 'RAKONTO_Content_Studio',
  title: 'Rakonto | Content Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    colorInput(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  studio: {
    components: {
      navbar: StudioNavabar,
    },
  },
  theme: myTheme,
});
