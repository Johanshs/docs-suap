// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
      starlight({
          title: 'Manual do SUAP',
          customCss: ['./src/styles/custom.css'],
          description: 'Documentação do Sistema Unificado de Administração Pública - SUAP - IFRR',
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }, 
                   { icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/caads.ifrr/' }],
          sidebar: [
              {
                  label: 'Guides',
                  items: [
                      // Each item here is one entry in the navigation menu.
                      { label: 'Example Guide', slug: 'guides/example' },
                      { label: 'Reference', slug: 'reference/example' },
                  ],
              },
              {
                  label: 'Reference',
                  autogenerate: { directory: 'reference' },
              },
          ],
      }),
	],

  adapter: vercel(),
});