<script setup>
import { useData } from 'vitepress'
import Home from './components/Home.vue'
import DefaultTheme from 'vitepress/theme'
import PageProps from './components/PageProps.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()
</script>

<template>
  <h1>{{ frontmatter.page }}</h1>
  <Layout>
    <template v-if="frontmatter.layout === 'home'" #home-hero-after>
      <Home />
    </template>
    <template v-else-if="frontmatter.page === 'props'" #doc-footer-before>
      <PageProps />
    </template>
  </Layout>
</template>
