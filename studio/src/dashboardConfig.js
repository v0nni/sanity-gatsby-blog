export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601e109e3966b2d6f806b98e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3g1gj54i',
                  apiId: '81742558-7973-4c2d-981e-fa96e930b313'
                },
                {
                  buildHookId: '601e109ebcf6cde05f01bcc4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-zjw7nfuh',
                  apiId: '3a909b24-426e-434c-9e05-152c5fd0b301'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/v0nni/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-zjw7nfuh.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
