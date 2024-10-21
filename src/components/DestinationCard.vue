<script setup>

defineProps(['destination'])

const tagsDelay = (index) => {
  switch (index) {
    case 0:
      return "group-hover:delay-[200ms]";
    case 1:
      return "group-hover:delay-[350ms]"
  }
}

const avatarDelay = (index) => {
  switch (index) {
    case 0:
      return "group-hover:delay-[200ms]";
    case 1:
      return "group-hover:delay-[250ms]"
    case 2:
      return "group-hover:delay-[300ms]"
    case 3:
      return "group-hover:delay-[350ms]"
  }
}

</script>

<template>
  <section v-if="destination"
    class="group relative max-w-sm rounded-lg flex flex-col gap-y-3 before:absolute before:inset-0 before:bg-white before:rounded-lg before:scale-y-75 before:z-0 before:origin-top-left hover:before:scale-y-100 before:transition before:ease-in-out before:duration-500">

    <img
      class="mx-5 z-10 h-96 object-cover -mt-20 rounded-lg shadow-lg transition-[margin] duration-300 group-hover:mx-0"
      :src="destination.previewSrc" :alt="destination.previewAlt" />

    <div class="px-5 pb-5 z-10">

      <ul class="flex space-x-2 mb-2">
        <li v-for="({ label, link }, index) in destination.tags" :key="index"
          :class="`px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-full opacity-0 transition-opacity delay-0 duration-0 group-hover:opacity-100 group-hover:duration-500 ${tagsDelay(index)}`">
          <a :href="link">{{ label }}</a>
        </li>
      </ul>

      <div class="flex justify-between items-center mb-2 -translate-y-8 duration-300 group-hover:translate-y-0">
        <h2 class="destination-name text-2xl transition-[font-variation-settings] duration-500">{{ destination.name }}
        </h2>
        <div class="flex">
          <template v-for="i in 5" :key="i">
            <svg v-if="i <= 2" class="w-4 h-4 text-green-500 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
            <svg v-else class="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
          </template>
        </div>
      </div>

      <p
        class="text-gray-600 text-sm opacity-0 -translate-x-3 transition delay-0 duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200">
        {{ destination.description }}
      </p>

      <div class="flex items-center justify-between mt-3">
        <ul class="inline-flex items-center">
          <li
            :class="`overflow-hidden rounded-full w-[3ch] h-[3ch] -ml-3 first:ml-0 opacity-0 transition-opacity delay-0 duration-200 group-hover:opacity-100 ${avatarDelay(index)}`"
            v-for="({ avatarSrc }, index) in destination.communityRatings" :key="index">
            <img :src="avatarSrc" />
          </li>
        </ul>
        <a href="#"
          class="text-sm opacity-0 -translate-x-3 transition delay-0 duration-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:delay-200 group-hover:duration-300">
          Explorer
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.group:hover .destination-name {
  font-variation-settings: 'wght' 600;
}
</style>