// Docs at https://v2.docusaurus.io/docs/configuration


// Replace 'project-blueprint' with Diversity Equity & Inclusion Special Interest Group
const projectName = 'Diversity Equity & Inclusion Special Interest Group'
// Replace 'project-blueprint' with Diversity Equity & Inclusion Special Interest Group
const projectSlug = 'Diversity Equity & Inclusion Special Interest Group'
// Replace 'FINOS' with FINOS
const copyrightOwner = 'FINOS'

module.exports = {
  title: `Diversity Equity & Inclusion`,
  tagline: `FINOS DEI Special Interest Group`, 
  url: 'https://finos.org',
  baseUrl: '/',
  favicon: 'img/favicon/favicon-finos.ico',
  projectName: `FINOS Diversity Equity & Inclusion Special Interest Group `,
  organizationName: 'FINOS',
  customFields: {
    repoUrl: `https://github.com/finos/DEI-SIG`,
  },
  scripts: ['https://buttons.github.io/buttons.js', 'https://kit.fontawesome.com/b9d83db3bd.js'],
  stylesheets: ['https://fonts.googleapis.com/css?family=Overpass:400,400i,700', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'],
  themeConfig: {
    navbar: {
      title: `FINOS Diversity Equity & Inclusion Special Interest Group `,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
      },
      items: [
        {to: 'docs/meetings', label: 'Meetings', position: 'right'},
        {to: 'docs/team', label: 'Team', position: 'right'},
        {
          href: 'https://github.com/finos/',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Diversity Equity & Inclusion Special Interest Group  - FINOS`,
      logo: {
        alt: 'FINOS Logo',
        src: 'img/favicon/favicon-finos.ico',
        href: 'https://finos.org'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Meetings',
              to: 'docs/meetings',
            },
            {
              label: 'Team',
              to: 'docs/team',
            },            
            {
              label: 'About FINOS',
              to: 'docs/about-finos',
            }
          ]
        },
        {
          title: 'About FINOS',
          items: [
            {
              label: 'FINOS Projects on GitHub',
              to: 'https://github.com/finos',
            },
            {
              label: 'Engage the FINOS Community',
              to: 'https://www.finos.org/engage-with-our-community',
            },
            {
              label: 'FINOS News and Events',
              to: 'https://www.finos.org/news-and-events',
            }
          ]
        },
      ]
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          editUrl:
            'https://github.com/finos/DEI-SIG/edit/main/website/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-QK9HW73NGJ'
        }
      }
    ]
  ]
};
