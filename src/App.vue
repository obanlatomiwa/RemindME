<template>
  <div>
    <ul>
      <remindList
        v-for="resources in storedResources"
        :key="resources.id"
        :title="resources.title"
        :description="resources.description"
        :link="resources.link"
      ></remindList>
    </ul>
  </div>
</template>

<script>
import remindList from '@/components/resources/remindList.vue';
export default {
  components: {
    remindList
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    };
  }
};
</script>

<style scoped></style>