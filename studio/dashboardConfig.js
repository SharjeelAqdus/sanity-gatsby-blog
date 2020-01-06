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
                  buildHookId: '5e131811f44bf67738ad01d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pnxbop3r',
                  apiId: '1634e390-6b0d-49e4-b639-18019dc66491'
                },
                {
                  buildHookId: '5e131811f44bf6a460ad01af',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8rwmqtaz',
                  apiId: '2c437a02-9154-467f-ad30-55137fdc2b10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/SharjeelAqdus/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8rwmqtaz.netlify.com', category: 'apps' }
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
