<template>
  <div>
    <ul>
      <remindList
        v-for="resource in resources"
        :key="resource.id"
        :title="resource.title"
        :description="resource.description"
        :link="resource.link"
      ></remindList>
    </ul>
  </div>
</template>

<script>
import remindList from '@/components/resources/RemindList.vue';
export default {
  props: ['resources'],
  components: {
    remindList
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
