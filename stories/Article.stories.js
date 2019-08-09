import React from 'react'
import { storiesOf } from '@storybook/react'

import Article from '../src/Article/Article'
import ArticleTitle from '../src/Article/ArticleTitle'
import ArticleMeta from '../src/Article/ArticleMeta'

storiesOf('Article', module).add('Article', () => {
  return (
    <Article>
      <ArticleTitle>Article Title</ArticleTitle>
      <ArticleMeta>
        Written by <a>Super User</a> on 21 July 2019. Posted in <a>Blog</a>
      </ArticleMeta>
      <p className="text-lead">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        repellendus excepturi, consequatur illo rerum, non sint asperiores
        dolore sapiente, vitae blanditiis. Officiis at quaerat modi earum,
        fugiat magni impedit, aperiam.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure
        totam nam debitis aliquid impedit, et quas omnis aspernatur optio
        molestias ex laborum quia. Ducimus culpa tempore, veritatis officia
        delectus dolore dignissimos reprehenderit vero, sunt odit placeat est
        non molestiae ipsa nam velit in iusto hic quasi similique facere.
        Maxime?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti iure
        totam nam debitis aliquid impedit, et quas omnis aspernatur optio
        molestias ex laborum quia. Ducimus culpa tempore, veritatis officia
        delectus dolore dignissimos reprehenderit vero, sunt odit placeat est
        non molestiae ipsa nam velit in iusto hic quasi similique facere.
        Maxime?
      </p>
    </Article>
  )
})
